import dayjs from 'dayjs';

export const getParamListForThisMonthNoticesCounts = () => {
  const startOfMonth = dayjs().startOf('month');
  const endOfMonth = dayjs().endOf('month');
  return [
    {
      type: 'sh',
      fromStartDate: dayjs().format('YYYY-MM-DD'),
      toStartDate: endOfMonth.format('YYYY-MM-DD'),
    },
    {
      type: 'lh',
      fromStartDate: dayjs().format('YYYY-MM-DD'),
      toStartDate: endOfMonth.format('YYYY-MM-DD'),
    },
    {
      type: 'sh',
      fromStartDate: startOfMonth.format('YYYY-MM-DD'),
      toStartDate: dayjs().subtract(1, 'day').format('YYYY-MM-DD'),
      isReceiving: true,
    },
    {
      type: 'lh',
      fromStartDate: startOfMonth.format('YYYY-MM-DD'),
      toStartDate: dayjs().subtract(1, 'day').format('YYYY-MM-DD'),
      isReceiving: true,
    },
  ];
};
