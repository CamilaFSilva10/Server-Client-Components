import PostsClient from "@/app/components/ClientComponents/client-components";
import PostsServer from "@/app/components/ServerComponents/server-components";

export default function Home() {
  return (
    <>
      <div className="w-[100%] flex p-[2%]">
        <PostsServer />
        <PostsClient />
      </div>
    </>
  );
}
