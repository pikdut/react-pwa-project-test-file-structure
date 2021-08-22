import AboutUS from "../pages/AboutUs"
import ContactUS from "../pages/ContactUS"
import Homepage from "../pages/Homepage"
import Services from "../pages/Services"

const routes = [
    {
        path: "/",
        component: Homepage
    },
    {
        path: "/about-us",
        component: AboutUS
    },
    {
        path: "/contact-us",
        component: ContactUS
    },
    {
        path: "/services",
        component: Services
    }
]


export default routes