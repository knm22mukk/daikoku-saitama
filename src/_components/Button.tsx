type Props = {
  type?: 'button' | 'submit';
  icon?: React.ReactNode;
  name: string;
  onClick?: () => void;
};

export function PrimaryButton({ type, name, onClick }: Props) {
  return (
    <button
      type={type}
      className='text-md mb-2 mr-2 rounded-lg bg-blue-500 px-5 py-2.5 font-medium text-white hover:bg-blue-700'
      onClick={onClick}
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

export function Badge({ name }: Props) {
  return (
    <span className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600'>
      {name}
    </span>
  );
}
