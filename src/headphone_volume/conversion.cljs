(ns headphone-volume.conversion)

;;

(defn voltage-to-power
  "Converts voltage(V) to power(mW)"
  [voltage impedance]
  (/ (/ (* voltage voltage) impedance) 1000))

(defn power-to-voltage 
  "Converts power(mW) to Voltage(Vrms)"
  [power impedance]
  (Math/sqrt (* (/ power 1000) impedance)))

;;

(defn power-to-loudness 
  "Calculates SPL peak from power efficiency and input power(Pmax mW)"
  [efficiency input]
  (+ efficiency (* 10 (Math/log10 input))))

(defn voltage-to-loudness 
  "Calculates SPL peak from voltage sensitivity and input voltage(Vmax)"
  [sensitivity input]
  (+ sensitivity (* 20 (Math/log10 input))))

;;

(defn power-required
  "Calculates power(mW) requied to reach target SPL peak at efficiency(dB/mW)"
  [target efficiency]
  (Math/pow 10 (/ (- target efficiency) 10)))

(defn voltage-required
  "Calculates voltage(Vrms) requied to reach target SPL peak at sensitivity(dB/Vrms)"
  [target sensitivity]
  (Math/pow 10 (/ (- target sensitivity) 20)))

;; GAIN CALCULATORS

(defn voltage-gain-required
  "Calculates the ratio of voltages"
  [target reference]
  (* 20 (Math/log10 (/ target reference))))

(defn power-gain-required
  "Cartion the ratio of powers"
  [target reference]
  (* 10 (Math/log10 (/ target reference))))