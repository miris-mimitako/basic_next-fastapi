function ReadCSV({posts}) {
    console.log(posts)
    return (
        {posts}
    //   <ul>
    //     {posts.map(post => (
    //       <li>{post.}</li>
    //     ))}
    //   </ul>
    );
  }
  
  export async function getStaticProps(){
    const res = await fetch("http://127.0.0.1:8000/read_csv");
    const posts = await res.json();
    return {
      props:{
        posts
      }
    };
  
  }
  
  export default ReadCSV;