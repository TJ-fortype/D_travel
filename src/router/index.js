import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import NotFound from '../views/NotFound.vue'
import TravelInfo from '../views/TravelInfo.vue'
import Seasons from '../views/Seasons.vue'
import Experiences from '../views/Experiences.vue'
import MyFavorite from '../views/MyFavorite.vue'
<<<<<<< HEAD
import LianTop from '../views/LianTop.vue'
import Destination from '../views/Destination.vue'
=======
import Destination from '../views/Destination.vue'

>>>>>>> 695bc92f2e1afc1b07b5ca72ed9b0562a2ca5413
//路由词典，定义了访问地址与路由组件间的关系
const routes = [
	{path: '/', component: Index},
	{path: '/info', component: TravelInfo},
	{path: '/seasons', component: Seasons},
	{path: '/experiences', component: Experiences},
	{path: '/mf', component: MyFavorite},
	{path: '/lian', component: LianTop},
	{path: '/dest', component:  Destination },
	{path: '/:pathNotFound(.*)', component: NotFound},
	{path: '/:dest', component: Destination},
	
	
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
