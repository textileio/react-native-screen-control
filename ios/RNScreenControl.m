#import "RNScreenControl.h"

// import RCTBridge
#if __has_include(<React/RCTBridge.h>)
#import <React/RCTBridge.h>
#elif __has_include(“RCTBridge.h”)
#import “RCTBridge.h”
#else
#import “React/RCTBridge.h” // Required when used as a Pod in a Swift project
#endif

@implementation RNScreenControl

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(letScreenSleep) {
  dispatch_async(dispatch_get_main_queue(), ^{
    UIApplication.sharedApplication.idleTimerDisabled = NO;
  });
}

RCT_EXPORT_METHOD(keepScreenOn) {
  dispatch_async(dispatch_get_main_queue(), ^{
    UIApplication.sharedApplication.idleTimerDisabled = YES;
  });
}

@end
