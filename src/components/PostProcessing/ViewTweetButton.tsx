import { LinkText } from 'components/Text'
import LinkContent from 'components/PostProcessing/LinkContent'

export default function ({ url, pending }: { url: string; pending?: boolean }) {
  const linkTitle = pending ? 'View Tweet status' : 'View Twitter page'

  return (
    <LinkText
      small
      url={url}
      title={linkTitle}
      gradientFrom="from-secondary"
      gradientTo="to-accent"
    >
      <LinkContent text={linkTitle} />
    </LinkText>
  )
}