import { MutableRef, useRef } from 'preact/hooks'
import { useSnapshot } from 'valtio'
import Arrow from 'icons/Arrow'
import ContractName from 'components/ContractName'
import SealCredStore from 'stores/SealCredStore'
import TwitterStore from 'stores/TwitterStore'
import classnames, {
  alignItems,
  backgroundColor,
  borderColor,
  borderRadius,
  borderWidth,
  cursor,
  display,
  fontFamily,
  inset,
  justifyContent,
  opacity,
  padding,
  position,
  space,
  textColor,
  transitionProperty,
  visibility,
  width,
  zIndex,
} from 'classnames/tailwind'
import useClickOutside from 'hooks/useClickOutside'
import useContractsOwned from 'hooks/useContractsOwned'

const sharedStyles = classnames(
  borderRadius('rounded-lg'),
  borderWidth('border'),
  borderColor('border-formal-accent-dimmed', 'focus:border-formal-accent'),
  transitionProperty('transition-colors'),
  padding('tiny:px-4', 'px-3', 'py-3'),
  backgroundColor('bg-primary-dark'),
  alignItems('items-center')
)

const wrapper = (hasBadges: boolean) =>
  classnames(
    position('relative'),
    fontFamily('font-primary'),
    zIndex('z-40'),
    opacity({ 'opacity-70': !hasBadges })
  )
const opener = classnames(
  display('inline-flex'),
  justifyContent('justify-between'),
  width('md:w-80', 'w-full'),
  space('space-x-2'),
  sharedStyles
)
const menuWrapper = (open: boolean) =>
  classnames(
    position('absolute'),
    inset('top-14'),
    width('tiny:w-full', 'w-fit'),
    opacity(open ? 'opacity-100' : 'opacity-0'),
    visibility(open ? 'visible' : 'invisible'),
    transitionProperty('transition-opacity'),
    space('space-y-1'),
    sharedStyles
  )
const postingAs = display('tiny:inline', 'hidden')
const menuItem = (current?: boolean) =>
  classnames(
    padding('p-2'),
    cursor('cursor-pointer'),
    borderRadius('rounded-md'),
    backgroundColor({
      'bg-primary-dimmed': current,
      'bg-transparent': !current,
      'hover:bg-primary-dimmed': current,
      'hover:bg-primary-background': !current,
    })
  )

export default function () {
  const { emailDerivativeContracts } = useSnapshot(SealCredStore)
  const contractsOwned = useContractsOwned()
  const ownedEmailDerivativeContracts = emailDerivativeContracts.filter(
    (contractAddress) => contractsOwned.includes(contractAddress)
  )

  const { dropDownOpen, currentEmail } = useSnapshot(TwitterStore)
  const hasBadges = !!ownedEmailDerivativeContracts.length

  const ref = useRef() as MutableRef<HTMLDivElement>
  useClickOutside(ref, () => (TwitterStore.dropDownOpen = false))

  return (
    <div className={wrapper(hasBadges)} ref={ref}>
      <button
        onClick={() => (TwitterStore.dropDownOpen = !dropDownOpen)}
        disabled={!hasBadges}
        className={opener}
      >
        {hasBadges ? (
          <>
            {currentEmail ? (
              <span>
                <span className={postingAs}>Posting as: </span>
                <ContractName clearType address={currentEmail} />
              </span>
            ) : (
              <span
                className={textColor('text-formal-accent-semi-transparent')}
              >
                Select work email
              </span>
            )}
          </>
        ) : (
          <span className={textColor('text-formal-accent-semi-transparent')}>
            No ZK badge in this wallet
          </span>
        )}

        <div className={width('w-5')}>
          <Arrow pulseDisabled open={dropDownOpen} />
        </div>
      </button>

      <div className={menuWrapper(dropDownOpen)}>
        {ownedEmailDerivativeContracts.map((email) => (
          <p
            className={menuItem(email === currentEmail)}
            onClick={() => {
              TwitterStore.currentEmail = email
              TwitterStore.dropDownOpen = false
            }}
          >
            <ContractName clearType address={email} />
          </p>
        ))}
      </div>
    </div>
  )
}
