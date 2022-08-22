import { LargeText } from 'components/Text'
import { useSnapshot } from 'valtio'
import Loading from 'components/Loading'
import PostIdsStatuses from 'stores/PostIdsStatuses'
import ProcessHeader from 'components/PostProcessing/ProcessHeader'
import SelectedTypeStore from 'stores/SelectedTypeStore'
import ViewTweetButton from 'components/PostProcessing/ViewTweetButton'
import classnames, {
  alignItems,
  backgroundColor,
  borderRadius,
  display,
  flexDirection,
  padding,
  space,
} from 'classnames/tailwind'

const container = (loading?: boolean) =>
  classnames(
    display('flex'),
    flexDirection('flex-col'),
    alignItems('items-center'),
    backgroundColor('bg-primary-background'),
    padding('py-6', 'px-9'),
    borderRadius('rounded-2xl'),
    space(loading ? 'space-y-6' : 'space-y-2')
  )

export default function () {
  const { pendingPost, lastProcessedStatusId } = useSnapshot(PostIdsStatuses)

  if (!pendingPost && !lastProcessedStatusId) return null

  const pending = !!pendingPost

  const statusComponent = lastProcessedStatusId ? (
    <LargeText>Tweet successful</LargeText>
  ) : (
    <>
      <ProcessHeader />
      <Loading />
    </>
  )

  return (
    <div className={container(pending)}>
      {statusComponent}
      {lastProcessedStatusId ? (
        <ViewTweetButton
          url={`https://twitter.com/SealCredEmail/status/${lastProcessedStatusId}`}
        />
      ) : pendingPost ? (
        <ViewTweetButton
          url={`/tweets/blockchain#store=${pendingPost.store}&id=${pendingPost.id}`}
          pending
          internal
          onClick={() => {
            SelectedTypeStore.selectedType = pendingPost.store
          }}
        />
      ) : null}
    </div>
  )
}
