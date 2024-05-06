interface User {
    id: number,
    name: string,
    address: string,
    email: string,
}

interface UserInfo {
    user: User
}
export default function Children(prop: UserInfo) {
    const { user } = prop
    return (
        <div>
            <h3>Thông tin cá nhân</h3>
            <p>Id: {user.id}</p>
            <p>Tên: {user.name}</p>
            <p>Địa chỉ: {user.address}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}
