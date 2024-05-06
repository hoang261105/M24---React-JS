import { useState } from 'react'
import Post from './Post'

export default function ListPost() {
    const [listPost] = useState([
        { id: 1, title: "Lão Hạc", content: "123", author: "Nam Cao" },
        { id: 2, title: "Vợ nhặt", content: "456", author: "Kim Lân" }
    ])
    return (
        <div>
            {listPost.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    )
}
