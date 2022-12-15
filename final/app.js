let links  = document.querySelectorAll("nav a");
console.log(links);
let sun = document.querySelector("nav .fa-sun");
console.log(sun);
let header = document.querySelector("header");



links.forEach(element => {
    element.onclick = _ => {
        // حذف كلاس active عن كل الروابط
        links.forEach(element => {
            console.log(element);
            element.classList.remove("active")
        });
        // اضافة كلاس active  للعنصر الذي تم الضغط عليه
        element.classList.add("active");
    }
});

sun.onclick = _ =>{
    header.classList.add=("lighttheme");


}
