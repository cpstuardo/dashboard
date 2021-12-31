import React, { useState, useEffect, Fragment } from "react";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import BarPlot from "./components/barPlot";
import PiePlot from "./components/piePlot";
import dataPie from "./data/dataPie";
import dataBar from "./data/dataBar";

function App() {
  const [width, setWindowWidth] = useState(0);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const barKeys = ["hot dog", "burger", "sandwich", "kebab", "fries", "donut"];
  return (
    <div className="App">
      <h1>Dashboard</h1>
      <Fragment>
        <Container className="app-container">
          <Row
            style={{
              flex: 1,
              display: "flex",
              flexDirection: width > 900 ? "row" : "column",
            }}
          >
            <Col style={{ flex: 1 }}>
              <PiePlot data={dataPie} screenWidth={width} />
            </Col>
            <Col style={{ flex: 1 }}>
              <BarPlot
                data={dataBar}
                keys={barKeys}
                indexBy={"country"}
                axisXLegend={""}
                axisYLegend={""}
                screenWidth={width}
              />
            </Col>
          </Row>
        </Container>
      </Fragment>
    </div>
  );
}

export default App;

//<PiePlot data={dataPie} screenWidth={width} />
