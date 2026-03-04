const loadMe = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => console.log(data));
}


const loadPost =() =>{
    const url ='https://jsonplaceholder.typicode.com/users/1/posts';
    fetch(url)
    .then(res => res.json())
    .then(json => {
        console.log(json);
        displayPost(json);
    });
}

const displayPost =(posts)=>{
   posts.forEach((post)=>{
    console.log(post);
   })
}