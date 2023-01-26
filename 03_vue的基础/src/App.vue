<script setup>
import { reactive,ref} from 'vue';
/* 
  reactive()
      - 返回一个对象的响应式代理
      - 返回的是一个深层的响应式对象
      - 也可以使用shallowReactive()创建一个浅层响应式对象
      - 缺点：1. 只能返回对象的响应式代理！

  ref()
      - 接收一个任意值，并返回他的响应式代理
*/
  // ref 在生成响应式代理时,将值包装成一个对象 0 ----> {value:0}
  // 访问ref对象时，必须通过 对象.value 来访问其中的值
  // 在模板中，ref对象会被自动解包

  // vue给我们提供了一个语法糖，使得ref对象在script标签中也可以自动解包
  // $是一个实验性的，需要在vite插件中做一些配置
  const count = $ref(0)

  // count = 10 // 该变量只会影响到变量自己，在js中无法实现对一个变量的代理
</script>
<template>
  <h1>组合式API</h1>
  {{ count }}
  <button @click="count++">Click</button>
</template>