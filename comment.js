const commentList = () => {
    const url = "https://jsonplaceholder.typicode.com/posts/1/comments";
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        displayComment(data);

    })
}


// "name": "id labore ex et quam laborum",
// "email": "Eliseo@gardner.biz",
// "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium"

const displayComment= (comments) =>{

    const commentContainer = document.getElementById("comment-container");
    commentContainer.innerHTML="";

    comments.forEach(comment =>{
       const commentCard = document.createElement("div");
       commentCard.innerHTML=`
        <div class="comment-card">
            <h2>${comment.name}</h2>
            <h4>${comment.email}</h4>
            <p>${comment.body}</p>
        </div>
       
       `
       commentContainer.append(commentCard);
    })
}

commentList();