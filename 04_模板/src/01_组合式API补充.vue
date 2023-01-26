<script setup>
import {reactive,ref,computed} from 'vue'
const msg = ref("Hello Vue")
const changeMsgHandler = ()=>{
  // if(msg.value === 'Hello Vue'){
  //   msg.value = '你好 Vue'
  // }else{
  //   msg.value = 'Hello Vue'
  // }

}
const obj = {
  name:ref('孙悟空'),
  age:ref(19)
}

// computed用来生成计算属性
const newMsg = computed(()=>{
  return msg.value + ' I love Vue'
})

</script>

<template>
  <!-- ref对象在模板中可以自动解包(要求ref对象必须是顶层对象) -->
  <h1>{{ msg }}</h1>
  <button @click="changeMsgHandler">Change</button>
  <!-- name不是顶层的响应式对象，所以不能自动解包 -->
  <h2>{{ obj.name.value }}</h2>
  <hr>
  <h2>{{ obj.age.value }}</h2>
  <h2>{{ newMsg }}</h2>
</template>
