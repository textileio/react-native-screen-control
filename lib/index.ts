import { NativeModules } from 'react-native'

const { RNScreenControl } = NativeModules

export function letScreenSleep() {
  RNScreenControl.letScreenSleep()
}

export function keepScreenOn() {
  RNScreenControl.keepScreenOn()
}
