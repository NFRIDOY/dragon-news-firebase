import { createBrowserRouter } from 'react-router-dom'
import Home from '../components/Home/Home'
import Root from '../layouts/Root'
import About from '../components/About/About'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/about',
                element: <About></About>,
            },
            {
                path: '/contact',
                element: <Home></Home>,
            },
        ]
    }
])

export default router;
