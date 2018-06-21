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
        freak1: {
            default: null,
            type: cc.Node
        },
        
        freak2: {
            default: null,
            type: cc.Node
        },
        
        freak3: {
            default: null,
            type: cc.Node
        },

        freak4: {
            default: null,
            type: cc.Node
        },
        
        freak5: {
            default: null,
            type: cc.Node
        },
        
        freak6: {
            default: null,
            type: cc.Node
        },

        goal: {
            default: null,
            type: cc.Node
        },
    },
    
    freakMove: function (time,freak) {
        
        var tmp = freak.y;
        
        var moveUp1 = cc.moveBy(time*(Math.abs(250-tmp)/200), cc.p(0,250-tmp));
        var moveDown = cc.moveBy(time, cc.p(0,-200));
        var moveUp2 = cc.moveBy(time*(Math.abs(tmp-50)/200), cc.p(0,tmp-50));
        return cc.repeatForever(cc.sequence(moveUp1, moveDown, moveUp2));
    },

    onLoad: function () {
        
        this.freak1.runAction(this.freakMove(5, this.freak1));
        this.freak2.runAction(this.freakMove(4, this.freak2));
        this.freak3.runAction(this.freakMove(3, this.freak3));
        this.freak4.runAction(this.freakMove(2, this.freak4));
        this.freak5.runAction(this.freakMove(6, this.freak5));
        this.freak6.runAction(this.freakMove(7, this.freak6));
    },

});

function stopAll() {

    cc.find("Canvas/firstBg/freak1").stopAllActions();
    cc.find("Canvas/firstBg/freak2").stopAllActions();
    cc.find("Canvas/firstBg/freak3").stopAllActions();
    cc.find("Canvas/firstBg/freak4").stopAllActions();
    cc.find("Canvas/firstBg/freak5").stopAllActions();
    cc.find("Canvas/firstBg/freak6").stopAllActions();
}

module.exports = {
    stopAll: stopAll,
};
