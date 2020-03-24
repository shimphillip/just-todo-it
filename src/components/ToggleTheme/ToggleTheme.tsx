import React from 'react'
import './ToggleTheme.scss'

interface ToggleThemeProps {
  toggleDarkMode: ToggleDarkMode
  darkMode: boolean
}

const ToggleTheme: React.FC<ToggleThemeProps> = ({
  darkMode,
  toggleDarkMode,
}) => {
  return darkMode ? (
    <div className="toggle-button toggle-button--dark" onClick={toggleDarkMode}>
      Dark
    </div>
  ) : (
    <div
      className="toggle-button toggle-button--light"
      onClick={toggleDarkMode}
    >
      Light
    </div>
  )
}

export default ToggleTheme
