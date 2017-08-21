/***-----------------
 * 一 面向过程的写法/OP
----------------- */
function OP(action) {
    var o = {};

    o.vender = "网易云音乐";
    o.playingMusic = "see you again";

    switch (action) {
        case "last":
            o.information = { currentMusic: "Ich will", status: "200|404", message: "上一曲" };
            break;
        case "next":
            o.information = { currentMusic: "一人我编程累", status: "200|404", message: "下一曲" };
            break;
        case "play":
            o.information = { currentMusic: "se you again", status: "200|500", message: "播放" };
            break;
        case "mute":
            o.information = { currentMusic: "see you again", status: "200|500", message: "静音" };
            break;
    }
    return o;
}

//----------执行及结果--------

/**
var music = OP('next');
console.log("音乐提供商:" + music.vender);
console.log("正在播放:" + music.playingMusic);
console.log("执行动作:" + music.information.message);
console.log("接口状态:" + music.information.status);
console.log("执行动作后歌曲:" + music.information.currentMusic);
*/




/***-----------------
 * 二  面向对象的写法/OO
----------------- */

var OO = function(action) {
    this.vender = "网易云音乐";
    this.playingMusic = "see you again";
};

OO.prototype = {
    last: function() {
        this.information = { currentMusic: "Ich will", status: "200|404", message: "上一曲" };
    },
    next: function() {
        this.information = { currentMusic: "一人我编程累", status: "200|404", message: "下一曲" };
    },
    play: function() {
        this.information = { currentMusic: "se you again", status: "200|500", message: "正在播放" };
    },
    mute: function() {
        this.information = { currentMusic: "see you again", status: "200|500", message: "静音" };
    }
};


//----------执行及结果--------
/**
var music = new OO();
music.play(); //执行下一曲动作
console.log("音乐提供商:" + music.vender);
console.log("正在播放:" + music.playingMusic);
console.log("执行动作:" + music.information.message);
console.log("接口状态:" + music.information.status);
console.log("执行动作后歌曲:" + music.information.currentMusic);
 */



/***--------------------------------
 * 三  使用工厂模式的写法
------------------------------------ */

var wyMusic = function(action) {
    this.vender = '网易云音乐';
    this.playingMusic = 'see you again';
};

wyMusic.prototype = {
    last: function() {
        this.information = { currentMusic: "Ich will", status: "200|404", message: "上一曲" };
    },
    next: function() {
        this.information = { currentMusic: "一人我编程累", status: "200|404", message: "下一曲" };
    },
    play: function() {
        this.information = { currentMusic: "se you again", status: "200|500", message: "正在播放" };
    },
    mute: function() {
        this.information = { currentMusic: "see you again", status: "200|500", message: "静音" };
    }
};



var qqMusic = function(action) {
    this.vender = "QQ音乐";
    this.playingMusic = "其实我不low";
};
qqMusic.prototype = {
    last: function() {
        this.information = { currentMusic: "Ich will", status: "200|404", message: "上一曲" };
    },
    next: function() {
        this.information = { currentMusic: "网易才low", status: "200|404", message: "下一曲" };
    },
    play: function() {
        this.information = { currentMusic: "se you again", status: "200|500", message: "正在播放" };
    },
    mute: function() {
        this.information = { currentMusic: "see you again", status: "200|500", message: "静音" };
    }
};

//音乐工厂
var MusicFactory = function(type) {
    switch (type) {
        case 'qq':
            return new qqMusic();
        case 'wangyi':
            return new wyMusic();
    }
};


//----------执行及结果--------
/* */
var music = new MusicFactory('qq');
music.next();
console.log("_________unused inherit__________");
console.log("音乐提供商:" + music.vender);
console.log("正在播放:" + music.playingMusic);
console.log("执行动作:" + music.information.message);
console.log("接口状态:" + music.information.status);
console.log("执行动作后歌曲:" + music.information.currentMusic);




/***--------------------------------
 * 四  使用类式继承
 * >>!思想是提取公用的方法
------------------------------------ */

var BaseMusic = function() {
    this.playingMusic = "see you again";
};

BaseMusic.prototype = {
    last: function() {
        this.information = { status: "200|404", message: "上一曲" };
    },
    next: function() {
        this.information = { currentMusic: "网易才low", status: "200|404", message: "下一曲" };
    },
    play: function() {
        this.information = { currentMusic: "se you again", status: "200|500", message: "正在播放" };
    },
    mute: function() {
        this.information = { currentMusic: "see you again", status: "200|500", message: "静音" };
    }
};


//网易云的不同于父类的构造方法
var WangyiMusicAction = function(action) {
    this.vender = "网易云音乐";
};

WangyiMusicAction.prototype = new BaseMusic();


//QQ
var QQMusicAction = function() {
    this.vender = "QQ音乐";
    this.playingMusic = "其实我不low";
};

QQMusicAction.prototype = new BaseMusic();

//音乐工厂
var MusicFactory = function(type) {
    switch (type) {
        case 'qq':
            return new QQMusicAction();
        case 'wangyi':
            return new WangyiMusicAction();
    }
};


var music = new MusicFactory('wangyi');
music.next();

console.log("_________Used Inherit__________");
console.log("音乐提供商:" + music.vender);
console.log("正在播放:" + music.playingMusic);
console.log("执行动作:" + music.information.message);
console.log("接口状态:" + music.information.status);
console.log("执行动作后歌曲:" + music.information.currentMusic);