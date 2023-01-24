<script>
import MyButton from './components/MyButton.vue';
  export default{
    data() {
        return {
            msg: "今天天气不错",
            stu:{
              name:'孙悟空',
              age:18,
              address:"花果山"
            },
            money:[0,1,2,3,4,5,6,7,8,9]
        };
    },
    components:{
      MyButton
    }
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <hr>
  <h2>{{ stu.name }}--{{ stu.age }}--{{ stu.address }}</h2>
  <MyButton></MyButton>
  <MyButton></MyButton>
  <MyButton></MyButton>
  <hr>
  <p>{{ money }}</p>
</template>