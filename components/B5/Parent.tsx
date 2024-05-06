import Children from './Children'

export default function Parent() {
    const product = {
        id: 1,
        name: "Rau",
        price: 20000,
        quantity: 4,
    }

    return (
        <div>
            <Children product={product} />
        </div>
    )
}
