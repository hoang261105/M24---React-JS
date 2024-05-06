interface Product {
    id: number,
    name: string,
    price: number,
    quantity: number,
}

interface ListProduct {
    product: Product,
}

export default function Product(prop: ListProduct) {
    const { product } = prop

    return (
        <div>
            <h3>Thông tin về tác phẩm</h3>
            <p>Id: {product.id}</p>
            <p>Title: {product.name}</p>
            <p>Content: {product.price}</p>
            <p>Author: {product.quantity}</p>
        </div>
    )
}
