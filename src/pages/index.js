import ContactUs from "./ContactUs";
import Home from "./Home";
import ToursAndPackages from "./ToursAndPackages";


const routes = [
    { path: '/', component: <Home /> },
    { path: '/contact-us', component: <ContactUs /> },
    { path: '/tours-packages', component: <ToursAndPackages /> },
]

export default routes;