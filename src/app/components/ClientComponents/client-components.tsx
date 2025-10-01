"use client";

import { useEffect, useState } from "react";
import PostRenderTimer from "../PostRenderTimer/post-render-timer";

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
            .then((d) => setPosts(d))
    }, []);

    return (
        <div className="content-div">
            <div className="title-div mb-4">
                <span className="text-lg font-semibold">Posts (Client Component)</span>
            </div>

            <div className="p-[2%]">
                <div className="relative rounded-xl p-4 shadow-md my-2 w-[100%]">
                    <strong id="post-title" className="block mb-2">
                        {posts?.title}
                    </strong>
                    <p className="mb-6">{posts?.body}</p>

                    <PostRenderTimer />
                </div>
            </div>
        </div>
    );
}
