<script>
export default {
  // data用来指定实例对象中的响应式属性
  data() {
    return {
      stu: {
        name: '孙悟空',
        age: 18,
        gender: "man"
      }
    }
  }


}
</script>

<template>
  <h1>{{ stu.name }} -- {{ stu.age }} -- {{ stu.gender }}</h1>
</template>