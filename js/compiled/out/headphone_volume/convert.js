// Compiled by ClojureScript 1.10.238 {}
goog.provide('headphone_volume.convert');
goog.require('cljs.core');
/**
 * Converts voltage(V) to power(mW)
 */
headphone_volume.convert.voltage_to_power = (function headphone_volume$convert$voltage_to_power(voltage,impedance){
return (((voltage * voltage) / impedance) / (1000));
});
/**
 * Converts power(mW) to Voltage(Vrms)
 */
headphone_volume.convert.power_to_voltage = (function headphone_volume$convert$power_to_voltage(power,impedance){
return Math.sqrt(((power / (1000)) * impedance));
});
/**
 * Calculates SPL peak from power efficiency and input power(Pmax mW)
 */
headphone_volume.convert.power_to_efficiency = (function headphone_volume$convert$power_to_efficiency(efficiency,input){
return (efficiency + ((10) * Math.log10(input)));
});
/**
 * Calculates SPL peak from voltage sensitivity and input voltage(Vmax)
 */
headphone_volume.convert.voltage_to_sensitivity = (function headphone_volume$convert$voltage_to_sensitivity(sensitivity,input){
return (sensitivity + ((20) * Math.log10(input)));
});
/**
 * Calculates power(mW) requied to reach target SPL peak at efficiency(dB/mW)
 */
headphone_volume.convert.efficiency_to_power = (function headphone_volume$convert$efficiency_to_power(target,efficiency){
return Math.pow((10),((target - efficiency) / (10)));
});
/**
 * Calculates voltage(Vrms) requied to reach target SPL peak at sensitivity(dB/Vrms)
 */
headphone_volume.convert.sensitivity_to_voltage = (function headphone_volume$convert$sensitivity_to_voltage(target,sensitivity){
return Math.pow((10),((target - sensitivity) / (20)));
});
/**
 * Calculates the ratio of voltages
 */
headphone_volume.convert.voltage_to_gain = (function headphone_volume$convert$voltage_to_gain(target,reference){
return ((20) * Math.log10((target / reference)));
});
/**
 * Cartion the ratio of powers
 */
headphone_volume.convert.power_to_gain = (function headphone_volume$convert$power_to_gain(target,reference){
return ((10) * Math.log10((target / reference)));
});
/**
 * consumes Volts RMS required to reach 90db
 * produces SPL sensitivity db/V
 */
headphone_volume.convert.dbv90_to_sensitivity = (function headphone_volume$convert$dbv90_to_sensitivity(v){
return headphone_volume.convert.voltage_to_sensitivity.call(null,(90),((1) / v));
});

//# sourceMappingURL=convert.js.map?rel=1530931615957
