let btn = document.querySelector('button')
let loader = document.querySelector('#insideload')
let percent = document.querySelector('p')
let warn = document.querySelector('h3')

let flag = 0
let grow = 0

btn.addEventListener('click', function(){
    if(flag == 0){
        flag = 1
        warn.innerHTML = ''
        grow = 0
        let int = setInterval(function(){
            grow++
            percent.innerHTML = grow +"%"
            loader.style.width = grow +"%"
            btn.innerHTML = 'Downloading..'
        },50)
    
        setTimeout(() => {
            clearInterval(int)
            btn.innerHTML = 'Downloaded'
            btn.style.opacity = '0.5'
            flag = 2
        },5000)
        
    }
    else if(flag == 1){
        let repeat = setInterval(() => {
            warn.innerHTML = 'Download in progress...'
        })
        setTimeout(() => {
            clearInterval(repeat)
            warn.innerHTML = ''
        },1000)
    }
    else{
        warn.innerHTML = 'File already downloaded!'
    }
})
