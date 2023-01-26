<script>
  import { reactive } from 'vue'
  export default{

    // setup是一个钩子函数，可以通过这个函数向外部暴露组件的配置
    // 组合式api中直接声明的变量，只是一个普通的变量，不是响应式属性
    //    修改这些属性时，不会在视图中产生效果
    setup(){
      // 定义变量
      const msg = "今天天气不错"
      let count = 0

      // 可以通过reactive()来创建一个响应式的对象
      const stu = reactive({
        name:"孙悟空",
        age:18,
        gender:'man'
      })

      // 在setup()中可以通过返回值来指定哪些内容要暴露给外部
      // 暴露后的内容可在模板中直接使用
      return{
        msg,
        count,
        stu
      }
    }
  }
</script>
<template>
  <h1>组合式API</h1>
  <h2>{{ msg }}</h2>
  <h2>{{ count }}</h2>
  <button @click="count++">Click</button>
  <h2>{{ stu.name }}</h2>
</template>