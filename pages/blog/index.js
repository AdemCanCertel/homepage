import Link from 'next/link'
import { getAllNodes } from 'next-mdx/server'

function ArticlePage({ posts }) {

  return (
    <div className="full-container mt-5">
      <div>
        <h1 className='text-xl tracking-tight font-bold text-black dark:text-white md:text-5xl'>
          Blog
        </h1>
      </div>
      <div className="space-y-4 leading-relaxed">
        <h3 className='mt-20 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white'>Tüm gönderiler</h3>
        <div className='mt-5'>
        {posts.map((post) => {
          return (
            <article key={post.url}>
              <h2 className="text-lg font-bold">
                <Link href={post.url}>
                  <a>
                    {post.frontMatter.title}
                  </a>
                </Link>
              </h2>
              <p className='mt-3 text-gray-600 dark:text-gray-400'>
                {post.frontMatter.excerpt}
              </p>
            </article>
          )
        })}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllNodes('post')
    }
  }
}

export default ArticlePage