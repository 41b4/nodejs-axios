const seePosts=(index)=>{
    const posts=document.getElementsByClassName('posts')
    console.log(index)
    console.log(posts[index-1])
    let element = posts[index-1]
    element.classList.toggle('show')
}