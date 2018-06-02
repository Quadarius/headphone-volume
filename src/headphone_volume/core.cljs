(ns headphone-volume.core
    (:require
      [rum.core :as rum]
      [headphone-volume.conversion :as c]))

(enable-console-print!)
; (js* "debugger;")

(defonce output { :lo 1.7341133939350357
                  :hi 9.751636239757621
                  :iem 0.548372446 })

(defonce voltage-data (atom {:tspl 70 :sensitivity 105 :reqvolt nil :impedance 150}))
(defonce power-data (atom {:tspl 70 :efficiency 99 :ref 1.4 :impedance 470}))

(rum/defc create-slider [params param value min max]
  [:input {:type "range" :value value :min min :max max
           :style {:width "100%"}
           :class [""]
           :on-change (fn [e]
                        (swap! params assoc param (.. e -target -value))
                        (when (not= param :vol)
                          (swap! params assoc :vol nil)))}])

(rum/defc create-input-field [params param value]
  [:input {:type "text" :value value
           :style { :witdh "100%"}
           :class ["calc-input"]
           :on-change (fn [e]
                        (swap! params assoc param (.. e -target -value))
                        (when (not= param :vol)
                          (swap! params assoc :vol nil)))}])

(defn gain-based-on-sensitivity
  "Calculates gain required to reach target loudness based on voltage sensitivity"
  [{ :keys [tspl sensitivity vol reqvolt] :as data}]
  (let [v (c/voltage-required tspl sensitivity)]
    (if (nil? vol)
      (assoc data :vol (c/voltage-gain-required v (:lo output)))
      (assoc data :reqvolt (c/voltage-required tspl sensitivity)))))

(defn gain-based-on-efficiency
  "Calculates gain required to reach target loudness based on power efficiency"
  [{ :keys [tspl efficiency vol impedance] :as data}]
  (let [p (c/power-required tspl efficiency)
        v (c/power-to-voltage p impedance)]
    (if (nil? vol)
      (assoc data :vol (c/voltage-gain-required v (:lo output))))))

(defn pretty-volume [vol]
  (Math/floor vol))

; (rum/defc)

(rum/defc volume-calculator-sensitivity < rum/reactive []
  (let [{:keys [tspl sensitivity vol reqvolt]} (gain-based-on-sensitivity (rum/react voltage-data))]
    [:div.volume-card
      [:h2.volume "Volume: " (pretty-volume vol)]
      ; [:div vol]
      ; [:div "required voltage: " (c/voltage-required tspl sensitivity)]
      [:form
        [:div
          [:label "Target SPL: " tspl
            (create-slider voltage-data :tspl tspl 40 110)]]
        [:div 
          [:label "Sensitivity (dB/Vrms): "
            (create-input-field voltage-data :sensitivity sensitivity)]]]]))

(rum/defc volume-calculator-efficiency < rum/reactive []
  (let [{:keys [tspl efficiency vol impedance]} (gain-based-on-efficiency (rum/react power-data))]
    [:div.volume-card
      [:h3.volume "Volume: " (pretty-volume vol)]
      ; [:div "required voltage: " (c/power-to-voltage (c/power-required tspl efficiency) impedance)]
      [:form
        [:div
          [:label "Target SPL: " tspl
            (create-slider power-data :tspl tspl 40 110)]
        [:div
          [:label "Sensitivity (dB/mW): "
            (create-input-field power-data :efficiency efficiency)]]
        [:div
          [:label "Impedance: "
            (create-input-field power-data :impedance impedance)]]]]]))

(rum/defc app []
  [:div.container
   (rum/with-key (volume-calculator-sensitivity) "volt")
   (rum/with-key (volume-calculator-efficiency) "powr")])

(println (c/voltage-required (:tspl @voltage-data) (:sensitivity @voltage-data)))

(rum/mount (app) (js/document.getElementById "app"))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
