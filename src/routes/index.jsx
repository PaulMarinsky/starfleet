import Fulllayout from '../layouts/fulllayout.jsx';

const indexRoutes = [
    { path: '/', name: 'Dashboard', component: Fulllayout },
    { path: '/videos/starfleetvideos', name: 'Starfleet Training', component: Fulllayout },
    { path: '/videos/uploadedvideos', name: 'My Videos', component: Fulllayout },
    { path: '/documents', name: 'American Disabilty Act', component: Fulllayout },
    { path: '/documents', name: 'Vet Check', component: Fulllayout },


];

export default indexRoutes;
