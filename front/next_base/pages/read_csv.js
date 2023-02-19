// This is sample of generating table from CSV file.
function ReadCSV({ posts }) {
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

export default ReadCSV;
