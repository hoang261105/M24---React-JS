import { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <tr>
                <td>STT</td>
                <td>Họ và tên</td>
                <td>Ngày sinh</td>
                <td>Giới tính</td>
                <td>Địa chỉ</td>
                <td>Chức năng</td>
            </tr>
        )
    }
}
