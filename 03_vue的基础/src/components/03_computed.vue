<script>
export default {
  // data用来指定实例对象中的响应式属性
  data() {
    return {
      stu: {
        name: '孙悟空',
        age: 18,
        gender: "man"
      },
      firstName:'悟空',
      lastName:'孙'
    }
  },
  methods:{
    updateAge(){
      this.stu.age = 17
    },
    now(){
      return Date.now()
    }
     
  },
  /* 用来指定计算属性 
    computed:{
      属性名:getter
    }

    - 计算属性，只在期以来的数据发送变化时才会重新执行
    - 会对数据进行缓存
  */
  computed:{
    info:function(){
      return this.stu.age > 18? '你是一个成年人了' : '你还是个孩子了'
    },
    // 计算属性的简写(只有getter时)
    // name(){
    //   return this.lastName + this.firstName
    // }
    name:{
      get(){
        return this.lastName + this.firstName
      },
      // 可以为计算属性设置setter，使得计算属性可写，但是不建议这么做
      set(value){
        console.log(value);
      }
    }

  }


}
</script>

<template>
  <h1>{{ stu.name }} -- {{ stu.age }} -- {{ stu.gender }}</h1>
  <button @click="updateAge">Change</button>
  <hr>

</template>