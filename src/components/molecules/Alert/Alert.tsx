import React from 'react'
import styled from 'styled-components'

import { DefaultComponentProps } from '@types'

import { Icon, IconSize } from '../../atoms/Icon/Icon'

export type AlertType = 'success' | 'notice' | 'error' | 'warning'

export interface AlertProps extends DefaultComponentProps{
  description: string
  onClose: () => void
  size?: IconSize
  title: string
  timerCount?: number
  type: AlertType
  stay?: boolean
}

interface AlertStyledProps {
  type: AlertType
}

export const Alert: React.FC<AlertProps> = ({
  className,
  description,
  onClose,
  size = 'md',
  style,
  title,
  timerCount = 2000,
  type = 'success',
  stay = false
}) => {
  const [hideAlert, setHideAlert] = React.useState(false)

  React.useEffect(() => {
    let timer
    if (!stay) {
      timer = setTimeout(() => {
        setHideAlert(true)
        onClose()
      }, timerCount)
    }

    return (): void => {
      if (!stay) {
        clearTimeout(timer)
      }
    }
  }, [timerCount, stay])

  if (!title || !description) return null
  return (
    <AlertWrapper
      className={`alert-wrapper ${className} ${type} ${hideAlert && 'hidden'}`}
      style={style}
    >
      <div className='alert-icon'>
        <Icon icon='info' size={size} />
      </div>
      <div className='alert-info'>
        <span>{title}</span>
        <p>{description}</p>
        <button onClick={onClose} type='button' className='alert-button'>
          <Icon icon='close' />
        </button>
      </div>
    </AlertWrapper>
  )
}

const AlertWrapper = styled.div<AlertStyledProps>`
  --width: 22rem;

  display: flex;
  flex-direction: row;
  z-index: var(--z-index);
  overflow: hidden;
  width: var(--width);
  min-height: 4.5rem;
  border-radius: var(--radius);
  box-shadow: 0 0 .5em rgba(0,0,0,0.15);
  transition: var(--transition);

  .alert-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--bg-color);
    padding: var(--space-md);
    color: var(--color-white-fix);
    flex: 1;
    max-width: 4.5rem;

    svg {
      width: 1.5em;
      height: 1.5em;
      max-width: 1.5em;
      max-height: 1.5em;
    }
  }

  .alert-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    background-color: var(--bg-color);
    padding: var(--space-sm) var(--space-md);
    flex: 3;

    h4,
    p {
      color: var(--color-white-fix);
    }

    span {
      font-weight: var(--font-weight-bd);
    }

    P {
      margin-top: var(--space-xs);
      margin-bottom: 0;
      line-height: 1.2;
    }
  }

  .alert-button{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: var(--space-sm);
    right: var(--space-sm);
    border: 0;
    background-color: transparent;
    cursor: pointer;
    min-width: 2em;
    min-height: 2em;
    color: var(--color-white-fix);
    outline: none;

    svg {
      width: 1em;
      height: 1em;
    }
  }

  &.hidden {
    opacity: 0;
  }

  &.notice {
    background-color: var(--color-notice);

    .alert-icon {
      background-color: var(--color-notice-dark);
    }
  }

  &.success {
    background-color: var(--color-success);

    .alert-icon {
      background-color: var(--color-success-dark);
    }
  }

  &.warning {
    background-color: var(--color-warning);

    .alert-icon {
      background-color: var(--color-warning-dark);
    }
  }

  &.error {
    background-color: var(--color-error);

    .alert-icon {
      background-color: var(--color-error-dark);
    }
  }
`
