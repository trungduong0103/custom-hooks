import React from "react";
import "./App.css";
import useFixedMeasureCbRef from "./hooks/useFixedMeasureCbRef";
import useFixedMeasureRef from "./hooks/useFixedMeasureRef";

const flexCentered = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
} as React.CSSProperties;

const measureTagStyle = {
  width: 550,
  height: 50,
  textAlign: "center",
} as React.CSSProperties;

function FixedMeasurementsWithCbRef() {
  const { dimensions, fixedMeasureRef } = useFixedMeasureCbRef();

  const Tag = "h1";

  return (
    <div style={flexCentered}>
      <Tag style={measureTagStyle} ref={fixedMeasureRef}>
        This is measured with callback ref
      </Tag>

      <span>
        {Tag} dimensions: {JSON.stringify(dimensions)}
      </span>
    </div>
  );
}

function FixedMeasurementsWithRef() {
  const { dimensions, fixedMeasureRef } = useFixedMeasureRef();
  const Tag = "h1";

  return (
    <div style={flexCentered}>
      <Tag style={measureTagStyle} ref={fixedMeasureRef}>
        This is measured with ref
      </Tag>
      <span>
        {Tag} dimensions: {JSON.stringify(dimensions)}
      </span>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <FixedMeasurementsWithCbRef />
      <FixedMeasurementsWithRef />
    </div>
  );
}

export default App;
