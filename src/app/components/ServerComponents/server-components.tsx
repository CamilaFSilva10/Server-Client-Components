import PostRenderTimer from "../PostRenderTimer/post-render-timer";

export default async function PostsServer() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const post = await res.json();

    return (
        <div className="content-div">
            <div className="title-div mb-4">
                <span className="text-lg font-semibold">Posts (Server Component)</span>
            </div>

            <div className="p-[2%]">
                <div className="relative rounded-xl p-4 shadow-md my-2 w-[100%]">
                    <strong id="post-title" className="block mb-2">
                        {post.title}
                    </strong>
                    <p className="mb-6">{post.body}</p>

                    <PostRenderTimer />
                </div>
            </div>
        </div>
    );
}
