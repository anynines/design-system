import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { DefaultComponentProps } from '@types'

// I N T E R F A C E S
export interface LogoProps extends DefaultComponentProps {
  onClick?: () => void
  path?: string
  src: string
  vertical?: boolean
}

// C O M P O N E N T
export const Logo: FC<LogoProps> = ({
  className,
  onClick,
  path = '/',
  src: url,
  style,
  vertical = false
}: LogoProps) => {
  if (path) {
    return (
      <NavLink
        to={path}
        onClick={(): void => {
          return onClick && onClick()
        }}
        className={vertical ? 'vertical' : ''}
        style={style}
      >
        <StyledLogoWrapper
          className={`logo-wrapper ${vertical ? 'vertical' : ''} ${className}`}
        >
          <img src={url} alt='logo' />
        </StyledLogoWrapper>
      </NavLink>
    )
  }
  return (
    <div className={vertical ? 'vertical' : ''} style={style}>
      <StyledLogoWrapper
        className={`logo-wrapper ${vertical ? 'vertical' : ''} ${className}`}
      >
        <img src={url} alt='logo' />
      </StyledLogoWrapper>
    </div>
  )
}

// S T Y L E S
const StyledLogoWrapper = styled.div`
  --logo-height: 2.5rem;

  height: var(--logo-height);

  img {
    height: var(--logo-height);
    max-width: 11.25rem;
  }

  &.vertical {
    margin-bottom: var(--space-xl);
    height: auto;
    max-width: auto;

    img {
      height: calc(var(--logo-height) * 2);
    }
  }
`
