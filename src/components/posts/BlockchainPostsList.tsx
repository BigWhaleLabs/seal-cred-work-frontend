import { Suspense, useState } from 'preact/compat'
import BlockchainPost from 'components/posts/BlockchainPost'
import ContractTitle from 'components/posts/ContractTitle'
import Cross from 'icons/Cross'
import TwitterLoading from 'components/TwitterLoading'
import classnames, {
  backgroundColor,
  borderRadius,
  display,
  padding,
  space,
} from 'classnames/tailwind'
import flashingPost from 'helpers/flashingPost'
import usePosts from 'hooks/usePosts'
import useScrollToAnchor from 'helpers/useScrollToAnchor'

const blockchainPostTagContainer = classnames(
  display('inline-flex'),
  backgroundColor('bg-primary-background'),
  padding('px-4', 'py-2'),
  borderRadius('rounded'),
  space('space-x-2')
)
function BlockchainPostTag({
  address,
  onClick,
}: {
  address: string
  onClick: () => void
}) {
  return (
    <span className={blockchainPostTagContainer}>
      <ContractTitle address={address} />
      <Cross onClick={onClick} />
    </span>
  )
}

function BlockchainPostsListSuspended() {
  const [selectedAddress, setAddress] = useState('')
  useScrollToAnchor(0, true, flashingPost)
  const posts = usePosts()

  return (
    <>
      {selectedAddress && (
        <BlockchainPostTag
          address={selectedAddress}
          onClick={() => setAddress('')}
        />
      )}
      {posts
        .filter(
          ({ derivativeAddress }) =>
            !selectedAddress || selectedAddress === derivativeAddress
        )
        .map((post) => (
          <BlockchainPost
            key={`${post.id}-${post.derivativeAddress}`}
            post={post}
            onSelectAddress={setAddress}
          />
        ))}
    </>
  )
}

export default function () {
  return (
    <Suspense fallback={<TwitterLoading text="Fetching blockchain posts..." />}>
      <BlockchainPostsListSuspended />
    </Suspense>
  )
}
