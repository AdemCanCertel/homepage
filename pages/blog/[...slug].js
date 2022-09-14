import { getMdxNode, getMdxPaths } from "next-mdx/server";
import { MDXRemote } from 'next-mdx-remote';
import { useHydrate } from "next-mdx/client";
import Claps from "@upstash/claps";
import { mdxComponents } from "../../components/mdx-components";
import readingTime from "reading-time";

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
           className="rounded-full w-10 h-10" 
           src="https://pbs.twimg.com/profile_images/1559300390977507330/Bq5EzTJv_400x400.jpg"
          />
          <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
              Adem Can Certel /
          </p>
            <div className="flex space-x-1 px-2 pl-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"/></svg> 
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
      <Claps 
       fixed="left"
       replyUrl={post.tweetUrl}
      />
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