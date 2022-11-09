const btnHumburger = document.querySelector('.menu');
const menuContent = document.querySelector('.menu_content');
btnHumburger.addEventListener('click', function(){
    console.log('clicked menu ');
    if(btnHumburger.classList.contains('open')){
        btnHumburger.classList.remove('open');
        menuContent.classList.remove('openMenu');
    }else{
        btnHumburger.classList.add('open');
        menuContent.classList.add('openMenu');
    }
});

const lists = document.querySelectorAll('ul');
lists.forEach((list)=>{
list.querySelector('p').addEventListener('click' ,function(){
        arrowImg = list.querySelector('img');
    if(list.classList.contains('openList')){
        list.classList.remove('openList');
        console.log(arrowImg);
        arrowImg.setAttribute('src', 'images/icon-arrow-down.svg')
    }else{
        list.classList.add('openList');
        arrowImg.setAttribute('src', 'images/icon-arrow-up.svg')
        console.log(arrowImg);
    }
    
});
});