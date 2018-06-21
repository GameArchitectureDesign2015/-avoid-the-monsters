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
        monster1: {
            default: null,
            type: cc.Node
        },
        
        monster2: {
            default: null,
            type: cc.Node
        },
        
        monster3: {
            default: null,
            type: cc.Node
        },

        monster4: {
            default: null,
            type: cc.Node
        },
        
        monster5: {
            default: null,
            type: cc.Node
        },
        
        monster6: {
            default: null,
            type: cc.Node
        },

        monster7: {
            default: null,
            type: cc.Node
        },

        goal: {
            default: null,
            type: cc.Node
        },
    },
    
    monsterMove: function (time,monster) {
        
        var tmp = monster.y;
        
        var moveUp1 = cc.moveBy(time*(Math.abs(250-tmp)/200), cc.p(0,250-tmp));
        var moveDown = cc.moveBy(time, cc.p(0,-200));
        var moveUp2 = cc.moveBy(time*(Math.abs(tmp-50)/200), cc.p(0,tmp-50));
        return cc.repeatForever(cc.sequence(moveUp1, moveDown, moveUp2));
    },

    onLoad: function () {
        
        this.monster1.runAction(this.monsterMove(5, this.monster1));
        this.monster2.runAction(this.monsterMove(4, this.monster2));
        this.monster3.runAction(this.monsterMove(3, this.monster3));
        this.monster4.runAction(this.monsterMove(2, this.monster4));
        this.monster5.runAction(this.monsterMove(6, this.monster5));
        this.monster6.runAction(this.monsterMove(7, this.monster6));
        this.monster7.runAction(this.monsterMove(8, this.monster7));
    },

});

function stopAll() {

    cc.find("Canvas/firstBg/monster1").stopAllActions();
    cc.find("Canvas/firstBg/monster2").stopAllActions();
    cc.find("Canvas/firstBg/monster3").stopAllActions();
    cc.find("Canvas/firstBg/monster4").stopAllActions();
    cc.find("Canvas/firstBg/monster5").stopAllActions();
    cc.find("Canvas/firstBg/monster6").stopAllActions();
    cc.find("Canvas/firstBg/monster7").stopAllActions();
}

module.exports = {
    stopAll: stopAll,
};

