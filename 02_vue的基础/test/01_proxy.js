// 创建一个对象
const obj = {
    name:'孙悟空',
    age:18
}

/* 
    如果直接修改对象的属性，那就仅仅修改了属性，没有去做其他事情，
        这种操作只会影响对象自身，不会导致元素的重新渲染

    
*/

// 为对象创建代理
const handler = {}  // 用来指定代理行为

// 创建代理
const proxy = new Proxy(obj,handler)

proxy.name = '猪八戒'
console.log(obj.name);