import { Component } from 'react'
interface UserInfo {
    id: number;
    name: string;
    birthday: string;
    address: string;
}

export default class Exercise2 extends Component<{}, UserInfo> {
    constructor(props: UserInfo) {
        super(props)
        this.state = {
            id: 1,
            name: "Nguyễn Văn Sơn",
            birthday: "20/10/1999",
            address: "Hà Nội"
        }
    }
    render() {
        return (
            <div>
                <h2>Thông tin cá nhân</h2>
                <h3>Id: {this.state.id}</h3>
                <h3>Tên: {this.state.name}</h3>
                <h3>Ngày sinh: {this.state.birthday}</h3>
                <h3>Địa chỉ: {this.state.address}</h3>
            </div>
        )
    }
}
