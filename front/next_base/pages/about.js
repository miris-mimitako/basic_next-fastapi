function About({posts}) {
  console.log(posts)
  const test = posts.Hello
  return (
    <ul>
      {test}
      {/* {posts.map(post => (
        <li>{post.Hello}</li>
      ))} */}
    </ul>
  );
}

export async function getStaticProps(){
  const res = await fetch("http://127.0.0.1:8000");
  const posts = await res.json();
  return {
    props:{
      posts
    }
  };

}

export default About;