// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

var accLeft = false
var accRight = false
var accUp = false
var accDown = false

cc.Class({
    extends: cc.Component,

    properties: {
        moveSpeed: 0,
    },
    
    setInputControl: function () {
        var self = this;
        var keyboardListener = cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function(keyCode, event) {
                switch(keyCode) {
                    case cc.KEY.a:
                        accLeft = true;
                        accRight = false;
                        break;
                    case cc.KEY.d:
                        accLeft = false;
                        accRight = true;
                        break;
                    case cc.KEY.w:
                        accUp = true;
                        accDown = false;
                        break;
                    case cc.KEY.s:
                        accUp = false;
                        accDown = true;
                        break;  
                }
            },
            
            onKeyReleased: function(keyCode, event) {
                switch(keyCode) {
                    case cc.KEY.a:
                        accLeft = false;
                        break;
                    case cc.KEY.d:
                        accRight = false;
                        break;
                    case cc.KEY.w:
                        accUp = false;
                        break;
                    case cc.KEY.s:
                        accDown = false;
                        break;  
                }
            }
        }, self.node);
    },

    onLoad: function () {
    
        accLeft = false;
        accRight = false;
        accUp = false;
        accDown = false;
        
        this.setInputControl();
    },
    
    update: function (dt) {
        if (accLeft) {
            this.node.x -= dt*this.moveSpeed;
        } else if (accRight) {
            this.node.x += dt*this.moveSpeed;
        } else if (accUp) {
            this.node.y += dt*this.moveSpeed;
        } else if (accDown) {
            this.node.y -= dt*this.moveSpeed;
        }
        
        if (this.node.y > 100) {
            this.node.y = 100;
        } else if (this.node.y < -330) {
            this.node.y = -330;
        }
    },

});

function removeAll() {
    var gamer = cc.find("Canvas/gamer")
    accLeft = false;
    accRight = false;
    accUp = false;
    accDown = false;
    cc.eventManager.removeListeners(gamer);
}

module.exports = {
    removeAll: removeAll,
};
