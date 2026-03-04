const loadPost3 = () =>{
    fetch('https://jsonplaceholder.typicode.com/users/1/posts')
    .then(res => res.json())
    .then(json => {
        displayPost3(json);
    })
}


// userId: 1, id: 1, 
// title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//  body: 'quia et suscipit\nsuscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto'

 const displayPost3 = (posts) =>{
    //1.get the container
    const postContainer2 = document.getElementById('post-container-2');
    postContainer2.innerHTML="";
  

    posts.forEach((post)=>{
       //2.create element
       const postCard = document.createElement('div');
       postCard.innerHTML=`
        <div class="post-card">
        <h1>${post.title}</h1>
        <p>${post.body}</p>
    </div>
       `
       postContainer2.append(postCard);
    })
 }