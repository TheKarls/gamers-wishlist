import { NextPage } from 'next'
import { useContext } from 'react'
import GameSearch from 'components/GameSearch/GameSearch'
import NavbarMenu from 'components/NavbarMenu/NavbarMenu'
import { ThemeContext } from 'src/context/ThemeContext'

const Index: NextPage = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={theme}>
      <div className="container background">
        <NavbarMenu />
        <div className="flex">
          <GameSearch />
        </div>
      </div>
    </div>
  )
}

export default Index
