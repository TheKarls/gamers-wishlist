import React, { useState } from 'react'
import { AutoComplete, InputGroup } from 'rsuite'
import { IoSearchCircle } from 'react-icons/io5'
import { getHintList, getGameByName } from 'src/hooks/useGamesProvider'
import { ItemDataType } from 'rsuite/esm/@types/common'
import styles from './GameSearch.module.scss'

const GameSearch: React.FC = () => {
  interface GameInfo {
    id?: number
    name?: string
  }

  const [searchedGames, setSearchedGames] = useState<ItemDataType[string]>([])

  const [selectedGame, setSelectedGame] = useState<string>('')
  const [gameInfo, setGameInfo] = useState({})

  const manageSearchedGames = async (value: string) => {
    const gamesList = await getHintList(value)
    setSearchedGames(gamesList.map((game: GameInfo) => game.name || ''))
  }

  const manageSelectedGame = (name: string) => {
    setGameInfo(async () => getGameByName(name))
  }

  return (
    <div className={styles.container}>
      <InputGroup className={styles.searchbar}>
        <AutoComplete
          data={searchedGames || []}
          onChange={(value: string) => {
            manageSearchedGames(value)
          }}
          onSelect={(value: string) => {
            setSelectedGame(value)
          }}
        />
        <InputGroup.Button
          onClick={() => {
            manageSelectedGame(selectedGame)
          }}
        >
          <IoSearchCircle />
        </InputGroup.Button>
      </InputGroup>
    </div>
  )
}

export default GameSearch
