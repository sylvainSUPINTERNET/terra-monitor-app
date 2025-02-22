import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";
import * as d3Shape from "d3-shape";
import * as d3Scale from "d3-scale";

const data = [
  { x: 0, y: 10 },
  { x: 1, y: 40 },
  { x: 2, y: 80 },
  { x: 3, y: 20 },
  { x: 4, y: 60 },
];

const LineChart = () => {
  const width = 300;
  const height = 200;

  const xScale = d3Scale.scaleLinear().domain([0, 4]).range([0, width]);
  const yScale = d3Scale.scaleLinear().domain([0, 100]).range([height, 0]);

  const lineGenerator = d3Shape
  .line()
    /*@ts-ignore*/
  .x((d) => xScale(d.x))
    /*@ts-ignore*/
  .y((d) => yScale(d.y))
  .curve(d3Shape.curveLinear);

  /*@ts-ignore*/
  const pathData = lineGenerator(data);

  return (
    <View>
      <Svg width={width} height={height}>
        <Path d={pathData} fill="none" stroke="blue" strokeWidth={3} />
      </Svg>
    </View>
  );
};

export default LineChart;