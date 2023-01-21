import { Error404 } from '../components/Error404'
import { Home } from '../components/Home'
import { ProgressBar } from '../components/ProgressBar'
import { ShowHideMessage } from '../components/ShowHideMessage'
import { StopWatchTimer } from '../components/StopWatchTimer'
import { TaskManager } from '../components/TaskManager'

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
      path: "/taskManager",
      element: <TaskManager/>,
    },
    {
      path: "/*",
      element: <Error404 />,
    }
  ]