let heightInc = document.querySelector('.heightInc');
let heightDec = document.querySelector('.heightDec');
let reset = document.querySelector('.reset');
let widthInc = document.querySelector('.widthInc');
let widthDec = document.querySelector('.widthDec');
let countH = 400;
let countW = 600;
heightInc.addEventListener('click',()=>{
    let image = document.querySelector('.image');
    countH+=10
    image.style.height = `${countH}px`
})
heightDec.addEventListener('click',()=>{
    let image = document.querySelector('.image');
    countH-=10
    image.style.height = `${countH}px`
})
reset.addEventListener('click',()=>{
    let image = document.querySelector('.image');
    countH=400
    countW=600
    image.style.height = `${countH}px`
    image.style.width = `${countW}px`
})

widthDec.addEventListener('click',()=>{
    let image = document.querySelector('.image');
    countW-=10
    image.style.width = `${countW}px`
})

widthInc.addEventListener('click',()=>{
    let image = document.querySelector('.image');
    countW+=10
    image.style.width = `${countW}px`
})