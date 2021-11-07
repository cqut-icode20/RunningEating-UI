import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from "@/components/global/Login";
import Home from '@/components/home/Home';
import UserList from "@/components/usersystem/UserList";
import MainPage from "@/components/MainPage";
import RoleList from "@/components/permission/RoleList";
import PermissionList from "@/components/permission/PermissionList";
import GoodsList from "@/components/goods/GoodsList";
import HistoryOrderList from "@/components/order/HistoryOrderList";
import NewOrderList from "@/components/order/NewOrderList";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login
    },


    {
        path: '/home',
        component: Home,
        children: [
            {
                path: 'mainPage',
                component: MainPage
            },
            {
                path: 'userList',
                component: UserList
            },
            {
                path: 'roleList',
                component: RoleList
            },
            {
                path: 'permissionList',
                component: PermissionList
            },
            {
                path: 'goodsList',
                component: GoodsList
            },
            {
                path: 'userList',
                component: UserList
            },
            {
                path: 'mainPage',
                component: MainPage
            },
            {
                path: 'newOrderList',
                component: NewOrderList
            },
            {
                path: 'historyOrderList',
                component: HistoryOrderList
            }
        ]
    },


]
const router = new VueRouter({mode: 'history', routes})

router.beforeEach((to, from, next) => {
    // to 将访问哪一个路径
    // from 代表从哪个路径跳转而来
    // next 是一个函数,表示放行
    //   next() 放行 next('/login') 强制跳转
    if (to.path === '/login') return next()
    // 获取token
    const token = window.sessionStorage.getItem('token')
    if (!token) return next('/login')
    next()
})

export default router

