import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { getProducts } from '../api/firebase';
import Button from '../components/ui/Button';
import { uploadImage } from '../api/uploader';

export default function useProducts() {
  const queryClient = useQueryClient();

  const getProducts = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    staleTime: 1000 * 60,
  });

  const { name, value, files } = e.target;
  if (name === 'file') {
    setFile(files && files[0]);
    return;
  }
  setProduct((product) => ({ ...product, [name]: value }));
};
}
