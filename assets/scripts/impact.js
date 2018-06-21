// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

var gamer = require("gamer");
var freak = require("freak");

cc.Class({
    extends: cc.Component,

    properties: {
        view: {
            default: null,
            type: cc.Node
        },
        
        label: {
            default: null,
            type: cc.Label
        },
    },
    
    onLoad: function () {

    },

    onEnable: function () {
        cc.director.getCollisionManager().enabled = true;
    },
    
    onDisable: function () {
        cc.director.getCollisionManager().enabled = false;
    },
    
    onCollisionEnter: function (other, self) {
        if (self.tag === 0) {
           this.view.active = true;
           this.label.string = "you win";
           gamer.removeAll();
           freak.stopAll();
        } else {
           this.view.active = true;
           this.label.string = "you lose";
           gamer.removeAll();
           freak.stopAll();
        }
    }

});
