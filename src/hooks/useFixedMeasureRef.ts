import React from "react";

function useFixedMeasureRef() {
  const [dimensions, setDimensions] = React.useState<DOMRect | null>(null);
  // difference with ref callback: must explicitly set null
  const fixedMeasureRef = React.useRef<
    HTMLInputElement | HTMLHeadingElement | null
  >(null);

  React.useLayoutEffect(() => {
    if (fixedMeasureRef.current) {
      setDimensions(fixedMeasureRef.current.getClientRects()[0]);
    }
  }, []);

  return { dimensions, fixedMeasureRef };
}

export default useFixedMeasureRef;
