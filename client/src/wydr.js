import React from "react";

if (process.env.NODE_ENV === "development") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  whyDidYouRender(React, {
    trackAllPureComponents: true,
    trackHooks: true,
    trackComponentUpdates: true,
    trackComponentSize: true,
    trackRefs: true,
    trackContext: true,
    trackChildren: true,
    trackProps: true,
    trackError: true,
    trackSuspense: true,
    logOnDifferentValues: true,
    logOnRender: true,
    logOnUpdates: false,
    logOnSuspenseFallback: true,
    customHooks: ["useSelector", "useDispatch"],
  });
}
