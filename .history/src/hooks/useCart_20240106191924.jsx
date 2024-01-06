import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { addOrUpdateToCart, getCart, removeFromCart } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';

export default function useCart() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();

  const cartQuery = useQuery({
    queryKey: ['carts', uid || ''],
    queryFn: () => getCart(uid),
    enabled: !!uid,
  });

  const addOrUpdateItem = useMutation({
    mutationFn: (product) => addOrUpdateToCart(uid, product),
    onSuccess: (data) => {
      queryClient.invalidateQueries(['carts', uid]);
    },
    // 다른 옵션들을 필요한 경우 여기에 추가
  });

  const removeItem = useMutation({
    mutationFn: (id) => removeFromCart(uid, id),
    onSuccess: (data) => {
      queryClient.invalidateQueries(['carts', uid]);
    },
    // 다른 옵션들을 필요한 경우 여기에 추가
  });

  return { cartQuery, addOrUpdateItem, removeItem };
}
