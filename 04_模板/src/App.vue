<script setup>
import {reactive,ref,computed} from 'vue'
const msg = ref("Hello Vue")
const html = `<h2>这是一段h2代码</h2>`
</script>

<template>
  <!-- 
    - 在模板中，可以直接访问到组件中声明的变量
    - 除了组件中的变量外，vue也为我们提供了一些全局对象可以访问:
        比如 Date、Math、RegExp ...
        除此之外也可以通过app对象来向vue中添加一些全局变量
        app.config.globalProperties
    - 受用插值{{  }},只能使用表达式 (有返回值的语句)
    - 插值实际上就是在修改元素的textContent,如果内容中含有标签，标签会被转义显示不会使标签生效

    指令：
      - 指令是模板中为标签设置的一些特殊属性，它可以用来设置标签如何显示内容
      - 指令使用 v- 开头
   -->
  <h1>{{ hello }}</h1>
  <p>{{ html }}</p>
</template>
