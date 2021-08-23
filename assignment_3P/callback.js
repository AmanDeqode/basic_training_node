

const posts = [
    {title:"Posts 1", body:"This is my first post"},
    {title:"Post 2", body:"This is my second post"}
];

const getPosts = () =>{
    setTimeout(()=>{
        posts.forEach((post) => console.log(post.title, " ", post.body));
    },1000)
};


const createPosts = (post,callback) =>{
    setTimeout(()=>{
        posts.push(post);
        console.log('post has been inserted successfully');
        callback();
    },2000)
}

createPosts({title: "Post 3", body:"This is 3rd post"}, getPosts);

//getPosts();