import React from 'react'
import styled from 'styled-components'

import { DefaultComponentProps } from '@types'

// I N T E R F A C E S
export interface RowProps extends DefaultComponentProps {
  id?: string
}

// C O M P O N E N T
export const Row: React.FC<RowProps> = ({
  children,
  className,
  id,
  style
}) => {
  return (
    <StyledRow
      id={id}
      className={`row ${className}`}
      style={style}
    >
      {children}
    </StyledRow>
  )
}

const StyledRow = styled.div`
  display: flex;
  margin-right: calc(var(--space-md) * -1);
  margin-bottom: calc(var(--space-md) * 2);
  margin-left: calc(var(--space-md) * -1);
  
  &:last-child {
    margin-bottom: 0;
  }
`
