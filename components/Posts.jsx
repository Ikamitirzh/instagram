import Post from "./Post"

const posts =[{
    id:"123",
    username:"puzzle",
    userImg:"https://cdn.asriran.com/files/fa/news/1402/5/28/1622537_423.jpg",
    img:"https://i.natgeofe.com/n/506bcd08-37e0-4506-b4cc-328b028cdd8c/NationalGeographic_2683370_3x4.jpg",
    caption: "this is caption for the post"
},{
    id:"124",
    username:"puzzleLearn",
    userImg:"https://cdn.asriran.com/files/fa/news/1402/5/28/1622537_423.jpg",
    img:"https://i.natgeofe.com/n/c9107b46-78b1-4394-988d-53927646c72b/1095_4x3.jpg",
    caption: "this is caption for the post - second post"
}

]


function Posts() {
  return (
    <div>
        {posts.map((post) => (
        <Post key={post.id} id={post.id} username={post.username}
        userImg={post.userImg} img={post.img} caption={post.caption}/>
        ))}
    </div>
  )
}

export default Posts