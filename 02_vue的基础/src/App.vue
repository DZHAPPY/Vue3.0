<script>
  // 组件，一个组件可以创建多个组件实例
  // 组件就是一个js对象
  export default{
    // data是一个函数
    // 在data中，this就是当前的组件实例vm
    // 如果使用箭头函数，则无法通过this来访问组件实例
    // 使用Vue时，减少使用箭头函数
    data(){
      console.log("data",this);
      // 直接向组件实例中添加一个属性，不会被Vue所代理，不是响应式数据，修改后页面不会发生变化
      this.name = '孙悟空'
      
      // data会返回一个对象作为返回值，Vue会对该对象进行代理
      // 从而将其转换为响应式数据，响应式数据都会通过组件实例访问
      return{
        msg:'I love Vue3.0'
      }
    }
  }
</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>{{ name }}</h2>
</template>