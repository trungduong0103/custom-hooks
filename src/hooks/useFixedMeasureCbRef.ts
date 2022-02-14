import React from "react";

function useFixedMeasureCbRef() {
  const [dimensions, setDimensions] = React.useState<DOMRect | null>(null);

  const fixedMeasureRef = React.useCallback((node: HTMLElement | null) => {
    if (node !== null) {
      setDimensions(node.getClientRects()[0]);
    }
  }, []);

  return { dimensions, fixedMeasureRef};
}

export default useFixedMeasureCbRef;
