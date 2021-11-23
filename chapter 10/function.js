//函数声明
function quack(num) {
    for (var i = 0; i < num; i++) {
        console.log("Quack!");
    }
}
quack(3);

//函数表达式
var fly = function (num) {
    for (var i = 0; i < num; i++) {
        console.log("Flying!");
    }
};
fly(3); //必须使用变量fly来调用
