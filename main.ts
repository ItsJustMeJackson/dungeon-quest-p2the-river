//  Set the game
info.setScore(0)
info.setLife(1)
//  Set up the Player
let boat = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . f f . . . . . . . . . . . .
    . . . . . . . f f f f 2 f f . . . . . . . . . .
    . . . . . f f e e e e f 2 f f . . . . . . . . .
    . . . . f f e e e e e f 2 2 f f . . . . . . . .
    . . . . f e e e e f f e e e e f . . . . . . . .
    . . . . f f f f f e e 2 2 2 2 e f . . . . . . .
    . . . f f f e 2 2 2 f f f f e 2 f . . . . . . .
    . . . f f f f f f f f e e e f f f . . . . . . .
    . . . f e f e 4 4 e b f 4 4 e e f . . . . . . .
    . . . . f e e 4 d 4 b f d d e f . . . . . . . .
    . . . . . f e e e 4 d d d e e e . . . . . . . .
    . . . . . . f 2 2 2 2 e e d d d e d d d 1 . . .
    . . . . . . f 4 4 4 e 4 4 d d d e d . . . . . .
    . . . . . . f f f f f e e e e e . . . . . . . .
    . . . . . f f f f f f f f e e . . . . . . . . .
    . . . . . f f f . . f f . e . . . . . . . . . .
    . . . . b e e e 7 7 e e e e e e 7 7 e e e e b .
    . . . e e e e e 6 7 c e e e e e 6 7 e c b e e e
    . . e e c c d e e 7 7 e e e e e 7 7 e e e e e e
    . . . e e e e e e 7 7 e e e e e 7 7 e e e e e e
    . . . e e e e e e 7 6 e c c b e c 7 6 e e e e e
    . . . . b e e e 7 7 6 e e e e e c 7 7 e e e b .
`)
