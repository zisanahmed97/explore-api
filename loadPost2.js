

const loadPost2 = () =>{
    fetch('https://jsonplaceholder.typicode.com/users/1/posts')
    .then(res => res.json())
    .then(json => {
        // console.log(json);
        displayPost2(json);
    });
}


const displayPost2 = (posts) =>{

    //1.get the container
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML="";
    // console.log(postContainer);

  posts.forEach((post)=>{
    // console.log(post.title);

    //2.create html element
    const li = document.createElement('li');
    li.innerText=post.title;
    // console.log(li);

    //append li
    postContainer.appendChild(li);


  })
}




//                                   post body

// const loadPost2 = () => {
//     fetch('https://jsonplaceholder.typicode.com/users/1/posts')
//     .then(res => res.json())
//     .then(data => {
//         // console.log(data);
//         displayPost2(data);
//     })
// }

// const displayPost2 = (posts) =>{

//     const postContainer = document.getElementById('post-container');
//     // console.log(postContainer);

//     posts.forEach((post)=>{

//         // console.log(post.body);

//         const li = document.createElement('li');
//         li.innerText=post.body;

//         postContainer.append(li);
//     })
// }