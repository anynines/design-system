import React from 'react'
import styled from 'styled-components'

import { DefaultComponentProps } from '@types'

// I N T E R F A C E
export interface WrapperProps extends DefaultComponentProps {
  align?: WrapperAlignment
  bgColor?: WrapperBgColor
  direction?: WrapperDirection
  flexWrap?: WrapperFlexWrap
  height?: string
  justify?: WrapperAlignment
}

// T Y P E S
export type WrapperBgColor = 'light' | 'dark' | 'black' | 'transparent' | 'black-darker'
export type WrapperDirection = 'row' | 'column'
export type WrapperAlignment = 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'space-between' | 'space-around'
export type WrapperFlexWrap = 'nowrap' | 'wrap'

// C O M P O N E N T
const Wrapper: React.FC<WrapperProps> = ({
  align = 'center',
  children,
  className,
  bgColor = 'transparent',
  direction = 'row',
  flexWrap = 'nowrap',
  height = 'auto',
  justify = 'center',
  style
}) => {
  return (
    <StyledWrapper
      style={{
        height,
        flexDirection: direction,
        alignItems: align,
        flexWrap,
        justifyContent: justify,
        ...style
      }}
      className={`styled-wrapper ${bgColor} ${className}`}
    >
      {children}
    </StyledWrapper>
  )
}

// S T Y L E S
const StyledWrapper = styled.div`
  display: flex;
  margin: var(--space-xl);
  padding: var(--space-xl);
  border-radius: var(--radius);

  &.light {
    background-color: var(--color-white);
  }

  &.dark {
    background-color: var(--color-dark);
  }

  &.black {
    background-color: var(--color-black);
  }

  &.black-darker {
    background-color: var(--color-black-darker);
  }

  &.transparent {
    background-color: transparent;
  }
`

export default Wrapper
