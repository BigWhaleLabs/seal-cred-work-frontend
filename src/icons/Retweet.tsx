import { fill } from 'classnames/tailwind'

const fillColor = fill('fill-light-grey')

export default function () {
  return (
    <svg
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.8277 9.75268C17.6087 9.53293 17.2524 9.53293 17.0327 9.75268L15.3677 11.4177V3.73768C15.3677 2.18668 14.1054 0.92518 12.5552 0.92518H8.16766C7.85716 0.92518 7.60516 1.17718 7.60516 1.48768C7.60516 1.79818 7.85716 2.05018 8.16766 2.05018H12.5552C13.4852 2.05018 14.2427 2.80768 14.2427 3.73768V11.4177L12.5777 9.75268C12.3579 9.53293 12.0017 9.53293 11.7827 9.75268C11.5637 9.97243 11.5622 10.3287 11.7827 10.5477L14.4077 13.1727C14.5164 13.2829 14.6604 13.3377 14.8052 13.3377C14.9499 13.3377 15.0924 13.2837 15.2027 13.1727L17.8277 10.5477C18.0482 10.3287 18.0482 9.97243 17.8277 9.75268V9.75268ZM9.83266 12.2127H5.44516C4.51516 12.2127 3.75766 11.4552 3.75766 10.5252V2.84518L5.42266 4.51018C5.53366 4.62043 5.67766 4.67518 5.82166 4.67518C5.96566 4.67518 6.10966 4.62043 6.21916 4.51018C6.43891 4.29043 6.43891 3.93418 6.21916 3.71518L3.59416 1.09018C3.37441 0.86968 3.01816 0.86968 2.79916 1.09018L0.174164 3.71518C-0.0463359 3.93418 -0.0463359 4.29043 0.174164 4.51018C0.394664 4.72993 0.749414 4.72993 0.969164 4.51018L2.63416 2.84518V10.5252C2.63416 12.0762 3.89641 13.3377 5.44666 13.3377H9.83416C10.1447 13.3377 10.3967 13.0857 10.3967 12.7752C10.3967 12.4647 10.1439 12.2127 9.83416 12.2127H9.83266Z"
        className={fillColor}
      />
    </svg>
  )
}