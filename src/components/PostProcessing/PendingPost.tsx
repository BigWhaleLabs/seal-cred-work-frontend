import { PendingPostType } from 'stores/PostIdsStatuses'
import Loading from 'components/Loading'
import ProcessHeader from 'components/PostProcessing/ProcessHeader'
import SelectedTypeStore from 'stores/SelectedTypeStore'
import ViewTweetButton from 'components/PostProcessing/ViewTweetButton'

export default function ({ pendingPost }: { pendingPost: PendingPostType }) {
  return (
    <>
      <ProcessHeader />
      <Loading />
      <ViewTweetButton
        url={`/tweets/blockchain#store=${pendingPost.store}&id=${pendingPost.id}`}
        pending
        internal
        onClick={() => {
          SelectedTypeStore.selectedType = pendingPost.store
        }}
      />
    </>
  )
}
