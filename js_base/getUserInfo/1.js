// es6 箭头函数
var getUserInfo = function (user) {
    return user.name + " \u6027\u522B" + user.sex + " \u5C31\u804C\u4E8E" + user.company;
    // return true
};
// console.log( getUserInfo({name: '任康华', sex: '男', company: '字节跳动'}));
console.log(getUserInfo({ name: '刘志鹏', sex: '男', company: '抖音' }));
