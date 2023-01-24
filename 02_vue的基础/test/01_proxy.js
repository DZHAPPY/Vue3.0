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
const handler = {

    // get用来指定读取数据时的行为，它的返回值就是最终读取到的值
    // 指定get后,在通过代理读取对象属性时,就会调用get方法来获取值
    get(target,prop,receiver){

        // 在vue中,data()返回的对象都会被vue代理
        // vue代理后,当我们通过代理去读取属性时,返回值之前,它会先做一个跟踪的操作
        //      当我们通过代理去修改属性时,修改后会通知之前所有用到该值的位置进行更新
        

        /* 
            三个参数:
                1. target 被代理的对象
                2. prop 读取的属性
                3. receiver 代理对象
        */
        return target[prop]
    },

    // set会在通过代理修改对象时调用
    set(target,prop,value,receiver){
        target[prop] = value

        // trigger()会出发所有的使用该值的位置进行更新
    }
}  // 用来指定代理行为

// 创建代理
const proxy = new Proxy(obj,handler)

proxy.name = '猪八戒'
console.log(proxy.name);