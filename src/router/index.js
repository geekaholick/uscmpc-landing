import Home from '../pages/Home'
import History from '../pages/about/History'
import CooperativeProfile from '../pages/about/CooperativeProfile'
import BoardOfDirectors from '../pages/about/BoardOfDirectors'
import CooperativeOfficers from '../pages/about/CooperativeOfficers'
import AwardsDistinctions from '../pages/about/AwardsDistinctions'
import PhotosVideos from '../pages/about/PhotosVideos'
import NotFound from '../pages/404'
import Under_construction from '../pages/Under_construction'
import Coming_soon from '../pages/Coming_soon'
import Savings from '../pages/services/Savings'
import Lending from '../pages/services/Lending'
import CoopMart from '../pages/services/CoopMart'
import Services from '../pages/services/OtherServices'

export const routes = [
    {
        path:'*',
        name: 'NotFound',
        component: NotFound
    },
    {
        path:'/under-construction',
        name: 'UnderConstruction',
        component: Under_construction
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
    {
        path:'/history',
        name: 'History',
        component: History
    }, 
     
    {
        path:'/cooperative-profile',
        name: 'Cooperative Profile',
        component: CooperativeProfile
    }, 
    {
        path:'/board-of-directors',
        name: 'Board of Directors',
        component: BoardOfDirectors
    }, 
    {
        path:'/cooperative-officers',
        name: 'Cooperative Officers',
        component: CooperativeOfficers
    },
    {
        path:'/awards-distinctions',
        name: 'Awards and Distictions',
        component: AwardsDistinctions
    },
    {
        path:'/photos-videos',
        name: 'Photos and Videos',
        component: PhotosVideos
    },
    {
        path:'/savings',
        name: 'Savings / Share Capital',
        component: Savings
    },
    {
        path:'/lending',
        name: 'Lending',
        component: Lending
    },
    {
        path:'/coop-mart',
        name: 'Consumer Store',
        component: CoopMart
    },
    {
        path:'/services',
        name: 'Other Services',
        component: Services
    },
];