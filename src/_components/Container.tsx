type Props = {
  children: React.ReactNode;
};
export default function Container({ children }: Props) {
  return (
    <div className='container mx-auto max-w-screen-lg px-4 py-6 2xl:px-0'>{children}</div>
  );
}
