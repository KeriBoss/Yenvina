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

let temp = ctnFilter.innerHTML;
ctnFilter.innerHTML = '';

btnFilter.addEventListener('click', function(e){
    ctnFilter.classList.toggle('active');
})