let dropItems = document.querySelectorAll('.d-item');
let blurBtns = document.querySelector('.blur');
let colorBtns = document.querySelector('.color');
let brightnessBtns = document.querySelector('.brightness');
let sepiaBtns = document.querySelector('.sepia');
let heading = document.querySelector('.heading');

dropItems.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        if(e.target.innerHTML==='Blur'){
            colorBtns.classList.add('d-none')
            blurBtns.classList.remove('d-none')
            brightnessBtns.classList.add('d-none')
            sepiaBtns.classList.add('d-none')
            heading.innerHTML = 'Filter(BLUR)'
        }
        if(e.target.innerHTML==='Color'){
            colorBtns.classList.remove('d-none')
            blurBtns.classList.add('d-none')
            brightnessBtns.classList.add('d-none')
            sepiaBtns.classList.add('d-none')
            heading.innerHTML = 'Filter(COLOR)'
        }
        if(e.target.innerHTML==='Brightness'){
            colorBtns.classList.add('d-none')
            blurBtns.classList.add('d-none')
            brightnessBtns.classList.remove('d-none')
            sepiaBtns.classList.add('d-none')
            heading.innerHTML = 'Filter(BRIGHTNESS)'
        }
        if(e.target.innerHTML==='Sepia'){
            colorBtns.classList.add('d-none')
            blurBtns.classList.add('d-none')
            brightnessBtns.classList.add('d-none')
            sepiaBtns.classList.remove('d-none')
            heading.innerHTML = 'Filter(Sepia)'
        }
    })
})