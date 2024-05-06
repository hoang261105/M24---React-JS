import Children from "./Children"

const user = {
    id: 1,
    name: "Hoàng",
    address: "Hà Nội",
    email: "hoang@gmail.com",
}

export default function Parent() {
    return (
        <div>
            <Children user={user} />
        </div>
    )
}
