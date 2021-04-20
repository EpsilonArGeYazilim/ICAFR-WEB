import Vue from "vue"
import VueRouter from "vue-router"

import Homepage from "./components/Pages/Homepage"
import Mission from "./components/Pages/Mission"
import Vision from "./components/Pages/Vision"
import Services from "./components/Pages/Services"
import CategoryService from "./components/Pages/CategoryService"
import Project from "./components/Pages/Project"
import News from "./components/Pages/News"
import Notices from "./components/Pages/Notices"
import Team from "./components/Pages/Team"
import Faq from "./components/Pages/Faq"
import Contact from "./components/Pages/Contact"
import ServiceDetail from "./components/Detail/ServiceDetail"
import ProjectDetail from "./components/Detail/ProjectDetail"
import ReferenceDetail from "./components/Detail/ReferenceDetail"
import NewsDetail from "./components/Detail/NewsDetail"
import NoticeDetail from "./components/Detail/NoticeDetail"
import Redirect from "./components/Pages/Redirect"
import Kurullar from "./components/Pages/Kurullar"
import OnemliTarihler from "./components/Pages/OnemliTarihler"
import Kitaplari from "./components/Pages/Kitaplari"
import Paydaslar from "./components/Pages/Paydaslar"
import Kayit from "./components/Pages/Kayit"
import KongreHakkinda from "./components/Pages/KongreHakkinda"
import BildiriArsivi from "./components/Pages/BildiriArsivi"
import BildiriGonder from "./components/Pages/BildiriGonder"

import jQuery from 'jquery'
window.jQuery = window.$ = jQuery



Vue.use(VueRouter)

const routes =  [
        {
            path: '/',
            name: '/',
            component: Homepage,

        },
        {
            path: '*',
            name: 'home',
            component: Homepage,

        },
        {
            path: '/home',
            name: 'home',
            component: Homepage,

        },
        {
            path: '/mission',
            name: 'mission',
            component: Mission,   
        },
        {
            path: '/vision',
            name: 'vision',
            component: Vision,   
        },
        {
            path: '/service',
            name: 'service',
            component: Services,   
        },
        {
            path: '/category/:category_id?',
            name: 'category',
            component: CategoryService,
            props: true
        },
        {
            path: '/project',
            name: 'project',
            component: Project,   
        },
        {
            path: '/news',
            name: 'news',
            component: News,   
        },
        {
            path: '/notices',
            name: 'notices',
            component: Notices,   
        },
        {
            path: '/team',
            name: 'team',
            component: Team,   
        },
        {
            path: '/sss',
            name: 'sss',
            component: Faq,   
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact,   
        },
        {
            path: '/service_detail/:service_id?',
            name: 'service_detail',
            component: ServiceDetail,   
        },
        {
            path: '/project_detail/:project_id?',
            name: 'project_detail',
            component: ProjectDetail,   
        },
        {
            path: '/reference_detail/:reference_id?',
            name: 'reference_detail',
            component: ReferenceDetail,   
        },
        {
            path: '/news_detail/:new_id?',
            name: 'news_detail',
            component: NewsDetail,   
        },
        {
            path: '/notice_detail/:notice_id?',
            name: 'notice_detail',
            component: NoticeDetail,   
        },
        {
            path: '/redirect/:category_id?',
            name: 'redirect',
            component: Redirect,   
        },
        {
            path: '/kurullar',
            name: 'kurullar',
            component: Kurullar,
        },
        {
            path: '/onemli_tarihler',
            name: 'onemli_tarihler',
            component: OnemliTarihler,
        },
        {
            path: '/kitaplari',
            name: 'kitaplari',
            component: Kitaplari,
        },
        {
            path: '/paydaslar',
            name: 'paydaslar',
            component: Paydaslar,
        },
        {
            path: '/kayit',
            name: 'kayit',
            component: Kayit,
        },
        {
            path: '/kongre_hakkinda',
            name: 'kongre_hakkinda',
            component: KongreHakkinda,
        },
        {
            path: '/bildiri_arsivi',
            name: 'bildiri_arsivi',
            component: BildiriArsivi,
        },
        {
            path: '/bildiri_gonder',
            name: 'bildiri_gonder',
            component: BildiriGonder,
        },
    ];
    export const router = new VueRouter({ mode : 'history',
    base:"/",


    routes });


