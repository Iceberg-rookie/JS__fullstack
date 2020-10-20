// es6 箭头函数
const getUserInfo = (user: {name: string, sex: string, company: string}):string => {
    return `${user.name} 性别${user.sex} 就职于${user.company}`;
    // return true
}
// console.log( getUserInfo({name: '任康华', sex: '男', company: '字节跳动'}));
console.log( getUserInfo({name: '刘志鹏', sex: '男', company: '抖音'}));
