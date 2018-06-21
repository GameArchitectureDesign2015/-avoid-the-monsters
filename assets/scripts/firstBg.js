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
        player: {
            default: null,
            type: cc.Node
        },
        
        firstBg: {
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
        
        if (this.player.x > 100) {
            if (this.firstBg.x < -1920) {
                this.firstBg.x = -1920;
                this.player.x = 100;
            } else if (this.firstBg.x >= -1920){
                this.firstBg.x -= (this.player.x - 100);
                this.player.x = 100;
            }
        } else if (this.player.x < -350) {
            if (this.firstBg.x < -480) {
                this.firstBg.x -= (this.player.x + 150);
                this.player.x = -350;
            } else if (this.firstBg.x >= -480){
                this.firstBg.x = -480;
                this.player.x = -350;
            }
        }
    },
});

