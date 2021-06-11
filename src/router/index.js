import Vue from "vue"
import VueRouter from 'vue-router'
import Feedback from "../components/Feedback"
import Admin from "../components/Admin"
import Home from "../components/Home"
import People from "../components/People"
Vue.use(VueRouter)

 const router= new VueRouter(
    {
        routes:[
            {
                path:"/feedback",
                component:Feedback,
                name:"Feedback"
            },
            {
                path:"/admin",
                component:Admin,
                name:"Admin"
            },
            {
                path:"/",
                component:Home,
                name:"Home"
            },
            {
                path:"/people",
                component:People,
                name:"People"
            },
        ]
    }
)
export default router