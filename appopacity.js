// Opacity work 
let increaseBtn = document.querySelector('.increase')
let resetBtn = document.querySelector('.reset')
let decreaseBtn = document.querySelector('.decrease')



let count = 100

increaseBtn.addEventListener('click', ()=>{
    count=count+10
    if(count >= 100){
        count = 100
    }
    let image = document.querySelector('.image');
    image.style.opacity = `${count}%`
    console.log(count)
})

decreaseBtn.addEventListener('click', ()=>{
    count=count-10
    if(count <= 0){
        count =0
    }
    let image = document.querySelector('.image');
    console.log(count)
    image.style.opacity = `${count}%`
})

resetBtn.addEventListener('click', ()=>{
    count = 100
    let image = document.querySelector('.image');
    image.style.opacity = `${count}%`
})


