import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import vue3videoPlay from 'vue3-video-play'; // 引入组件
import 'vue3-video-play/dist/style.css'; // 引入css

import router from './router';
import App from './App.vue';

const app = createApp(App);

app.use(ElementPlus);
app.use(vue3videoPlay);
app.use(router);
app.mount('#app');
