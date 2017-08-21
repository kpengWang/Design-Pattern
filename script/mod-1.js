if (!objA || !objB || !objC || !objB) {


    // 若要调用objA的方法, 要另建一个变量来传递
    //  var exp  =objA();
    //   exp.fn1()
    var objA = function() {
        return {
            fnA1: function() {
                console.log("this is fn1 of A");
            },
            fnA2: function() {
                console.log("this is fn2 of A");
            }
        };

    };

    // 若要调用objB的方法, 要另建一个变量来实例化（不推荐）
    //每一次通过new创建新对象的时候，新创建的对象都会对类this上的属性进行复制，定义了两个那么就复制两次
    //  var exp  =new objB();
    //  exp.fn3()
    var objB = function() {
        this.fnB1 = function() {
            console.log("this is fn1 of B");
        };
        this.fnB1 = function() {
            console.log("this is fn2 of B");
        };
    };


    //方法都复制到CheckObject的原型连上去了，创建出来的对象都是通过prototype依次寻找，
    //都绑定在CheckObject的原型上__proto__
    var objC = function() {};
    objC.prototype.fnC1 = function() {
        console.log("this is fn1 of C");
    };
    objC.prototype.fnC2 = function() {
        console.log("this is fn2 of C");
    };


    var objD = function() {};
    objD.prototype = {
        fnD1: function() {
            console.log("this is fn1 of D");
            return this;
        },
        fnD2: function() {
            console.log("this is fn2 of D");
            return this;
        }
    };
}