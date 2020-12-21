/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    redirect:'/home',
    meta: {
      title: '首页',
      keepAlive: false
    }
  },
  { path: '/home', name: 'home', component: () => import('@/views/home/index')},
  { path: '/wallet/step1', name: 'step1', component: () => import('@/views/wallet/step1')},
]
