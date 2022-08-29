import PostStatus from 'models/PostStatus'
import axios from 'axios'
import env from 'helpers/env'

const baseURL = `${env.VITE_TWITTER_POSTER_URL}/tweets`

export default async function (ids: number[], contractAddress: string) {
  const { data } = await axios.post<
    {
      blockchainId: number
      status: PostStatus
      tweetId?: number
    }[]
  >(`${baseURL}/${contractAddress}/list`, {
    ids,
  })
  return data
}
