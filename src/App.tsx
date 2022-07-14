import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import HowItWorks from 'components/HowItWorks'
import NavTabLink from 'components/NavTabLink'
import Navbar from 'components/navbar/Navbar'
import PreviousTweets from 'components/PreviousTweets'
import TabBar from 'components/TabBar'
import TweetHeader from 'components/TweetHeader'
import classnames, {
  height,
  margin,
  maxWidth,
  padding,
  space,
  width,
} from 'classnames/tailwind'

const body = classnames(
  width('md:w-full', 'w-screen'),
  maxWidth('md:max-w-body'),
  height('h-fit'),
  space('space-y-4'),
  padding('pb-5'),
  margin('mx-auto')
)

export default function () {
  return (
    <Router>
      <Navbar />
      <div className={body}>
        <div className={margin('mx-5', 'md:mx-auto')}>
          <TweetHeader />
          <TabBar>
            <NavTabLink to="/how-it-works" label="How this works" />
            <NavTabLink to="/previous-tweets" label="Previous Tweets" />
            <NavTabLink to="/deep-dive" label="Deep Dive" />
          </TabBar>
          <Routes>
            <Route index element={<Navigate replace to="/how-it-works" />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/previous-tweets" element={<PreviousTweets />} />
            <Route path="/deep-dive" element={<>Deep Dive</>} />
          </Routes>
        </div>
      </div>
      <ToastContainer position="bottom-right" theme="dark" />
    </Router>
  )
}
