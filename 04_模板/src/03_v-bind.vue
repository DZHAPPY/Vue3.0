<script setup>
import { ref } from 'vue';

    const imghPath = ref("/images/1.jpg")
    const changeImg = ()=>{
        imghPath.value = imghPath.value === "/images/1.jpg"?"/images/2.jpg":"/images/1.jpg"
    }
    const isDisable = true

    const attrName = "title"
    const attrvalue = "这是一个title"
</script>

<template>
    <!-- 
        当需要为标签动态设置属性时，需要使用v-bind指令
            v-bind可以简写为 :
        当我们为一个布尔值设置属性时
            - 如果值为true，则元素上有该属性(转换后为true也算true)
            - 如果值为false，则元素上无该属性
            - 特殊情况： '' 空串会被当成真值
     -->
    <button @click="changeImg">Change image</button>
    <img :src="imghPath" alt="梅西" v-bind:[attrName]="attrvalue">
    <input type="text" :disabled="isDisable" placeholder="不能输入">

</template>
