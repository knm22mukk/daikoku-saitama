type Props = {
  type: 'button' | 'submit';
  icon?: React.ReactNode;
  name: string;
};

export function PrimaryButton({ type, name }: Props) {
  return (
    <button
      type={type}
      className='text-md mb-2 mr-2 rounded-lg bg-blue-500 px-5 py-2.5 font-medium text-white hover:bg-blue-700'
    >
      {name}
    </button>
  );
}

export function OutlineButton({ type, name }: Props) {
  return (
    <button
      type={type}
      className='text-md mb-2 mr-2 rounded-lg border border-blue-700 px-5 py-2.5 text-center font-medium text-blue-700 hover:bg-blue-700 hover:text-white dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white'
    >
      {name}
    </button>
  );
}

export function IconButton({ type, icon, name }: Props) {
  return (
    <button
      type={type}
      className='text-md mr-2 inline-flex items-center rounded-lg bg-blue-500 px-5 py-2.5 text-center font-medium text-white hover:bg-blue-700 dark:bg-blue-500'
    >
      <span className='mr-2 h-4 w-4'>{icon}</span>
      {name}
    </button>
  );
}
