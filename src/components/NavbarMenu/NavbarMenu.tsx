import React, { useContext } from 'react'
import { Navbar, Toggle } from 'rsuite'
import { ThemeContext } from 'src/context/ThemeContext'
import { MdLightMode, MdNightlight } from 'react-icons/md'
import styles from './NavbarMenu.module.scss'

const NavbarMenu = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const themeHandler = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Navbar className={`navbg ' ${styles.navbar}`}>
      <Toggle
        size="lg"
        className={styles.toggle}
        onChange={() => themeHandler()}
        unCheckedChildren={<MdNightlight className={styles.dark} />}
        checkedChildren={<MdLightMode className={styles.light} />}
      />
      <div />
    </Navbar>
  )
}

export default NavbarMenu
