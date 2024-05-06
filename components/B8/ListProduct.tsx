import { useState } from 'react'
import Product from './Product'

export default function ListProduct() {
    const [listProduct] = useState([
        { id: 1, name: "Quả táo", price: 20300, quantity: 2 },
        { id: 2, name: "Cà chua", price: 15000, quantity: 5 }
    ])
    return (
        <div>
            {listProduct.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    )
}
