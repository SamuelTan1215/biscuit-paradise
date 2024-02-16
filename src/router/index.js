import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/dashboard',
    component: () => import('../views/back/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/back/Products.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/back/Orders.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/back/Coupons.vue'),
      },
    ],
  },
  {
    path: '/user',
    component: () => import('../views/user/Userboard.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/user/HomePage.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/user/UserCart.vue'),
      },
      {
        path: 'productList',
        component: () => import('../views/user/ProductList.vue')
      },
      {
        path: 'product/:productId',
        component: () => import('../views/user/UserProduct.vue'),
      },
      {
        path: 'checkout',
        component: () => import('@/views/user/CheckoutPage.vue')
      },
      {
        path: 'checkout/:orderId',
        component: () => import('../views/user/PaymentPage.vue'),
      },
      {
        path: 'complete',
        component: () => import('@/views/user/CompleteCheckout.vue')
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/user/AboutUs.vue')
      },
      {
        path: 'favorite',
        component: () => import('../views/user/Favorite.vue')
      },
      {
        path: 'faq',
        component: () => import('../views/user/FAQ.vue')
      },
      {
        path: 'service',
        component: () => import('../views/user/Service.vue')
      },
    ],
  },
  // 重新導向
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'home',
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
