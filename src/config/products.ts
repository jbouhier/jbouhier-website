export interface Product {
  title: string;
  description: string;
  image: string;
  url: string;
}

export const products: Product[] = [
  {
    title: 'StripeBoost',
    description: 'Streamline Stripe operations',
    image: 'stripeboost.ico',
    url: 'https://stripeboost.com/',
  },
];
