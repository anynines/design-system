import React from 'react'
import styled from 'styled-components'

import { DefaultComponentProps } from '@types'

import { timestamp, getDaysInTimestamp, getHoursInTimestamp } from './date'

// A T O M S
import { Icon, IconName } from '../../atoms/Icon/Icon'

// I N T E R F A C E
export interface NotificationProps extends DefaultComponentProps {
  date: number
  icon?: IconName
  msg?: string
  width?: NotificationWidth
}

// T Y P E S
export type NotificationWidth = 'block' | 'inline'

// C O M P O N E N T
export const Notification: React.FC<NotificationProps> = ({
  className,
  date = 0,
  icon,
  msg,
  style,
  width = 'inline'
}) => {
  const renderTimeIntervale = (): JSX.Element => {
    const timestampInterval = Math.abs(date - timestamp())
    const daysInTimestamp = getDaysInTimestamp(timestampInterval)
    if (daysInTimestamp <= 0) {
      const hoursInTimestamp = getHoursInTimestamp(timestampInterval)
      if (hoursInTimestamp <= 0) {
        const minsInTimestamp = getHoursInTimestamp(timestampInterval)

        return (
          <>
            {minsInTimestamp}
            {' '}
            minutes ago
          </>
        )
      }

      return (
        <>
          {hoursInTimestamp}
          {' '}
          hours ago
        </>
      )
    }

    return (
      <>
        {daysInTimestamp}
        {' '}
        days ago
      </>
    )
  }

  return (
    <StyledNotification
      className={`notification ${className} ${width}`}
      style={style}
    >
      <div className='icon-wrapper'>
        {icon && <Icon icon={icon} />}
      </div>
      <div className='text'>
        <span className='msg'>{msg}</span>
        <span className='date'>
          {renderTimeIntervale()}
        </span>
      </div>
    </StyledNotification>
  )
}

// S T Y L E S
const StyledNotification = styled.div`
  display: flex;
  margin-bottom: var(--space-fixed-sm);
  background-color: var(--box-bg-color);
  padding: var(--space-sm);
  color: var(--text-color);
  font-size: var(--text-md);
  border-radius: var(--radius);

  &:last-child {
    margin-bottom: 0;
  }

  .icon-wrapper {
    display: flex;
    margin-right: var(--space-lg);
    padding-top: var(--space-xs);

    svg{
      width: 1.2em;
      height: 1.2em;
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    font-size: var(--text-xs);

    .msg {
      font-weight: var(--font-weight-bd);
    }

    .date {
      opacity: 0.5;
      margin-top: var(--space-xs);
    }
  }

  &.block {
    width: 100%;
  }

  @media (min-width: 60em) {
    margin-bottom: var(--space-fixed-md);
    background-color: var(--color-dark);
  }
`
StyledNotification.displayName = 'StyledNotification'
