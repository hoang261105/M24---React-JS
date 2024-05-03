import { Component } from 'react'

// Bài 3
interface User {
    fullName: string;
    gender: string;
    birthday: string;
    email: string;
    address: string;
}

export default class UserInfo extends Component<{}, User> {
    constructor(props: {}) {
        super(props);
        this.state = {
            fullName: "Nguyễn Văn A",
            gender: "Nam",
            birthday: "26/03/2004",
            email: "nva@gmail.com",
            address: "Thanh Xuân, Hà Nội",
        }
    }
    render() {
        return (
            <ul>
                <li>Họ và tên: <b>{this.state.fullName}</b></li>
                <li>Giới tính: <b>{this.state.gender}</b></li>
                <li>Ngày sinh: <b>{this.state.birthday}</b></li>
                <li>Email: <b>{this.state.email}</b></li>
                <li>Địa chỉ: <b>{this.state.address}</b></li>
            </ul>
        )
    }
}
