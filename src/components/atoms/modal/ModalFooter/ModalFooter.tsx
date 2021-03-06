import React from 'react'
import styled from 'styled-components'

import { DefaultComponentProps } from '@types'

// I N T E R F A C E S
export type ModalFooterProps = DefaultComponentProps

// C O M P O N E N T
export const ModalFooter: React.FC<ModalFooterProps> = ({
  children,
  className,
  style
}) => {
  return (
    <StyledModalFooter
      className={`modal-footer ${className}`}
      style={style}
    >
      {children}
    </StyledModalFooter>
  )
}

// S T Y L E S
const StyledModalFooter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  color: var(--color-white);
`
