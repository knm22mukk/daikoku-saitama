import Link from 'next/link';
import { AiOutlineRight } from 'react-icons/ai';

type Props = {
  lists: {
    name: string;
    path?: string;
  }[];
};

export default function Breadcrumb({ lists }: Props) {
  return (
    <nav aria-label='breadcrumb' className='flex bg-gray-100 p-3 dark:bg-gray-700'>
      <ol className='inline-flex max-w-screen-2xl items-center space-x-1 md:space-x-2'>
        <li className='inline-flex items-center'>
          <Link
            href='/'
            className='text-md inline-flex items-center font-medium hover:underline'
          >
            ホーム
          </Link>
        </li>
        {lists.map(({ name, path = '/' }, index) => (
          <li key={index} className='inline-flex items-center'>
            <AiOutlineRight aria-hidden='true' className='mx-1 h-3 w-3 text-gray-400' />
            {lists.length - 1 !== index ? (
              <Link
                href={path}
                className='text-md inline-flex items-center font-medium hover:underline'
              >
                {name}
              </Link>
            ) : (
              <span aria-current='page' className='text-md ms-1 font-medium md:ms-2'>
                {name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
