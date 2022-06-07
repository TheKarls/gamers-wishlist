import axios from 'axios'

export const getHintList = async (typing: string): Promise<[]> => {
    const response = await axios({
        url: 'https://gh2kfsa1hk.execute-api.us-west-2.amazonaws.com/production/v4/games',
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'x-api-key': process.env.NEXT_PUBLIC_API_KEY || '',
        },
        data: `fields name; limit 5; search "${typing}";`,
    })
    return response.data
}

export const getGameByID = async (id: number): Promise<[]> => {
    const response = await axios({
        url: 'https://gh2kfsa1hk.execute-api.us-west-2.amazonaws.com/production/v4/games',
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'x-api-key': process.env.NEXT_PUBLIC_API_KEY || '',
        },
        data: `fields name platforms; where game = ${id};`,
    })
    return response.data
}
