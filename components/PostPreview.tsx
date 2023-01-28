import { Post } from "../utils/posts.ts";

export function PostPreview(props: { post: Post }) {
  const { post } = props;
  return (
    <li class="border-t">
      <a
        href={`/blog/${post.slug}`}
        class="py-12 pl-20 group grid sm:grid-cols-3"
      >
        <time class="">
          {new Date(post.publishedAt).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <div class="pl-5 sm:col-span-2">
          <h2 class="text-2xl font-bold group-hover:underline">{post.title}</h2>
        </div>
      </a>
    </li>
  );
}
