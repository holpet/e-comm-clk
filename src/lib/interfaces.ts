interface IProduct {
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

interface IFinProduct extends IProduct {
  hasPrime: boolean;
  quantity: number;
  totalPrice: number;
}

export type { IProduct, IFinProduct };
