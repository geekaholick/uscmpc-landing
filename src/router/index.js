import Home from '../pages/Home'
import History from '../pages/History'
import CooperativeProfile from '../pages/CooperativeProfile'
import BoardOfDirectors from '../pages/BoardOfDirectors'
import CooperativeOfficers from '../pages/CooperativeOfficers'
import AwardsDistinctions from '../pages/AwardsDistinctions'
import PhotosVideos from '../pages/PhotosVideos'
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
    
];