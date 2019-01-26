import Dashboard from '../views/dashboard/dashboard.jsx';
import StarfleetVideos from '../views/videos/starfleetvideos.jsx';
import MyVideos from '../views/videos/myvideos.jsx';
import AmericanDisabilityAct from '../views/documents/amdisact.jsx';
import VetCheck from '../views/documents/vetcheck.jsx';

const ThemeRoutes = [
  /* {
    navlabel: true,
    name: "Personal",
    icon: "mdi mdi-dots-horizontal",
  }, */
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'ti-dashboard',
    component: Dashboard
  },
 // { path: '/', pathTo: '/dashboard', name: 'Dashboard', redirect: true },

  {
    path: '/videos/starfleetvideos',
    name: 'Starfleet Training',
    icon: 'mdi mdi-video',
    component: StarfleetVideos
  },
  //{ path: '/videos', pathTo: '/dashboard', name: 'Training Videos', redirect: true },

  {
    path: '/videos/uploadedvideos',
    name: 'My Videos',
    icon: 'mdi mdi-video',
    component: MyVideos
  },

  {
    path: '/documents/AmericanDisabilityAct',
    name: 'American Disability Act',
    icon: 'mdi mdi-gavel',
    component: AmericanDisabilityAct
  },

  {
    path: '/documents/VetCheck',
    name: 'Vet Check',
    icon: 'ti-pulse',
    component: VetCheck
  }
];
export default ThemeRoutes;
