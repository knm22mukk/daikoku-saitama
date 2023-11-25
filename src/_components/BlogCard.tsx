import Image from 'next/image';
import Link from 'next/link';

import Container from '@/_components/Container';
import ConvertDate from '@/_components/ConvertDate';
import { Blog } from '@/_libs/microcms';

type Props = {
  blogs: Blog[];
};

export default function BlogCard({ blogs }: Props) {
  if (!blogs || blogs.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <Container>
      <div className='grid place-content-center place-items-center justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className='max-w-sm rounded-md border border-gray-200 shadow-md duration-200 hover:scale-105'
          >
            <Link href={`/blogs/${blog.id}`}>
              <Image
                src={blog.eyecatch.url}
                alt={blog.title}
                width={384}
                height={216}
                className='rounded-t-md hover:opacity-90'
              />
            </Link>
            <div className='flex flex-1 flex-col p-4 sm:p-6'>
              <h2 className='mb-2 text-lg font-semibold'>
                <Link
                  href={`/blogs/${blog.id}`}
                  className='transition duration-100 hover:text-indigo-500 hover:underline active:text-indigo-600'
                >
                  {blog.title}
                </Link>
              </h2>

              <p className='mb-8 text-gray-500'>{blog.description}</p>

              <div className='flex items-center gap-2'>
                <span className='text-md block text-gray-400'>
                  <ConvertDate convertDate={blog.publishedAt} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
