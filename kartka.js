import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();
loadSprite("xy","zima.png")

loadSprite("balwan","balwan.png")
// add a piece of text at position (120, 80)
add([
    text("hello"),
    pos(120, 80),
])

loadSound("muza","aniol_pasterzom_mowil.mp3")

add([
    sprite("xy"),
    pos(0,0),
])

const sm = add([
     sprite("balwan"),
     pos(0,0)
])
   

onUpdate(()=>{
    if (sm.pos.x<450 && sm.pos.y<80)
{
    sm.pos.x=sm.pos.x+2
    sm.pos.y=sm.pos.y+0.5
}    
    else destroy (sm)
})

onKeyPress("space", ()=> {
    play("muza")
})