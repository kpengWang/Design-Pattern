/**
 * 
*需求：
品牌：迈巴赫、林肯、宾利、特斯拉[如果不选品牌，默认特斯拉] 
颜色：赤橙黄绿青蓝紫...[如果不选颜色，默认黄色]
动力：燃油、电力、混合动力[如果不选动力，默认电力]
购买人的一些备注信息[购买人可能会修改备注需要提供方法]
针对购买人选择的车型返回对车型的简单描述[描述可以修改]
 */


//创建一个汽车
var Car = function(param) {
    this.color = param && param.color || 'yellow';
    this.brand = param && param.brand || 'Tesla';
    this.power = param && param.power || 'electric';
};

// 提供原型方法
Car.prototype = {
    getColor: function() {
        return this.color;
    },
    getBrand: function() {
        return this.brand;
    },
    getPower: function() {
        return this.power;
    }
};

//创建一个反馈
var FeedBack = function(brand) {
    var that = this;
    (function(brand, that) {
        switch (brand) {
            case "Tesla":
                that.information = "特斯拉是好车";
                break;
            case "Rolls":
                that.information = "劳斯莱斯是好车";
        }
    })(brand, that);
};

FeedBack.prototype.changeBrand = function(information) {
    this.information = information;
};


// 创建一个顾客
var Client = function(name, message) {
    this.name = name;
    this.message = message || '无留言';
};

// 顾客修改备注信息
Client.prototype.changeMessage = function(message) {
    this.message = message;
};

// 创建订单

var Order = function(name) {
    var obj = new Car();
    obj.client = new Client(name);
    obj.feedBack = new FeedBack(obj.brand);
    return obj;
};

var orderCar = new Order('Vendar-MH');
console.log('The' + orderCar.client.name + '先生、下单一辆' + orderCar.color + '的' + orderCar.brand + ' 留言内容 : ' + orderCar.client.message);
orderCar.client.changeMessage('请马上电话联系我')
console.log('The' + orderCar.client.name + '先生、下单一辆' + orderCar.color + '的' + orderCar.brand + ' 留言内容 : ' + orderCar.client.message);