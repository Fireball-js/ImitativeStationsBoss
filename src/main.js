// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/rem'
import './assets/reset.css'

Vue.config.productionTip = false

//导入vant
import {
    Button,
    Swipe,
    SwipeItem,
    NavBar,
    Icon,
    Sticky,
    Tabbar,
    TabbarItem,
    PullRefresh,
    Toast,
    Loading,
    Area,
    Grid,
    GridItem,
    DropdownMenu,
    DropdownItem,
    ActionSheet
} from 'vant'

//引用vant组件.0
Vue.use(Button).use(Swipe).use(SwipeItem).use(NavBar).use(Icon).use(Sticky).use(Tabbar).use(TabbarItem)
    .use(PullRefresh).use(Toast).use(Loading).use(Area).use(Grid).use(GridItem).use(DropdownMenu)
    .use(DropdownItem).use(ActionSheet)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})