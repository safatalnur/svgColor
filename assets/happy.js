// import React, { Component } from "react";
import React, { Component, useState} from 'react' //React Hook line
import Svg, { Circle, Path } from "react-native-svg";
// import {string} from "prop-types";

// export default class Icon extends Component {
function Icon(props) {


// render () {  // non-hook item
     // const { stroke, fill } =this.props

     // React Hooks Lines
     const [state, setState] = useState ({
          stroke: '#fff',
          fill: 'transparent'
     })

     let stroke = state.stroke
     let fill = state.fill

     return (
          <Svg id="Happy" xmlns="http://www.w3.org/2000/svg" width="50.449" height="50.449" viewBox="0 0 50.449 50.449">
               <Circle cx="25" cy="25" r="24" stroke={stroke} fill={fill} strokeWidth="1" />

               <Path id="Path_429" data-name="Path 429" d="M56.458,55.553a.628.628,0,0,0-.767.455,15.979,15.979,0,0,1-30.945.04.63.63,0,0,0-1.221.315,17.239,17.239,0,0,0,33.387-.044A.63.63,0,0,0,56.458,55.553Z" transform="translate(-14.989 -26.819)" stroke={stroke}/>
               <Path id="Path_430" data-name="Path 430" d="M26.8,37.8a.631.631,0,0,0,1.261,0,3.912,3.912,0,1,1,7.825,0,.631.631,0,0,0,1.261,0,5.174,5.174,0,1,0-10.347,0Z" transform="translate(-16.205 -18.356)" stroke={stroke}/>
               <Path id="Path_431" data-name="Path 431" d="M57.425,38.426a.63.63,0,0,0,.631-.631,3.912,3.912,0,1,1,7.825,0,.631.631,0,0,0,1.261,0,5.174,5.174,0,1,0-10.347,0A.63.63,0,0,0,57.425,38.426Z" transform="translate(-27.285 -18.356)" stroke={stroke}/>
               <Path id="Path_432" data-name="Path 432" d="M23.372,33.4a8.238,8.238,0,0,1,5.268-5.669.631.631,0,0,0-.417-1.191,9.512,9.512,0,0,0-6.084,6.6.63.63,0,0,0,1.233.262Z" transform="translate(-14.479 -16.095)" stroke={stroke}/>
               <Path id="Path_433" data-name="Path 433" d="M67.541,26.535a.631.631,0,0,0-.417,1.191,8.243,8.243,0,0,1,5.268,5.669.631.631,0,0,0,.616.5.671.671,0,0,0,.131-.013.631.631,0,0,0,.487-.748A9.516,9.516,0,0,0,67.541,26.535Z" transform="translate(-30.945 -16.095)" stroke={stroke}/>
          </Svg>
          );
     }

     export default Icon
// non-hooks items
// } 

// Icon.prototypes = {
//      stroke: String,
//      fill: String
// };

// Icon.defaultProps = {
//      stroke: '#fff',
//      fill: 'transparent'
// }