import { faker } from '@faker-js/faker'

interface Product {
    id: number;
    name: string;
    price: string;
    description: string;
    image: string;
    category: string;
    material: string;
    rating: number;
    reviewCount: number;
}

const products: Product[] = []


for (let i = 0; i < 1000; i++) {
    products.push({
        id: i,
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        description: faker.commerce.productDescription(),
        image: faker.image.image(),
        category: faker.commerce.department(),
        material: faker.commerce.productMaterial(),
        rating: Math.floor(Math.random() * 5) + 1,
        reviewCount: Math.floor(Math.random() * 100) + 1
    })
}

export const getAllProducts = (limit = 20, offset = 0): Product[] => {
    return products.slice(offset, offset + limit);
}

export default products



