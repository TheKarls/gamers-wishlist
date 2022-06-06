import React, { useState } from 'react'
import { AutoComplete, InputGroup } from 'rsuite'
import { IoSearchCircle } from 'react-icons/io5'
import { getHintList } from 'src/hooks/useGamesProvider'
import { ItemDataType } from 'rsuite/esm/@types/common'
import styles from './GameSearch.module.scss'

const GameSearch: React.FC = () => {
    interface GameInfo {
        id?: number
        name?: string
    }

    const [searchedGames, setSearchedGames] = useState<ItemDataType[string]>([
        '',
    ])

    const [selectedGameID, setSelectedGameID] = useState<number>()

    const manageSearchedGames = async (value: string) => {
        const gamesList = await getHintList(value)
        setSearchedGames(gamesList.map((game: GameInfo) => game.name || ''))
    }

    // const manageSelectedGame = async (value: string) => {
    //     const gamesList = await getHintList(value)
    //     setSearchedGames(gamesList.map((game: GameInfo) => game))
    //     console.log(searchedGames)
    // }

    return (
        <div className={styles.container}>
            <InputGroup className={styles.searchbar}>
                <AutoComplete
                    data={searchedGames || []}
                    onChange={(value: string) => {
                        manageSearchedGames(value)
                    }}
                />
                <InputGroup.Button>
                    <IoSearchCircle className={styles.icon} />
                </InputGroup.Button>
            </InputGroup>
        </div>
    )
}

export default GameSearch
