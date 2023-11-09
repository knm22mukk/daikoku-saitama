import dayjs from 'dayjs';

type Props = {
  convertDate: string | undefined;
};

export default function ConvertDate({ convertDate }: Props) {
  const publishedAt = dayjs(convertDate).format('YYYY年MM月DD日');
  return <time dateTime={convertDate}>{publishedAt}</time>;
}
