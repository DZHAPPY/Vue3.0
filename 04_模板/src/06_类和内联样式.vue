<script setup>
    const arr = ['box1','box2','box3']
    const arr2 = [{box1:true},{box2:false}]
    const sty = {
        color:'red',
        backgroundcolor:'#bfa'
    }
</script>
<template>
    <h1 class="header">我爱Vue</h1>
    <div v-bind:class="arr"></div>
    <div :class="arr2" :style="sty">123123</div>
</template>

<style scoped>
    .header{
        background-color: orange;
    }
</style>