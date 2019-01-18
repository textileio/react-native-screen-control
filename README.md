
# react-native-screen-control

## Getting started

`$ npm install @textile/react-native-screen-control --save`

### Mostly automatic installation

`$ react-native link @textile/react-native-screen-control`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `@textile/react-native-screen-control` and add `RNScreenControl.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNScreenControl.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import io.textile.screencontrol.RNScreenControlPackage;` to the imports at the top of the file
  - Add `new RNScreenControlPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-screen-control'
  	project(':react-native-screen-control').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-screen-control/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-screen-control')
  	```


## Usage
```javascript
import { keepScreenOn, letScreenSleep } from 'react-native-screen-control'
```
  
