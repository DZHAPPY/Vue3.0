/* 封装一个自定义的按钮组件 */
export default{
    data(){
        return{
            count:0
        }
    },
    template:`<button @click="count++">点击一下</button>{{count}}`
}