import { BigNumber } from 'ethers'
import { PostStructOutput } from '@big-whale-labs/seal-cred-posts-contract/dist/typechain/contracts/SCPostStorage'
import { SCPostStorage } from '@big-whale-labs/seal-cred-posts-contract'

export default async function (
  contract: SCPostStorage,
  skip: number,
  limit: number
) {
  try {
    return (
      await contract.getPosts(BigNumber.from(skip), BigNumber.from(limit))
    )
      .map(
        ([id, post, derivativeAddress, sender, timestamp]) =>
          ({
            id,
            post,
            derivativeAddress,
            sender,
            timestamp,
          } as PostStructOutput)
      )
      .reverse()
  } catch (error) {
    console.error('Error occurred on getting posts error:', error)
    return []
  }
}
