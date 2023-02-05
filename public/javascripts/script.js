const seePosts=(index)=>{
    const posts=document.getElementsByClassName('posts')
    console.log(index)
    console.log(posts[index-1])
    let element = posts[index-1]
    element.classList.toggle('show')
}
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


console.log(document.cookie)
var element = document.body;
if (document.cookie=='theme=dark'){
    element.classList.add("theme--dark"); 
}else{
     element.classList.remove("theme--dark")
}