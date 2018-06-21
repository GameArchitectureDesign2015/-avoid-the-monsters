// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        gamer: {
            default: null,
            type: cc.Node
        },
        
        bg: {
            default: null,
            type: cc.Node
        },

        audioSource:{
            type:cc.AudioSource, 
            default:null
        },
    },

    play:function(){
        this.audioSource.play();
    },

    onLoad: function () {
        
    },

    update: function (dt) {
        
        if (this.gamer.x > 100) {
            if (this.bg.x < -1920) {
                this.bg.x = -1920;
                this.gamer.x = 100;
            } else if (this.bg.x >= -1920){
                this.bg.x -= (this.gamer.x - 100);
                this.gamer.x = 100;
            }
        } else if (this.gamer.x < -350) {
            if (this.bg.x < -480) {
                this.bg.x -= (this.gamer.x + 150);
                this.gamer.x = -350;
            } else if (this.bg.x >= -480){
                this.bg.x = -480;
                this.gamer.x = -350;
            }
        }
    },
});
