(ns headphone-volume.core
    (:require
      [rum.core :as rum]
      [headphone-volume.convert :as c]))

(enable-console-print!)
; (js* "debugger;")

(defrecord source [name voltage])
(def rme-lo (->source "RME ADI-2 DAC LO OUTPUT" 1.73))
(def rme-hi (->source "RME ADI-2 DAC HI OUTPUT" 10))
(def rme-iem (->source "RME ADI-2 DAC IEM OUTPUT" 0.55))
(def sources [rme-lo rme-hi rme-iem])
(defrecord headphone [id name sensitivity sensitivity-type impedance voltage90db])
(def THX00
  (map->headphone {:id 0
                   :name "Fostex TH-X00"
                   :sensitivity 94
                   :impedance 25
                   :sensitivity-type :current
                   :voltage90db 0.068}))
(def R70x
  (map->headphone {:id 1
                   :name "Audio Technica ATH-R70x"
                   :sensitivity 98
                   :impedance 470
                   :sensitivity-type :current
                   :voltage90db 0.195}))
(def HD58X
  (map->headphone {:id 2
                   :name "Sennheiser HD 58X Jubilee"
                   :sensitivity 104
                   :impedance 150
                   :sensitivity-type :voltage
                   :voltage90db nil}))
(def HE400i
  (map->headphone {:id 3
                   :name "HIFIMAN HE400i"
                   :sensitivity 93
                   :impedance 35
                   :sensitivity-type :current
                   :voltage90db 0.168}))
(def LCD2C
  (map->headphone {:id 4
                   :name "AUDEZE LCD2 Classic"
                   :sensitivity 101
                   :impedance 70
                   :sensitivity-type :current
                   :voltage90db 0.110}))
(def X2
   (map->headphone {:id 5
                    :name "Phillips Fidelio X2"
                    :sensitivity 100
                    :impedance 30
                    :sensitivity-type :current
                    :voltage90db nil}))

(def headphones [THX00 R70x HD58X HE400i LCD2C X2])

(defonce app-state (atom {:target-peak 75
                          :voltage-required nil
                          :current-required nil
                          :lo nil
                          :hi nil
                          :iem nil
                          :headphone (first headphones)
                          :use90db false}))

(rum/defc render-headphone-selector
  [state]
  [:div.select.headphone-selector
   [:select
     {:on-change (fn [e]
                   (let [v (.. e -target -value)]
                     (println v)
                     (swap! state assoc :headphone (nth headphones (int v)))))
      :value (:id (:headphone state))}
    (for [h headphones]
      [:option { :key (:id h)
                 :value (:id h)} (:name h)])]])

(rum/defc render-headphone-specs
  [headphone]
  [:div
   [:div "Impedance " (:impedance headphone)]
   [:div "Sensitivity " (:sensitivity headphone)]])

(rum/defc render-results
  [l h i voltage current]
  [:div
   [:div.result "Required Gain LO: " (Math/floor l) [:small " ± 3 dB"]]
   [:div.result "Required Gain HI: " (Math/floor h) " ± 3 dB"]
   [:div.result "Required Gain IEM: " (Math/floor i) " ± 3 dB"]
   [:div.result "Required Voltage: " voltage]
   [:div.result "Required Current: " current]])

(rum/defc render-target-peak [target-peak state]
  [:div
    [:label "Peak SPL: " target-peak]
    [:input {:type "range" :value target-peak :min 40 :max 110
             :style {:width "100%"}
             :on-change (fn [e]
                           (swap! state assoc :target-peak (.. e -target -value)))}]])

(rum/defc render-app [headphone lo hi iem voltage current target-peak state]
  [:div.volume-card
    (render-headphone-selector state)
    (render-headphone-specs headphone)
    (render-results lo hi iem voltage current)
    (render-target-peak target-peak state)])

(defn do-the-calculations-c [{:keys [target-peak headphone] :as state}]
    (let [c (c/efficiency-to-power target-peak (:sensitivity headphone))
          v (c/power-to-voltage c (:impedance headphone))
          lo (c/voltage-to-gain v (:voltage rme-lo))
          hi (c/voltage-to-gain v (:voltage rme-hi))
          iem (c/voltage-to-gain v (:voltage rme-iem))]
      (assoc state :lo lo :hi hi :iem iem :voltage-required v :current-required c)))

(defn do-the-calculations-v [{:keys [target-peak headphone] :as state}]
  (let [v (c/sensitivity-to-voltage target-peak (:sensitivity headphone))
        c (c/voltage-to-power v (:impedance headphone))
        lo (c/voltage-to-gain v (:voltage rme-lo))
        hi (c/voltage-to-gain v (:voltage rme-hi))
        iem (c/voltage-to-gain v (:voltage rme-iem))]
    (println v)
    (assoc state :lo lo :hi hi :iem iem :voltage-required v :current-required c)))

(defn do-the-calculations
  [{:keys [headphone] :as state}]
  (cond
    (= (:sensitivity-type headphone) :current) (do-the-calculations-c state)
    (= (:sensitivity-type headphone) :voltage) (do-the-calculations-v state)))

(rum/defc app-container < rum/reactive []
  (let [{:keys [headphone lo hi iem voltage-required current-required target-peak]} (do-the-calculations (rum/react app-state))]
    (render-app headphone lo hi iem voltage-required current-required target-peak app-state)))

(rum/defc app []
  [:div.container
    (app-container)])

(rum/mount (app) (js/document.getElementById "app"))

(defn on-js-reload [])
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
