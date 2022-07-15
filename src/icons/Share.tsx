import { fill } from 'classnames/tailwind'

const fillColor = fill('fill-light-grey')

export default function () {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.1479 4.60231L8.39788 0.852312C8.17813 0.632563 7.82188 0.632563 7.60288 0.852312L3.85288 4.60231C3.63237 4.82206 3.63237 5.17831 3.85288 5.39731C4.07338 5.61631 4.42813 5.61781 4.64788 5.39731L7.43788 2.60731V10.2498C7.43788 10.5603 7.68988 10.8123 8.00038 10.8123C8.31088 10.8123 8.56288 10.5603 8.56288 10.2498V2.60731L11.3529 5.39731C11.4624 5.50756 11.6064 5.56231 11.7504 5.56231C11.8944 5.56231 12.0384 5.50831 12.1479 5.39731C12.3676 5.17756 12.3676 4.82206 12.1479 4.60231V4.60231Z"
        className={fillColor}
      />
      <path
        d="M13.781 15.458H2.219C1.271 15.458 0.5 14.687 0.5 13.739V9.5C0.5 9.1895 0.752 8.9375 1.0625 8.9375C1.373 8.9375 1.625 9.1895 1.625 9.5V13.739C1.625 14.0668 1.89125 14.333 2.219 14.333H13.781C14.1088 14.333 14.375 14.0668 14.375 13.739V9.5C14.375 9.1895 14.627 8.9375 14.9375 8.9375C15.248 8.9375 15.5 9.1895 15.5 9.5V13.739C15.5 14.687 14.729 15.458 13.781 15.458V15.458Z"
        className={fillColor}
      />
    </svg>
  )
}
