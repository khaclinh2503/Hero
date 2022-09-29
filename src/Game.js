var Game = {

    user:{
        lives:GameConstants.HERO_LIVES,
        score:0,
        distance:0,
        heroSpeed:0,
        coffee:0,
        mushroom:0,
        hitObstacle:0
    },

    gameState:null,

    start:function(){
        cc.spriteFrameCache.addSpriteFrames("res/graphics/texture.plist");
        cc.director.runScene(new MenuScene());
    }
};


var jslog = function() {
    cc.log(Array.prototype.join.call(arguments, ", "));
};