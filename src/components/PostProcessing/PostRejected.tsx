import { BodyText, LinkText } from 'components/Text'

export default function ({
  store,
  statusId,
}: {
  store: string
  statusId?: number
}) {
  return (
    <BodyText>
      Your tweet was rejected. It is still posted{' '}
      <LinkText url={`/tweets/blockchain#store=${store}&id=${statusId}`}>
        to the blockchain
      </LinkText>{' '}
      and visible on SealCred Echo, but all tweets must abide by Twitter’s rules
      and not contain extreme profanity. If you have any questions,{' '}
      <LinkText url="https://discord.com/invite/NHk96pPZUV">
        message us on our Discord
      </LinkText>
      .
    </BodyText>
  )
}
