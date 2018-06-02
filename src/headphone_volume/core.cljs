(ns headphone-volume.core
    (:require
      [rum.core :as rum]
      [headphone-volume.conversion :as c]))

(enable-console-print!)
; (js* "debugger;")

(defonce output { :lo 1.7341133939350357
                  :hi 9.751636239757621
                  :iem 0.548372446 })
(defonce voltage-data (atom {:tspl 70 :voltage-sen 105 :reqvolt nil :impedance 150}))
(defonce power-data (atom {:tspl 70 :power-sen 99 :ref 1.4 :impedance 470}))

(rum/defc slider [params param value min max]
  [:input {:type "range" :value value :min min :max max
           :style {:width "100%"}
           :on-change (fn [e]
                        (swap! params assoc param (.. e -target -value))
                        (when (not= param :vol)
                          (swap! params assoc :vol nil)))}])

(rum/defc string-input [params param value]
  [:input {:type "text" :value value
           :style {:witdh "100%"}
           :on-change (fn [e]
                        (swap! params assoc param (.. e -target -value))
                        (when (not= param :vol)
                          (swap! params assoc :vol nil)))}])

(defn calc-vol-from-voltage []
  (let [{:keys [tspl voltage-sen vol ref reqvolt] :as data} (rum/react voltage-data)
        v (c/voltage-required tspl voltage-sen)]
    (if (nil? vol)
      (assoc data :vol (c/voltage-gain-required v (:lo output)))
      (assoc data :reqvolt (c/voltage-required tspl voltage-sen)))))

(defn calc-vol-from-power []
  (let [{ :keys [tspl power-sen vol ref impedance] :as data} (rum/react power-data)
          p (c/power-required tspl power-sen)
          v (c/power-to-voltage p impedance)]
    (if (nil? vol)
      (assoc data :vol (c/voltage-gain-required v (:lo output))))))

(defn pretty-volume [vol]
  (Math/floor vol))

(rum/defc vol-from-voltage-sensitivity < rum/reactive []
  (let [{:keys [tspl voltage-sen vol reqvolt]} (calc-vol-from-voltage)]
    [:div
      [:h3 "Vol calculator"]
      [:h2 "Volume: " (pretty-volume vol)]
      [:small vol]
      [:h3 "required voltage: " (c/voltage-required tspl voltage-sen)]
      [:div "Sensitivity (dB/Vrms): " (string-input voltage-data :voltage-sen voltage-sen)]
      [:div "Target SPL: " (int tspl) (slider voltage-data :tspl tspl 40 110)]]))

(rum/defc vol-from-power-efficiency < rum/reactive []
  (let [{:keys [tspl power-sen vol impedance]} (calc-vol-from-power)]
    [:div
      [:h3 "Vol calculator"]
      [:h2 "Volume: " vol]
      [:h3 "required voltage: " (c/power-to-voltage (c/power-required tspl power-sen) impedance)]
      [:div "Sensitivity (dB/mW): " (string-input power-data :power-sen power-sen)]
      [:div "Impedance: " (string-input power-data :impedance impedance)]
      [:div "Target SPL: " (int tspl) (slider power-data :tspl tspl 40 110)]]))

(rum/defc app []
  [:div
   (rum/with-key (vol-from-voltage-sensitivity) "volt")
   (rum/with-key (vol-from-power-efficiency) "powr")])

(println (c/voltage-required (:tspl @voltage-data) (:voltage-sen @voltage-data)))

(rum/mount (app) (js/document.getElementById "app"))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
