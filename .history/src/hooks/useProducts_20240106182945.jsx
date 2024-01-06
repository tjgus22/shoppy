import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export default function useProducts() {
  const queryClient = useQueryClient();

  const getProducts = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    staleTime: 1000 * 60,
  });
}
