interface Product {
    id: number,
    name: string,
    price: number,
    quantity: number,
}

interface Info {
    product: Product,
}

export default function Children(prop: Info) {
    const { product } = prop
    return (
        <div>
            <h3>Thông tin mua hàng</h3>
            <p>Id: {product.id}</p>
            <p>Tên sản phẩm: {product.name}</p>
            <p>Giá sản phẩm: {product.price}</p>
            <p>Số lượng: {product.quantity}</p>
        </div>
    )
}
