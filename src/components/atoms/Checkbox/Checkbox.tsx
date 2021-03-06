import React from 'react'
import styled from 'styled-components'
import { FieldError, NestDataObject, ValidationOptions } from 'react-hook-form'

import { DefaultComponentProps } from '@types'

// I N T E R F A C E
export interface CheckboxProps extends DefaultComponentProps {
  checked?: boolean
  errors?: NestDataObject<Record<string, string>, FieldError>
  label: string
  name: string
  onChange?: (value: boolean) => void
  register?: (validationRules: ValidationOptions) => void
  required?: boolean
  setValue?: any // eslint-disable-line
  watch?: any // eslint-disable-line
}

// C O M P O N E N T
export const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  className,
  errors = {},
  label,
  name,
  onChange,
  register,
  required = false,
  setValue,
  style,
  watch
}) => {
  const getDefaultValue = (): boolean => {
    if (register) return watch(name) || false
    return checked
  }

  const [valueState, setValueState] = React.useState(getDefaultValue())

  const handleChange = (): void => {
    if (!register) setValueState(!valueState)
  }

  React.useEffect(() => {
    if (register) setValue(name, valueState)
    else if (onChange) onChange(valueState)
  }, [register, setValue, name, valueState, onChange])

  return (
    <StyledCheckbox
      style={style}
      className={`checkbox ${className} ${errors && errors[name] !== undefined ? 'error' : ''}`}
    >
      <input
        type='checkbox'
        id={name}
        name={name}
        ref={register ? register({ required }) as unknown as undefined : undefined}
        {...!register ? { onChange: handleChange, checked: valueState } : {}}
      />
      <label htmlFor={name}>
        {label}
      </label>
    </StyledCheckbox>
  )
}

// S T Y L E S
const StyledCheckbox = styled.div`
  --size: 1.5rem;

  margin-bottom: var(--space-xl);

  label {
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    padding-left: calc(var(--size) + var(--space-fixed-md));
    color: var(--text-color);
    font-size: var(--text-sm);

    &::before,
    &::after {
      display: flex;
      position: absolute;
      left: 0;
      content: '';
      transition-property: opacity, border;
      transition-duration: .25s;
      transition-timing-function: ease-in-out;
    }

    &::before {
      border: var(--border);
      background: var(--element-bg-color);
      width: var(--size);
      height: var(--size);
      border-radius: calc(var(--radius) / 2);
    }

    &::after {
      opacity: 0;
    }

    &:hover {
      &::before {
        border-color: var(--color-white-20);
      }
    }
  }

  input[type] {
    display: none;

    &:checked + label {
      &::before {
        border-color: var(--color-white-30);
      }

      &::after {
        opacity: 1;
        margin: .3125rem;
        border-radius: calc(var(--radius) / 4);
        background-color: var(--color-primary);
        width: 1rem;
        height: 1rem;
      }
    }
  }

  &.error {
    label {
      &::before {
        border-color: var(--color-error);
      }
    }
  }
`

StyledCheckbox.displayName = 'StyledCheckbox'
