import { createWebHistory, createRouter } from "vue-router";

import Talent from '../TalentMain.vue';
import BerandaTalent from '../components/views/BerandaTalent.vue';
import ProjectTalent from '../components/views/ProjectTalent.vue';
import BriefTalent from "../components/views/BriefTalent.vue";
import DetailBriefTalent from "../components/views/DetailBriefTalent.vue";
import AcceptBrief from "../components/views/AcceptBriefTalent.vue";
import RejectBrief from "../components/views/RejectBriefTalent.vue";

import Client from '../ClientMain.vue';
import BerandaClient from '../components/views/BerandaClient.vue';
import ProjectClient from '../components/views/ProjectClient.vue';
import BriefClient from "../components/views/BriefClient.vue";
import DetailBriefClient from "../components/views/DetailBriefClient.vue";
import AddBriefClient from "../components/views/AddBriefClient.vue";
import AddBriefClientNext from "../components/views/AddBriefClientNext.vue";
import CompleteBriefClient from "../components/views/CompleteBriefClient.vue";

import Login from '../Login.vue';
import LoginAdmin from '../components/views/LoginAdmin.vue';
import LoginClient from '../components/views/LoginClient.vue';
import LoginTalent from '../components/views/LoginTalent.vue';

import LandingPage from '../LandingPage.vue';

const routes = [
    {
        path: "/talent",
        name: "talent",
        component: Talent,
        children: [
            { path: '/talent', name: "berandatalent", component: BerandaTalent },
            { path: '/talent/project', name: "projecttalent", component: ProjectTalent },
            { path: '/talent/brief', name: "brieftalent", component: BriefTalent },
            { path: '/talent/detailbrief', name: "detailbrieftalent", component: DetailBriefTalent },
        ]
    },
    {
        path: "/talent/acceptbrief",
        name: "acceptbrief",
        component: AcceptBrief,
    },
    {
        path: "/talent/rejectbrief",
        name: "rejectbrief",
        component: RejectBrief,
    },
    {
        path: "/client",
        name: "client",
        component: Client,
        children: [
            { path: '/client', name: "berandaclient", component: BerandaClient },
            { path: '/client/project', name: "projectclient", component: ProjectClient },
            { path: '/client/brief', name: "briefclient", component: BriefClient },
            { path: '/client/detailbrief', name: "detailbriefclient", component: DetailBriefClient },
        ]
    },
    {
        path: "/client/addbriefclient",
        name: "addbriefclient",
        component: AddBriefClient,
    },
    {
        path: "/client/addbriefclientnext",
        name: "addbriefclientnext",
        component: AddBriefClientNext,
    },
    {
        path: "/client/completebriefclient",
        name: "completebriefclient",
        component: CompleteBriefClient,
    },
    {
        path: "/login",
        name: "login",
        component: Login,
        children: [
            { path: '/login/admin', name: "loginadmin", component: LoginAdmin },
            { path: '/login/client', name: "loginclient", component: LoginClient },
            { path: '/login/talent', name: "logintalent", component: LoginTalent },
        ]
    },
    {
        path: "/",
        name: "landingpage",
        component: LandingPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;