import Vue from 'vue'
import VueRouter from 'vue-router'
//引入组件
import AdminIndex from '@/views/admin-index/AdminIndex.vue'
import AddMusicLists from '@/views/add-musiclists/AddMusicLists.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login/'
  },
  {
    path: '/login/',
    name: 'Login',
    component: () => import('@/components/login/Login.vue')
  },
  {
    path: '/registered/',
    name: 'Registered',
    component: () => import('@/components/registered/Registered.vue')
  },
  {
    path: '/admin-index/',
    name: 'adminIndex',
    component: AdminIndex,
    children: [
      {
        path: '/',
        redirect: 'Main'
      },
      {
        // AddMusicLists 会被渲染在 AdminIndex 的 <router-view> 中
        path: 'AddMusicLists',
        name: 'AddMusicLists',
        component:() => import('@/views/add-musiclists/AddMusicLists.vue'),
      },
      {
        path: 'Main',
        name: 'Main',
        component:() => import('@/views/admin-index/main/Main.vue'),
      },
    ]
  }
]


const router = new VueRouter({
  routes
})

export default router
