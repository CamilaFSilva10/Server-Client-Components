"use client";

import { useEffect, useState } from "react";

type Post = {
    id: number;
    title: string;
    body: string;
};

export default function PostsClient() {
    const [posts, setPosts] = useState<Post>();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then((r) => r.json())
            .then((d) => setPosts(d));
    }, []);

    return (
        <div className="content-div">
            <div className="title-div">
                <span>Posts (Client Component)</span>
            </div>

            <div className="p-[2%]">
                <ul>
                    <li key={posts?.id}>
                        <strong>{posts?.title}</strong>
                        <p>{posts?.body}</p>
                    </li>
                </ul>
            </div>
        </div >
    );
}
