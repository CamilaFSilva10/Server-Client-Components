export default async function PostsServer() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const posts = await res.json();

    return (
        <div className="content-div">
            <div className="title-div">
                <span>Posts (Server Component)</span>
            </div>

            <div className="p-[2%]">
                <ul>
                    <li key={posts.id}>
                        <strong>{posts.title}</strong>
                        <p>{posts.body}</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
