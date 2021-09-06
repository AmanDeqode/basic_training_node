//Using Promise create a function named 'sleep' that should invoke a callback 
//function after x seconds. NOTE: sleep function should not block the call stack.

const posts = [
    {title:"Posts 1", body:"This is my first post"},
    {title:"Post 2", body:"This is my second post"}
];

const sleep = (ms) =>{
    return new Promise(()=>setTimeout(getPosts,ms))
};

const getPosts = () =>{

    posts.forEach((post) => console.log(post.title, " ", post.body));
};


const Posts = () =>{
    console.log('Posts are on the way')
    sleep(2000).then((data)=> console.log(data))
    
}

Posts();
