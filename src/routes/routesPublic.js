import { Error404 } from '../components/Error404'
import { Home } from '../components/Home'
import { ProgressBar } from '../components/ProgressBar'
import { ShowHideMessage } from '../components/ShowHideMessage'
import { StopWatchTimer } from '../components/StopWatchTimer'

export const routesPublic =  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/showHideMessage",
      element: <ShowHideMessage />,
    },
    {
      path: "/progressBar",
      element: <ProgressBar />,
    },
    {
      path: "/sos",
      element: <StopWatchTimer/>,
    },
    {
      path: "/*",
      element: <Error404 />,
    }
  ]