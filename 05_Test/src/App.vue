<script setup>
import { ref } from 'vue';
    // 创建变量来记录选项卡的状态
    const current = ref(0)  // 0 球员 1 球队
</script>

<template>
    <!-- 选项卡外部容器 -->
    <div class="tab-wrapper">
        <!-- 选项卡的头部 -->
        <header class="tab-head">
            <!-- 定义两个按钮 -->
            <div @click="current = 0" class="tab-button" :class="{ active:current === 0 }">热门球员</div>
            <div @click="current = 1" class="tab-button" :class="{ active:current === 1 }">热门球队</div>
        </header>
        <!-- 选项卡的主体 -->
        <div class="main"></div>
    </div>
</template>

<style scoped>
    .tab-wrapper{
        box-sizing: border-box;
        width: 800px;
        padding: 20px;
        background-color: rgb(45,83,211);
    }

    .tab-head{
        display: flex;
        border-radius: 10px;
        overflow: hidden;
    }
    .tab-button{
        background-color: #fff;
        padding: 10px 0;
        font-size: 30px;
        text-align: center;
        flex: auto;
        cursor: pointer;
    }
    .tab-button:not(.active):hover{
        color: rgb(187,3,52);
    }
    .active{
        background-color: rgb(187,3,52);
        color: #fff;
        transition: 0.3s;
    }
</style>
