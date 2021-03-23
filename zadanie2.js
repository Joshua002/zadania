function dodajAktywne(elem) {
    var li = document.getElementsByTagName('li')
    for (i = 0; i < li.length; i++) {
        li[i].classList.remove('nav-el-active')
    }
    elem.classList.add('nav-el-active');
}

for (i = 0; i < this.length; i++){

    this.addEventListener("click", dodajAktywne(this));
}
