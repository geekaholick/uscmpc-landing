import Home from '../pages/Home'
import NotFound from '../pages/404'
import Coming_soon from '../pages/Coming_soon'

export const routes = [
    {
        path:'*',
        name: 'NotFound',
        component: NotFound
    },
    {
        path:'/coming-soon',
        name: 'Coming_soon',
        component: Coming_soon
    },
    {
        path:'/',
        name: 'Home',
        component: Home
    },  
];