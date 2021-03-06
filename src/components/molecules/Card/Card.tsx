import React from 'react'
import styled from 'styled-components'

import { DefaultComponentProps } from '@types'

// H E L P E R S
import { CardBody, CardBodyProps } from './components/CardBody'
import { CardFooter, CardFooterProps } from './components/CardFooter'
import { CardImage, CardImageProps } from './components/CardImage'
import { CardTitle, CardTitleProps } from './components/CardTitle'

// I N T E R F A C E S
type Card = React.FC<CardProps>
  & { Body: React.FC<CardBodyProps> }
  & { Footer: React.FC<CardFooterProps> }
  & { Image: React.FC<CardImageProps> }
  & { Title: React.FC<CardTitleProps> }

export interface CardProps extends DefaultComponentProps {
  description?: string
  textCenter?: boolean
  title?: string
}

export const Card: Card = ({
  children,
  className = '',
  description,
  style,
  textCenter = true,
  title
}) => {
  const titleOutput = <CardTitle><h5>{title && title}</h5></CardTitle>
  const bodyOutput = <CardBody>{description && description}</CardBody>

  return (
    <StyledCard
      className={`card ${className} ${textCenter && 'text-center'}`}
      style={style}
    >
      {children}
      {title && titleOutput}
      {description && bodyOutput}
    </StyledCard>
  )
}

const StyledCard = styled.div`
  border-radius: var(--radius);
  background-color: var(--color-dark);
  min-width: 12.5rem;

  &.text-center {
    text-align: center;
  }
`

Card.Body = CardBody
Card.Footer = CardFooter
Card.Image = CardImage
Card.Title = CardTitle
