import { NextPage } from 'next'
import GameSearch from 'components/GameSearch/GameSearch'
import styles from 'styles/index.module.scss'

const Index: NextPage = () => (
    <div className={styles.container}>
        <GameSearch />
    </div>
)

export default Index
