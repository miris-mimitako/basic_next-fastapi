function ReadCSV({posts}) {
    console.log(posts)
    
    const obj = JSON.parse(posts)
    {obj.map((post)=>console.log(post))}
    return (
        <>
        <table>
            <thead>
                <tr>
                    {obj.map((post)=><th>post</th>)}
                </tr>
            </thead>
        </table>
        <ul>
            {obj.map((post)=><li>{post.value}</li>)}
        </ul>
        </>
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