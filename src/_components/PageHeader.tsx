import Container from '@/_components/Container';

type Props = {
  subHeading: string;
  title: string;
  description: string;
};

export default function PageHeader({ subHeading, title, description }: Props) {
  return (
    <Container>
      <p className='mb-2 text-center font-semibold uppercase text-blue-500 md:mb-3 lg:text-lg'>
        {subHeading}
      </p>
      <h2 className='mb-4 text-center text-3xl font-extrabold md:mb-6 lg:text-4xl'>
        {title}
      </h2>
      <p className='mx-auto max-w-screen-md text-center text-gray-500 dark:text-white md:text-lg'>
        {description}
      </p>
    </Container>
  );
}
