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
          <tr>
            {obj_keys.map((obj_key) => (
              <th key={obj_key}>{obj_key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {obj.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.name}</td>
              <td>{post.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://127.0.0.1:8000/read_sql");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}

export default ReadSQL;
