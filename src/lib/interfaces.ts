interface ProductI {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface FinProductI extends ProductI {
  hasPrime: boolean;
  quantity: number;
  totalPrice: number;
}

export type { ProductI, FinProductI };
