import React from "react"
import { getMdxNode, getMdxPaths } from "next-mdx/server";
import { useHydrate } from "next-mdx/client";

import { mdxComponents } from "../../components/mdx-components";

const PostPage = ({ post }) => {
  const content = useHydrate(post, {
    components: mdxComponents,
  });

  return (
    <div className="max-w-2xl mx-auto px-6 py-5">
      <div className="relative">
        <h1 className="text-4xl dark:text-white text-black font-bold tracking-tight md:text-4xl">
          {post.frontMatter.title}
        </h1>
        <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
          <div className="flex items-center mt-5 select-none">
            <img
              sizes="24vw"
              className="rounded-full w-10 h-10"
              src="https://pbs.twimg.com/profile_images/1559300390977507330/Bq5EzTJv_400x400.jpg"
            />
            <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
              Adem Can Certel /
            </p>
            <div className="text-sm text-gray-700 dark:text-gray-300 flex justify-between space-x-1 px-1 pl-1">
              {post.frontMatter.date}
            </div>
          </div>
        </div>
      </div>
      <article className="pt-5 prose-slate">
        <div className="prose dark:prose-invert prose-p:font-jakarta mt-1">
          {content}
        </div>
      </article>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: await getMdxPaths("post"),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const post = await getMdxNode("post", context);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}

export default PostPage;
