import axios from 'axios'

export const getHintList = async (typing: string): Promise<[]> => {
  const response = await axios({
    url: 'https://gh2kfsa1hk.execute-api.us-west-2.amazonaws.com/production/v4/search',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'x-api-key': process.env.NEXT_PUBLIC_API_KEY || ''
    },
    data: `fields name,id; limit 20; search "${typing}";`
  })
  return response.data
}

export const getGameByName = async (name: string): Promise<[]> => {
  const gameData = await axios({
    url: 'https://gh2kfsa1hk.execute-api.us-west-2.amazonaws.com/production/v4/games',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'x-api-key': process.env.NEXT_PUBLIC_API_KEY || ''
    },
    data: `fields *; where name = "${name}";`
  })

  const genreList = await axios({
    url: 'https://gh2kfsa1hk.execute-api.us-west-2.amazonaws.com/production/v4/genres',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'x-api-key': process.env.NEXT_PUBLIC_API_KEY || ''
    },
    data: `fields name; where id = (${gameData.data[0].genres});`
  })

  const gameCover = await axios({
    url: 'https://gh2kfsa1hk.execute-api.us-west-2.amazonaws.com/production/v4/covers',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'x-api-key': process.env.NEXT_PUBLIC_API_KEY || ''
    },
    data: `fields image_id; where game = ${gameData.data[0].id};`
  })
  console.log(genreList.data)

  gameData.data[0].genres = genreList.data.map((genre: any) => genre.name)
  gameData.data[0].cover = `https://images.igdb.com/igdb/image/upload/t_cover_med_2x/${gameCover.data[0].image_id}.jpg`
  return gameData.data[0]
}
