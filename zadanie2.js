const li = document.getElementsByClassName('nav-el');

function switchActive (evt){

    let liActive = document.querySelectorAll('.nav-el-active');
    for (i = 0; i < liActive.length; i++){
        liActive[i].classList.remove('nav-el-active');
    };

    li.className += "nav-el-active";
    
    evt.preventDefault();
};

    
for (i = 0; i < li.length; i++ ){
    
    li[i].addEventListener('click', switchActive, false);
    
};
