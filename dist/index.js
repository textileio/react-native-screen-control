"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const { RNScreenControl } = react_native_1.NativeModules;
function letScreenSleep() {
    RNScreenControl.letScreenSleep();
}
exports.letScreenSleep = letScreenSleep;
function keepScreenOn() {
    RNScreenControl.keepScreenOn();
}
exports.keepScreenOn = keepScreenOn;
