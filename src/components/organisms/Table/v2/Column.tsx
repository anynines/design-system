import React from 'react'
import styled from 'styled-components'

// T Y P E S

export interface BadgeProps {
  value: string | boolean | number
}

// C O M P O N E N T S

export const Column = (props): JSX.Element => {
  console.log(props)
  return <thead />
}

export const Badge: React.FC<BadgeProps> = (props) => {
  const { value } = props
  return (
    <StyledBadge>{value.toString()}</StyledBadge>
  )
}

const StyledBadge = styled.span`
  background-color: var(--color-notice);
  padding: 5px 10px;
  color: var(--color-light);
  font-size: var(--text-md);
  font-weight: var(--font-weight-bd);
  border-radius: 5px
`
