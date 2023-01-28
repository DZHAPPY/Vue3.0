<script setup>
import MyBox from './components/MyBox.vue'
const msg = 'Good Day'
</script>

<template>
    <div class="app">
        <MyBox></MyBox>
    </div>
<h1>{{ msg }}</h1>
<div class="box1"></div>

</template>
<!-- 
    可以直接通过style标签来编写样式，此时编写的样式是全局样式，
    会影响到所有的组件

    可以为style标签添加一个scope属性，这样样式将成为局部样式，只对当前组件生效
        - 使用scoped样式时，vue会自动为组件中的所有元素生成一个随机的属性
          如：data-v-7a7a37b1，生成后所有的选择器都会在最后添加一个[data-v-7a7a37b1]
          例如：h1 -> h1[data-v-7a7a37b1]   属性选择器

        - 注意：
            - 随机生成的属性，除了会添加到当前组件内的元素上，也会添加到
                当前引入的其他组建的根元素上，这样设计可以让我们可以通过父组件为子组件设置一些样式
-->
<style scoped>
h1{
    background-color: orange;
}
.box1{
    margin: 10px;
    padding: 10px;
    width: 200px;
    height: 200px;
    background-color: #bfa;
    border-radius: 20px;
}
.app :deep(h2){
    color: yellow;
}
:global(div){
    border: 1px solid red;
}
</style>