class SpriteKind {
    Player = 1000
    Projectile = 1
    Food = 1001
    Enemy = 1002
    constructor () {}
}

class AssetImages {
    constructor() {}
}

class SpriteManager {
    protected sprite: Sprite
    protected KindManager = new SpriteKind;
    constructor(image: Image, spriteKind?: kind) {
        this.sprite = sprites.create(image, spriteKind);
    }
    move() {
        this.sprite.setVelocity(1, 1)
    }
    /**
     * 
     */
    reset() {
        this.sprite.setVelocity(0, 0)
    }
    destroy() {
        this.sprite.destroy();
    }
}

class main {
    constructor() {
        const test = new SpriteManager(img`
3 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, kind.Enemy)
        test.move()  
        test.reset()
    }
}

new main()