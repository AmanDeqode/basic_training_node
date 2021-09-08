

// const posts = [
//     {title:"Posts 1", body:"This is my first post"},
//     {title:"Post 2", body:"This is my second post"}
// ];

// const getPosts = () =>{
//     setTimeout(()=>{
//         posts.forEach((post) => console.log(post.title, " ", post.body));
//     },1000)
// };


// const createPosts = (post,callback) =>{
//     setTimeout(()=>{
//         posts.push(post);
//         console.log('post has been inserted successfully');
//         callback();
//     },2000)
// }

// createPosts({title: "Post 3", body:"This is 3rd post"}, getPosts);

//getPosts();



// const asynchronousRequest = (args,callback) =>{
//     if(!args)
//     {
//         return callback(new Error('Something happen wrong here '));
//     }
//     else
//     {
//         return setTimeout(()=>{
//             callback(null,{body: args + ' ' + Math.floor(Math.random() * 10)});
//         },500);
//     }
// }

// function resolveHell(){
//     return new Promise((resolve,reject)=>{

//             asynchronousRequest('First',function(error,response){
//                 if(error)
//                 {
//                     reject(new Error('Something happen wrong here '))
//                 }
//                 else
//                 {
//                     resolve(response.body);
//                 }
//             })      
//     })
// }

// resolveHell().then((response)=> {
//     console.log(response);
// }).catch((err)=> console.log(err));






/* function callbackHell(){
    asynchronousRequest('First', function first(error, response) {
        if (error) {
          console.log(error)
          return
        }
        console.log(response.body)
        asynchronousRequest('Second', function second(error, response) {
          if (error) {
            console.log(error)
            return
          }
          console.log(response.body)
          asynchronousRequest(null, function third(error, response) {
            if (error) {
              console.log(error)
              return
            }
            console.log(response.body)
          })
        })
      })
}

callbackHell(); */


const sleep = (ms) =>{

    return new Promise(function (resolve, reject) {
        try {
            setTimeout(()=> {
                resolve('Wait here')
            }, ms)
        } catch (error) {
            reject(new Error('Some thing wrong'))
        }

    })
}

async function waitForEveryOne(){
    try {

        console.log('Process 1');

        await sleep(2000).then((data)=>console.log(data));
    
        console.log('Process 2');
        
    } catch (error) {
        console.log(error);
    }

   
}

waitForEveryOne();