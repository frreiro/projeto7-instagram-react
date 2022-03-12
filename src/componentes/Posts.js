import Post from "./Post"

const posts = [
    {
        userImg: "assets/img/meowed.svg",
        postImg: "assets/img/gato-telefone.svg",
        likeImg: "assets/img/respondeai.svg",
        likeUser: "respondeai",
        likeValue: "101.523"
    },
    {
        userImg: "assets/img/barked.svg",
        postImg: "assets/img/dog.svg",
        likeImg: "assets/img/adorable_animals.svg",
        likeUser: "adorable_animals",
        likeValue: "99.159"
    },
]



export default function Posts() {
    return (
        <section class="posts">
            {posts.map((post) => {
                return (
                    <Post
                        setUserImg={post.userImg}
                        setImg={post.postImg}
                        setUserLike={post.likeImg}
                        setMainLike={post.likeUser}
                        setLikes={post.likeValue}
                    />
                )
            })}
        </section>
    )
}

