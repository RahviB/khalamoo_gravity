export interface CartItem {
    productId: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    slug: string;
}

export interface Cart {
    items: CartItem[];
    total: number;
    itemCount: number;
}
