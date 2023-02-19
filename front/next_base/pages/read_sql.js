// This is sample of generate table
function ReadSQL({ posts }) {
    console.log(posts);
  
    const obj = JSON.parse(posts);
    const obj_keys = Object.keys(obj[0]);
  
    // console.log(obj_keys)
    {
      obj.map((post) => {
        post;
      });
    }
    return (
      <>
        <table>
          <thead>
            {obj_keys.map((obj_key) => (
              <th>{obj_key}</th>
            ))}
          </thead>
          <tbody>
            {obj.map((post) => (
              <tr>
                <td>{post.number}</td>
                <td>{post.sample}</td>
                <td>{post.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
  
  export async function getStaticProps() {
    const res = await fetch("http://127.0.0.1:8000/read_csv");
    const posts = await res.json();
    return {
      props: {
        posts,
      },
    };
  }
  
  export default ReadSQL;
  