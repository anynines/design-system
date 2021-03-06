import React from 'react'
import { ThemeProvider } from 'styled-components'
import merge from 'lodash.merge'

// H E L P E R S
import { LocalStorage } from '../helpers/localStorage'
import { createFaviconNode } from '../helpers'
import { getMode, getToggledTheme } from './designSystemInstanceHelpers'

// D E F A U L T  T H E M E
import { defaultTheme } from './theme/defaultTheme'

// G L O B A L  S T Y L E S
import { GlobalStyle } from './theme/GlobalStyle'

// I N T E R F A C E S
import {
  ThemeContextParam,
  DesignSystemInstanceProps,
  DesignSystemContextElements,
  Theme,
  PartialTheme,
  Mode
} from './types/types'

// C O M P O N E N T
export const createDesignSystemContext = <
  T extends PartialTheme
>(): DesignSystemContextElements<T> => {
  // C O N T E X T
  const ThemeContext = React.createContext<ThemeContextParam<T & Theme>>(
    {} as ThemeContextParam<T & Theme>
  )

  const DesignSystemInstance: React.FC<DesignSystemInstanceProps<T>> = (
    props
  ) => {
    const {
      theme = defaultTheme,
      mode = 'dark',
      useFavicon = false,
      storagePrefix = 'ds_',
      children
    } = props

    const getMergedTheme = (partialTheme: T | Theme): T & Theme => {
      return merge({ ...defaultTheme }, { ...partialTheme }) as T & Theme
    }

    const [modeState, setModeState] = React.useState<Mode>(
      getMode(mode, storagePrefix)
    )

    const getTheme = (): T & Theme => {
      if (modeState !== mode) {
        return getToggledTheme(getMergedTheme(theme))
      }

      return getMergedTheme(theme)
    }

    const [themeState, setThemeState] = React.useState<T & Theme>(getTheme())

    const setMode = React.useCallback(
      (newMode: Mode): void => {
        if (newMode !== modeState) {
          LocalStorage.setItem(`${storagePrefix}mode`, newMode)
          setThemeState(getToggledTheme(themeState))
          setModeState(newMode)
        }
      },
      [modeState, storagePrefix, themeState]
    )

    const resetTheme = (): void => {
      setMode(mode)
      setThemeState(getMergedTheme(theme))
    }

    React.useEffect(() => {
      if (useFavicon) {
        createFaviconNode()
      }
    }, [storagePrefix, useFavicon])

    const themeContextProviderValue = {
      theme: themeState,
      setTheme: setThemeState,
      mode: modeState,
      setMode,
      resetTheme
    }

    return (
      <ThemeProvider theme={themeState}>
        <ThemeContext.Provider value={themeContextProviderValue}>
          <GlobalStyle />
          {children}
        </ThemeContext.Provider>
      </ThemeProvider>
    )
  }

  return {
    ThemeContext,
    DesignSystemInstance
  }
}
