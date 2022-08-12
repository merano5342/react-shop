import { Product, Shipping } from './type'

export const productData: Product[] = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]


export const shippingRadioData: Shipping[] = [
  {
    id: 'shipping-standard',
    name: '標準運送',
    period: '約 3~7 個工作天',
    price: 0,
  },
  {
    id: 'shipping-dhl',
    name: 'DHL 貨運',
    period: '48 小時內送達',
    price: 500,
  },
];