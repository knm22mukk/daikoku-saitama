import Link from 'next/link';

import { Blog } from '@/_libs/microcms';

type Props = {
  blogs: Blog[];
};

export default function Card({ blogs }: Props) {
  return (
    <ul>
      {blogs.map((blog) => (
        <li key={blog.id}>
          <Link href={`/blogs/${blog.id}`}>
            <p>{blog.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
