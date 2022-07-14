import { createApp } from 'vue'
import Main from './Main.vue'
import Router from './router/index'

import './assets/css/main/plugins.css';
import './assets/css/main/config.css';
import './assets/css/main/mobile2.css';
import './assets/css/main/mobile.css';

import './assets/js/jquery-3.4.1.min.js'


const app = createApp(Main);
app.use(Router);
app.mount("#wrap");


