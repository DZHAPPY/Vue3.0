<script>
    import Mybutton from './components/Mybutton.vue';
    /* 编写组件的代码 */
    export default{
    data() {
        return {
            msg: "I like Vue very much!"
        };
    },

    components:{
        Mybutton
    }
}
</script>

<template>
    <h1>{{msg}}</h1>
    <Mybutton></Mybutton>
</template>