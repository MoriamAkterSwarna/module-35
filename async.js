
fetch(" ")
  .then((response) => {
    
    return response.json();
  })
  .then((data) => {
   
  })
 

//Normal Function

async function getPosts ()
{
 
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
   
    const data = await response.json();
    console.log("Fetched posts:", data);
 
}
getPosts();


// Arrow function
const getPosts = async () => {
  
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
   
    const data = await response.json();
    console.log("Fetched posts:", data);
  
};
getPosts();

