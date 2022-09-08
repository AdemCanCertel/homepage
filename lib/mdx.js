import { join } from 'path';
import { readFileSync } from 'fs';
import { bundleMDX } from 'mdx-bundler';
import readingTime from 'reading-time';
import rehypeCodeTitles from ('rehype-code-titles')
import rehypePrism from ('@mapbox/rehype-prism')

import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';

export async function getFileBySlug(type, slug) {
  const source = readFileSync(join(process.cwd(), 'data', type, `${slug}.mdx`), 'utf8');
  const { code, frontmatter } = await bundleMDX(source, {
    xdmOptions(options) {
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['anchor']
            }
          }
        ]
      ];
      return options;
    }
  });

  return {
    code,
    frontMatter: {
      wordCount: source.split(/\s+/gu).length,
      readingTime: readingTime(source),
      slug: slug || null,
      ...frontmatter
    }
  };
}
