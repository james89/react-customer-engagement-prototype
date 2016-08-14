import React from 'react';
import ReactDOM from 'react-dom';

class Thermometer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (

      <svg width="176px" height="598px" viewBox="1115 213 176 598" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <defs>
            <rect id="path-1" x={0} y="0.427554771" width={175} height={596} />
            <mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x={0} y={0} width={175} height={596} fill="white">
              <use xlinkHref="#path-1" />
            </mask>
            <path d="M122,468.768792 L122,95.432639 C122,77.2045092 107.221113,62.4275548 88.9904323,62.4275548 L86.0095677,62.4275548 C67.781058,62.4275548 53,77.2044343 53,95.432639 L53,469.627165 C41.9637975,479.339885 35,493.570479 35,509.427555 C35,538.698647 58.7289083,562.427555 88,562.427555 C117.271092,562.427555 141,538.698647 141,509.427555 C141,493.096724 133.613878,478.491014 122,468.768792 Z" id="path-3" />
            <mask id="mask-4" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x={0} y={0} width={106} height={500} fill="white">
              <use xlinkHref="#path-3" />
            </mask>
          </defs>
          <g id="NPS" stroke="none" strokeWidth={1} fill="none" fill-rule="evenodd" transform="translate(1115.000000, 213.000000)">
            <g id="Thermometer" transform="translate(0.000000, 0.572445)">
              <use id="Background" stroke="#D5D5D5" mask="url(#mask-2)" strokeWidth={0} fill="#FFFFFF" xlinkHref="#path-1" />
              <g id="Combined-Shape">
                <use stroke="#FFFFFF" mask="url(#mask-4)" strokeWidth={16} xlinkHref="#path-3" />
                <use stroke="#979797" strokeWidth={1} xlinkHref="#path-3" />
              </g>
              <ellipse id="Yellow-Circle" fill="#FED86F" cx="87.5" cy="508.927555" rx="45.5" ry="45.5" />
              <rect id="Goal-Line-(60)" fill="#E7E7E7" x={61} y="175.427555" width={53} height={333} />
              <rect id="NPS-Line-(20)" fill="#FED86F" x={61} y="241.427555" width={53} height={267} />
              <g id="Lines" transform="translate(88.000000, 109.000000)" stroke="#75787B" strokeLinecap="square">
                <path d="M31.7352941,248.87884 L14.2647059,248.87884" id="Line-Copy-13" />
                <path d="M31.7352941,148.365784 L14.2647059,148.365784" id="Line-Copy-14" />
                <path d="M31.7352941,50.6840826 L14.2647059,50.6840826" id="Line-Copy-19" />
                <path d="M31.7352941,216.318273 L14.2647059,216.318273" id="Line-Copy-15" />
                <path d="M31.7352941,313.999975 L14.2647059,313.999975" id="Line-Copy-11" />
                <path d="M31.7352941,115.805217 L14.2647059,115.805217" id="Line-Copy-16" />
                <path d="M31.7352941,18.1235153 L14.2647059,18.1235153" id="Line-Copy-20" />
                <path d="M31.7352941,183.757705 L14.2647059,183.757705" id="Line-Copy-17" />
                <path d="M31.7352941,281.439407 L14.2647059,281.439407" id="Line-Copy-12" />
                <path d="M31.7352941,83.2446499 L14.2647059,83.2446499" id="Line-Copy-18" />
                <path d="M33.5,265.866962 L0.5,265.866962" id="Line-Copy-13" />
                <path d="M33.5,165.353907 L0.5,165.353907" id="Line-Copy-14" />
                <path d="M33.5,67.6722046 L0.5,67.6722046" id="Line-Copy-19" />
                <path d="M33.5,233.306395 L0.5,233.306395" id="Line-Copy-15" />
                <path d="M33.5,330.988097 L0.5,330.988097" id="Line-Copy-11" />
                <path d="M33.5,132.793339 L0.5,132.793339" id="Line-Copy-16" />
                <path d="M33.5,35.1116373 L0.5,35.1116373" id="Line-Copy-20" />
                <path d="M33.5,200.745827 L0.5,200.745827" id="Line-Copy-17" />
                <path d="M33.5,298.427529 L0.5,298.427529" id="Line-Copy-12" />
                <path d="M33.5,100.232772 L0.5,100.232772" id="Line-Copy-18" />
                <path d="M33.5,2.55107003 L0.5,2.55107003" id="Line-Copy-21" />
              </g>
            </g>
            <g id="Numbers-Copy" transform="translate(131.000000, 102.000000)" fontSize={13} fontFamily="OpenSans-Bold, Open Sans" line-spacing={17} fill="#404040" font-weight="bold">
              <text id={-20}>
                <tspan x={0} y={212}>-20 </tspan>
              </text>
              <text id={-40}>
                <tspan x={0} y={244}>-40</tspan>
              </text>
              <text id={-60}>
                <tspan x={0} y={277}>-60 </tspan>
              </text>
              <text id={-80}>
                <tspan x={0} y={310}>-80 </tspan>
              </text>
              <text id={-100}>
                <tspan x={0} y={343}>-100</tspan>
              </text>
              <text id={0}>
                <tspan x={0} y={177}>0</tspan>
              </text>
              <text id={100}>
                <tspan x={0} y={14}>100 </tspan>
              </text>
              <text id={80}>
                <tspan x={0} y={46}>80 </tspan>
              </text>
              <text id={60}>
                <tspan x={0} y={79}>60 </tspan>
              </text>
              <text id={40}>
                <tspan x={0} y={112}>40 </tspan>
              </text>
              <text id={20}>
                <tspan x={0} y={145}>20 </tspan>
              </text>
            </g>
            <text id={20} fontFamily="OpenSans-Bold, Open Sans" fontSize={40} font-weight="bold" fill="#EE9825">
              <tspan x="64.6503906" y={525}>20</tspan>
            </text>
            <text fontFamily="OpenSans-Bold, Open Sans" fontSize={13} font-weight="bold" line-spacing={17} fill="#85BC40">
              <tspan x={19} y={29}>NPS </tspan>
            </text>
          </g>
        </svg>





    );
  }
}

export default Thermometer;
