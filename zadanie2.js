const li = document.querySelectorAll(".nav-el");

for (let el of li) {
    el.addEventListener("click", e => {
        e.preventDefault();

        li.forEach(el => el.classList.remove("nav-el-active"));

        el.classList.add("nav-el-active");
    });
};
