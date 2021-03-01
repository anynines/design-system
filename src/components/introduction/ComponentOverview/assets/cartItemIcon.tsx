import React from 'react'

const CartItemIcon = (): JSX.Element => {
  return (
    <svg
      width='240'
      height='200'
      viewBox='0 0 240 200'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='cart-item' transform='translate(8.000000, 73.000000)'>
          <rect id='cart-item-bg' fill='#062035' x='1' y='0' width='225' height='62' rx='6' />
          <path d='M6,0 L62,0 L62,0 L62,62 L6,62 C2.6862915,62 4.05812251e-16,59.3137085 0,56 L0,6 C-4.05812251e-16,2.6862915 2.6862915,6.08718376e-16 6,0 Z' id='cart-image-bg' fill='#E4833E' />
          <rect id='cart-title' fill='#FFFFFF' x='73' y='11' width='92' height='7' rx='2' />
          <rect id='cart-points' fill='#FFFFFF' x='173' y='40' width='34' height='8' rx='2' />
          <g id='cart-count' transform='translate(73.000000, 34.000000)'>
            <g id='minus-button'>
              <rect id='Rectangle' fill='#1D3252' x='0' y='0' width='19.52' height='19' rx='2' />
              <g id='minus-icon' transform='translate(4.880000, 3.750000)' fill='#FFFFFF' fillRule='nonzero'>
                <path d='M6.65520484,8.90056025 L1.73714084,3.98249625 C1.35923616,3.5928731 1.35587741,2.9804133 1.72959735,2.60695999 C2.10331729,2.23350668 2.71578609,2.23729099 3.10515384,2.61545925 L8.02225484,7.53351025 C8.39048146,7.92427355 8.38942378,8.52861459 8.01986648,8.89817189 C7.65030918,9.26772919 7.04596814,9.26878688 6.65520484,8.90056025 Z' id='Vereinigungsmenge_12' transform='translate(4.874613, 5.752685) rotate(-45.000000) translate(-4.874613, -5.752685) ' />
              </g>
            </g>
            <g id='plus-button' transform='translate(41.480000, 0.000000)'>
              <rect id='Rectangle' fill='#1D3252' x='0' y='0' width='19.52' height='19' rx='2' />
              <g id='plus-icon' transform='translate(4.880000, 4.750000)' fill='#FFFFFF' fillRule='nonzero'>
                <path d='M6.35844779,7.38125072 L4.89444779,5.91725072 L3.46944779,7.34225072 C3.15464548,7.65705302 2.63726574,7.65006865 2.3138478,7.32665071 C1.99042986,7.00323276 1.98344549,6.48585303 2.29824779,6.17105072 L3.72324779,4.74605072 L2.25924779,3.28205072 C2.04474115,3.07399567 1.9559104,2.76948089 2.0268175,2.4852719 C2.09772459,2.20106291 2.31736577,1.98126492 2.60152008,1.910159 C2.88567439,1.83905308 3.19024512,1.92767386 3.39844529,2.14203989 L4.86244529,3.60603989 L6.28744529,2.18103989 C6.6022476,1.86623759 7.11962733,1.87322195 7.44304528,2.19663989 C7.76646323,2.52005784 7.77344759,3.03743758 7.45864529,3.35223989 L6.03364529,4.77723989 L7.49764529,6.24123989 C7.81278551,6.56571301 7.8159391,7.07610368 7.50472801,7.38753697 C7.19351692,7.69897025 6.68313375,7.69617129 6.35844779,7.38125072 L6.35844779,7.38125072 Z' id='Vereinigungsmenge_11' transform='translate(4.869454, 4.752659) rotate(-45.000000) translate(-4.869454, -4.752659) ' />
              </g>
            </g>
            <text id='2' fontFamily='Lato-Bold, Lato' fontSize='9' fontWeight='bold' letterSpacing='0.127649812' fill='#FFFFFF'>
              <tspan x='26.84' y='12.40625'>2</tspan>
            </text>
          </g>
          <g id='image' transform='translate(14.000000, 14.000000)' fill='#FFFFFF' fillRule='nonzero'>
            <path d='M30.8125,0 L3.1875,0 C1.42707031,0 0,1.42707031 0,3.1875 L0,30.8125 C0,32.5729297 1.42707031,34 3.1875,34 L30.8125,34 C32.5729297,34 34,32.5729297 34,30.8125 L34,3.1875 C34,1.42707031 32.5729297,0 30.8125,0 Z M31.875,30.8125 C31.875,31.399332 31.399332,31.875 30.8125,31.875 L3.1875,31.875 C2.60066797,31.875 2.125,31.399332 2.125,30.8125 L2.125,3.1875 C2.125,2.60066797 2.60066797,2.125 3.1875,2.125 L30.8125,2.125 C31.399332,2.125 31.875,2.60066797 31.875,3.1875 L31.875,30.8125 Z' id='Shape' />
            <path d='M23.5870392,18.2500547 C23.1778273,17.831104 22.5170298,17.831104 22.1078179,18.2500547 L19.6949039,20.7351265 L15.1942946,16.0999273 C14.7850827,15.6809766 14.1242852,15.6809766 13.7150734,16.0999273 L6.37142184,23.6631894 C5.96581623,24.0892982 5.97230749,24.7733682 6.38604358,25.1911034 C6.57848659,25.3854522 6.83623564,25.4960649 7.10578699,25.5 L28.0876485,25.5 C28.6670101,25.5034256 29.1394298,25.0225507 29.1428571,24.4257958 C29.1444786,24.1354881 29.032619,23.8567954 28.8325045,23.6523847 L23.5870392,18.2500547 Z' id='Path' />
            <circle id='Oval' cx='20.0357143' cy='11.5357143' r='3.03571429' />
          </g>
        </g>
        <path d='M231,94 L234,94 L234,94 L234,112 L231,112 C229.895431,112 229,111.104569 229,110 L229,96 C229,94.8954305 229.895431,94 231,94 Z' id='Rectangle' fill='#1D3252' />
      </g>
    </svg>
  )
}

export default CartItemIcon
