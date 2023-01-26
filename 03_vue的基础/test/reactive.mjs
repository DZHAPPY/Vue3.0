import {reactive,ref} from 'vue'

const stu = reactive({name:'孙悟空'})
const person = ref({name:"猪八戒"})
console.log(person.value.name);