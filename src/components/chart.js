import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

var __avg = function(data) {
  return _.round(_.sum(data) / data.length);
}

export default function(props) {
  return (
    <div>
      <Sparklines data={props.data} svgHeight={100} svgWidth={180} >
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>    
      <div>{__avg(props.data)} {props.units}</div>
    </div>
  );
}