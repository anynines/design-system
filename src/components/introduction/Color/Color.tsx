import React from 'react'
import styled from 'styled-components'

// I N T E R F A C E
export interface ColorProps {
  color?: string
  colorLabel?: string
  textColor?: string
  mainColor?: boolean
}

// C O M P O N E N T
export const Color: React.FC<ColorProps> = ({
  color = 'var(--color-black)',
  colorLabel = 'Some black',
  textColor = 'var(--color-white)',
  mainColor = false
}) => {
  return (
    <StyledColor
      style={{ backgroundColor: color, color: textColor }}
      className={mainColor && 'main-color'}
    >
      <span>{colorLabel}</span>
    </StyledColor>
  )
}

const StyledColor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary);
  width: 100px;
  height: 100px;
  transition: var(--transition);
  border-radius: 0;
  
  span {
    background-color: rgba(0, 0, 0, 0.2);
    padding: 4px;
    color: var(--color-white);
    font-size: 12px;
    border-radius: 5px;
  }

  &.main-color {
    span {
      background-color: rgba(0, 0, 0, 0.6);
      padding: 4px;
    }
  }

  &:first-child {
    border-radius: var(--radius) 0 0 var(--radius);
  }
  
  &:last-child {
    border-radius: 0 var(--radius) var(--radius) 0;
  }
`
