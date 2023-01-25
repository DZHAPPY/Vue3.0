<script>
  export default{
    // data用来指定实例对象中的响应式属性
    data(){
      return{
        msg:"今天天气不错"
      }
    },

    /* methods用来指定实例对象中的方法
          - 它是一个对象，可以在它里面定义多个方法
          - 这些方法最终将会被挂载到组件实例上
          - 可以直接通过组件实例来调用这些方法
          - 所有组件实例上的属性都可以在模板中直接访问
    */
    methods:{
      test(){
        alert('哈哈哈')
      },
      hello(){
        console.log(this);
        document.body.insertAdjacentHTML('beforeend','<h1>hello</h1>')
      },
      changeMsg(){
        this.msg = "新的消息"
      }
    }

}
</script>

<template>
  <h1 @click="changeMsg">{{ msg }}</h1>
</template>