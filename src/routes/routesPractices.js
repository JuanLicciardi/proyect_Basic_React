import { ShowHideMessage } from "../componentsPractices/ShowHideMessageP";
import { ProgressBar } from "../componentsPractices/ProgressBarP";
import { StopWatchTimer } from "../componentsPractices/StopWatchTimerP";
import { Counter } from "../componentsPractices/CounterP";

export const routesPractices = [
    {
        path: "/practice/showHideMessage",
        element: <ShowHideMessage/>
    },
    {
        path: "/practice/progressBar",
        element: <ProgressBar/>
    },
    {
        path: "/practice/stopWatchTimer",
        element: <StopWatchTimer/>
    },
    {
        path: "/practice/counter",
        element: <Counter/>
    }
]