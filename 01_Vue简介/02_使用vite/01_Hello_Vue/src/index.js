// 引入Vue
// 这里引用的Vue，默认不支持template属性来设置模板
import {createApp} from "vue/dist/vue.esm-bundler.js"

// 创建根组件
const App = {
    data(){
        return{
            message:'I love Vue'
        }
    },
    template:"<h1>{{message}}</h1>"
} 

// 创建应用挂在组件
createApp(App).mount('#app')