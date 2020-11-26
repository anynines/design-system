import React, { FC } from 'react'
import styled from 'styled-components'

import { TableChildrenProps, TableSortDirection, TableSortArgs } from './Table'
import { Icon } from '../../../atoms/Icon/Icon'

// T Y P E S
export type CellType = 'head' | 'body'
export type CellColor = 'primary' | 'light' | 'dark' | 'warning' | 'error' | 'success' | 'blue' | 'white' | 'black' | 'yellow' | 'red' | 'green'

export interface CellProps extends TableChildrenProps {
  type: CellType
  component?: JSX.Element
  value?: string | boolean | number
  color?: CellColor
  field?: string
  sortable?: boolean
  onSort?: (sortArgs: TableSortArgs) => void
}

// C O M P O N E N T S

export const Cell: FC<CellProps> = (props) => {
  const {
    sortDirection,
    sortedBy = '',
    setSortDirection,
    setSortedBy,
    sortable = false,
    field = '',
    type,
    value,
    component,
    color,
    onSort
  } = props

  const renderValue = (): string | boolean | number | JSX.Element | undefined => {
    if (value) return value.toString()
    if (field) return field.toString()
    if (component) return component
    return ''
  }

  const handleOnClickCell = (): void => {
    if (sortable) {
      if (sortedBy !== field) {
        setSortedBy(field || '')
        setSortDirection('asc' as TableSortDirection)
      } else if (sortDirection === 'asc') setSortDirection('desc' as TableSortDirection)
      else if (sortDirection === 'desc') {
        setSortDirection(null as TableSortDirection)
        setSortedBy('')
      }
    }
  }

  const renderSortableIcon = (): JSX.Element | null => {
    if (onSort && sortable && sortedBy === field) {
      if (sortDirection === 'desc') return <Icon className='inverted' icon='caretDown' />
      if (sortDirection === 'asc') return <Icon icon='caretDown' />
    }
    if (onSort && sortable && sortDirection === null) return <Icon icon='unorderedList' />
    return null
  }

  if (type === 'head') {
    return (
      <StyledHeadCell
        className={`${onSort && sortable ? 'head ' : ''}${color || null}`}
        {...onSort ? { onClick: handleOnClickCell } : {}}
      >
        <div>
          {renderValue()}
          {renderSortableIcon()}
        </div>
      </StyledHeadCell>
    )
  }

  return (
    <StyledBodyCell className={color || null}>
      <div>
        {renderValue()}
      </div>
    </StyledBodyCell>
  )
}

const StyledBodyCell = styled.td`
  margin: 0;
  border: 0;
  background-color: var(--color-dark);

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem;
    text-align: left;
    text-transform: capitalize;
    color: var(--color-white);
    font-size: var(--text-md);
  }
  
  &.head {
    cursor: pointer;
  }
  &.dark {
    background-color: var(--color-dark);
  }
  &.light {
    background-color: var(--color-light);

    div{
      color: var(--color-dark);

      span.black {
        color: var(--color-light);
      }

      div.icon-wrapper {
        svg {
          background-color: var(--color-white);
        }
      }
    }
  }
  &.success {
    background-color: var(--color-success);
  }
  &.error {
    background-color: var(--color-error);
  }
  &.warning {
    background-color: var(--color-warning);
  }
  &.primary {
    background-color: var(--color-primary);
  }

  .inverted {
    display: flex;
    transform: rotate(-180deg);
  }
`

const StyledHeadCell = styled(StyledBodyCell)`
  background-color: var(--color-notice);
`
