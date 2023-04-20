

//Times delay
const time = document.querySelector('.time-delay');
const hour = document.querySelector('.time-delay .hour');//Get hour 
const minute = document.querySelector('.time-delay .minute');//Get minute
const second = document.querySelector('.time-delay .second');//Get second

let timedelay = time.dataset.time;
let temphour = Math.floor(timedelay / 3600);
let tempMinute = Math.floor((timedelay % 3600) / 60);
let tempSecond = Math.floor(((timedelay % 3600) % 60));

let dateSale = setInterval(()=>{
    tempSecond = tempSecond - 1;
    if(tempSecond < 0){
        tempMinute = tempMinute - 1;
        tempSecond = 59;
    }
    if(tempMinute < 0){
        temphour = temphour - 1;
        tempMinute = 59;
    }
    hour.textContent = temphour;
    minute.textContent = tempMinute;
    second.textContent = tempSecond;
    console.log(tempSecond + 'dasdas');
},1000)


let navtabs = document.querySelectorAll('.information .sliderTab');
    navtabs.forEach(item => {
        item.addEventListener('click', function(event){
            if(event.target.classList.contains('nav-item')){
               
                let lastActive = item.querySelector('li.active');
                let newActive = event.target;
                let bgActive = item.querySelector('.bg-active');
    
                lastActive.classList.remove('active');
                newActive.classList.add('active');
                bgActive.style.left = newActive.offsetLeft + 'px';
    
                let lastContentActive = item.querySelector('.tab.active');
                let newContentActive = document.getElementById(newActive.dataset.target);
                lastContentActive.classList.remove('active');
                newContentActive.classList.add('active');
    
            }
        })
    })

//Show hide filter on Product page
const btnFilter = document.querySelector('.btn-filter');
const ctnFilter = document.querySelector('.filter-content');
let temp;
if(ctnFilter){
    temp = ctnFilter.innerHTML;
    ctnFilter.innerHTML = '';
}

if(btnFilter){
    btnFilter.addEventListener('click', function(e){
        ctnFilter.classList.toggle('active');
        ctnFilter.classList.toggle('box');
        if(ctnFilter.classList.contains('active')){
            ctnFilter.innerHTML = temp;
        }
        else{
            ctnFilter.innerHTML = '';
        }
    })
}