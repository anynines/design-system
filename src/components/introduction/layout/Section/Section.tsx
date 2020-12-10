import React from 'react'
import styled from 'styled-components'

import { Container, containerSizeType } from '../Container/Container'

// I N T E R F A C E S
export interface SectionProps {
  bgColor?: BgColorType
  className?: string
  containerSize?: containerSizeType
  id?: string
  style?: React.CSSProperties
}

export type BgColorType = 'black' | 'dark' | 'primary' | 'light' | 'white' | 'transparent' | 'black-darker'

// C O M P O N E N T
export const Section: React.FC<SectionProps> = ({
  bgColor = 'dark',
  children,
  className,
  containerSize,
  id,
  style
}) => {
  return (
    <StyledSection
      id={id}
      className={`section ${className} section--${bgColor}`}
      style={style}
    >
      <Container containerSize={containerSize}>
        {children}
      </Container>
    </StyledSection>
  )
}

// S T Y L E S
const StyledSection = styled.div`
  padding: calc(var(--space-xl) * 2) var(--space-xl);
  height: auto;

  &.section--dark {
    background-color: var(--color-dark);
  }
  &.section--black {
    background-color: var(--color-black);
  }
  &.section--primary {
    background-color: var(--color-primary);
  }
  &.section--light {
    * {
      color: var(--color-black);
    }
    background-color: var(--color-light);
  }
  &.section--white {
    * {
      color: var(--color-black);
    }
    background-color: var(--color-white);
  }
  &.section--black-darker {
    background-color: var(--color-black-darker);
  }
  &.section--transparent {
    background-color: transparent;
  }
`
StyledSection.displayName = 'StyledSection'
