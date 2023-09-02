import React from 'react'
import { Svg, SvgProps } from '@pancakeswap/uikit'

const WhiteBunny: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 27 26" {...props}>
      <mask
        id="white-bunny-path-1-outside-1"
        maskUnits="userSpaceOnUse"
        x="0.5"
        y="-0.0263672"
        width="26"
        height="26"
        fill="black"
      >
        <rect fill="white" x="0.5" y="-0.0263672" width="26" height="26" />
        
      </mask>

    </Svg>
  )
}

export default WhiteBunny
