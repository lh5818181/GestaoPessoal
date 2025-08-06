import { useQuery } from '@tanstack/react-query';
import { getTransactions, type Transaction } from './financeAPI';

export const useFinance = () => {
  return useQuery<Transaction[], unknown>({
    queryKey: ['transactions'],
    queryFn: getTransactions,
    staleTime: 1000 * 60 * 2, // 2 min
  });
};