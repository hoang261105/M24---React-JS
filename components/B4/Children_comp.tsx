
interface Name {
    name: string,
}

export default function Children_comp(prop: Name) {
    const { name } = prop
    return (
        <div>
            <h3>Họ và tên bên component con: {name}</h3>
        </div>
    )
}
