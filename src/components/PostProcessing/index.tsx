import Loading from 'components/Loading'
import ProcessHeader from 'components/PostProcessing/ProcessHeader'
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

interface PostProcessingProps {
  tweetUrl: string
  pending?: boolean
}

export default function ({ tweetUrl, pending }: PostProcessingProps) {
  return (
    <div className={container(pending)}>
      <ProcessHeader pending={pending} />
      {pending && <Loading />}
      <ViewTweetButton url={tweetUrl} pending={pending} />
    </div>
  )
}
