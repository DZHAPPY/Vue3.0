// 引入组件
import Mybutton from "../Mybutton"

// 创建根组件
export default{
    data(){
        return{
            msg:'qweqweqwe'
        }
    },
    // 在组件中注册子组件 
    components:{
        "mybutton":Mybutton
    },

    // template:"<h1>{{msg}}</h1>"
}