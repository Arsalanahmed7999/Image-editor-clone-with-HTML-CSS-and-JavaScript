let blurInc = document.querySelector('.blurInc');
let blurDec = document.querySelector('.blurDec');
let reset = document.querySelector('.reset');

let blur = 0

blurDec.addEventListener('click', ()=>{
    let image = document.querySelector('.image');
    if(blur <=0){
        blur = 0
    }
    else{
        blur-=0.5
    }
    image.style.filter = `blur(${blur}px)`
})

blurInc.addEventListener('click', ()=>{
    let image = document.querySelector('.image');
    blur+=0.5
    image.style.filter = `blur(${blur}px)`
})

reset.addEventListener('click', ()=>{
    let image = document.querySelector('.image');
    blur=0
    image.style.filter = `blur(${blur}px)`
})

// color

let sat = 100
let contrast = 100

let contDec = document.querySelector('.contDec')
let contInc = document.querySelector('.contInc')
let resetcolor = document.querySelector('.resetcolor')
let satDec = document.querySelector('.satDec')
let satInc = document.querySelector('.satInc')

contDec.addEventListener('click', ()=>{
    let image = document.querySelector('.image');
    if(contrast<=0){
        contrast=0  
    }
    contrast-=10
    image.style.filter=`contrast(${contrast}%)`
})

contInc.addEventListener('click', ()=>{
    let image = document.querySelector('.image');
    contrast+=10
    image.style.filter=`contrast(${contrast}%)`
    if(contrast>=200){
        contrast=200
    }
})

resetcolor.addEventListener('click', ()=>{
    let image = document.querySelector('.image');
    contrast = 100
    sat=100
    image.style.filter=`contrast(${contrast}%)`
    image.style.filter=`saturate(${sat}%)`

})

satDec.addEventListener('click', ()=>{
    let image = document.querySelector('.image');
    sat-=10
    image.style.filter=`saturate(${sat}%)`
    if(sat<=0){
        sat=0
    }
})
satInc.addEventListener('click', ()=>{
    let image = document.querySelector('.image');
    sat+=10
    if(sat>=500){
        sat=500
    }
    image.style.filter=`saturate(${sat}%)`

})

// filter brightness

let brightnessInc = document.querySelector('.brightnessInc')
let brightnessDec = document.querySelector('.brightnessDec')
let resetBrightness = document.querySelector('.resetBrightess')

let brightness = 100
brightnessInc.addEventListener('click', ()=>{
    let image = document.querySelector('.image');
    brightness+=10
    if(brightness>=500){
        brightness=500
    }
    image.style.filter=`brightness(${brightness}%)`
})

resetBrightness.addEventListener('click', ()=>{
    let image = document.querySelector('.image');
    brightness=100
    image.style.filter=`brightness(${brightness}%)`
})

brightnessDec.addEventListener('click', ()=>{
    let image = document.querySelector('.image');
    brightness-=10
    if(brightness<=0){
        brightness=0
    }
    image.style.filter=`brightness(${brightness}%)`
})


// filter sepia

let sepiaInc = document.querySelector('.sepiaInc');
let sepiaDec = document.querySelector('.sepiaDec');
let resetSepia = document.querySelector('.resetSepia');
let sepia = 0
sepiaInc.addEventListener('click', ()=>{
    let image = document.querySelector('.image');
    sepia+=20
    if(sepia >=100){
        sepia = 100
    }
    image.style.filter = `sepia(${sepia}%)`
})

sepiaDec.addEventListener('click', ()=>{
    let image = document.querySelector('.image');
    sepia-=20
    if(sepia <=0){
        sepia = 0
    }
    image.style.filter = `sepia(${sepia}%)`
})

resetSepia.addEventListener('click', ()=>{
    let image = document.querySelector('.image');
    sepia=0
    image.style.filter = `sepia(${sepia}%)`
})