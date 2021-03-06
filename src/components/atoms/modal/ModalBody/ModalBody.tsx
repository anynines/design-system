import React from 'react'
import styled from 'styled-components'

import { DefaultComponentProps } from '@types'

// I N T E R F A C E
export interface ModalBodyProps extends DefaultComponentProps {
  description?: string
}

// C O M P O N E N T
export const ModalBody: React.FC<ModalBodyProps> = ({
  children,
  className,
  description,
  style
}) => {
  return (
    <StyledModalBody
      className={`modal-body ${className && className}`}
      style={style}
    >
      {description && <p>{description}</p>}
      {children}
    </StyledModalBody>
  )
}

// S T Y L E S
const StyledModalBody = styled.div`
  color: var(--color-white);
`
