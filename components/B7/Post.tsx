interface Post {
    id: number,
    title: string,
    content: string,
    author: string,
}

interface ListPost {
    post: Post,
}

export default function Post(prop: ListPost) {
    const { post } = prop

    return (
        <div>
            <h3>Thông tin về tác phẩm</h3>
            <p>Id: {post.id}</p>
            <p>Title: {post.title}</p>
            <p>Content: {post.content}</p>
            <p>Author: {post.author}</p>
        </div>
    )
}
