import Link from "next/link";
import { getAllNodes } from "next-mdx/server";

function ArticlePage({ posts }) {
  return (
    <div className="full-container mt-5">
      <div>
        <h1 className="font-bold text-2xl md:text-3xl tracking-tight mb-1 text-black dark:text-white">
          Blog
        </h1>
      </div>
      <div className="space-y-4 leading-relaxed">
        <div className="mt-7">
          {posts.map((post) => {
            return (
              <article key={post.url}>
                <h2 className="text-lg font-bold">
                  <Link href={post.url}>
                    <a>{post.frontMatter.title}</a>
                  </Link>
                </h2>
                <p className="mt-3 text-md leading-7 space-y-2 text-gray-600 dark:text-gray-400 whitespace-normal">
                  {post.frontMatter.excerpt}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllNodes("post"),
    },
  };
}

export default ArticlePage;
