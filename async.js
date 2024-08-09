
fetch(" ")
  .then((response) => {
    
    return response.json();
  })
  .then((data) => {
   
  })
 

//Normal Function

async function getPosts ()
{
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
   
    const data = await response.json();
    console.log("Fetched posts:", data);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}
getPosts();


// Arrow function
const getPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
   
    const data = await response.json();
    console.log("Fetched posts:", data);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};
getPosts();

