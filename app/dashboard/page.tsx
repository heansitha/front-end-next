import Link from "next/link";
import PostCard from "../../components/PostCard";
import { PostResponse } from "../../lib/posts";

export default async function DashboardPage() {
  const BASE_URL = "https://jsonplaceholder.typicode.com/";
  const data = await fetch(`${BASE_URL}posts`);
  const posts: PostResponse[] = await data.json();


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {posts.map((post) => (
        <Link key={post.id} href={`/dashboard/blog/${post.id}`}>
          <PostCard
            userId={post.userId}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        </Link>
      ))}
    </div>
  );
}