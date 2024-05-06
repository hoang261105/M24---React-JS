import Children from './Children_comp'

const fullName: string = "Nguyễn Văn Nam"

export default function Parent_comp() {
    return (
        <div>
            <h3>Họ và tên bên component cha: {fullName}</h3>
            <Children name={fullName} />
        </div>
    )
}
