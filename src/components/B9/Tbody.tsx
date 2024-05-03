import { Component } from 'react'

const user = [
    {
        name: "Malcolm Lockyer",
        birthday: "21/03/1961",
        gender: "Nam",
        address: "New York",
    },

    {
        name: "Maria",
        birthday: "11/2/1990",
        gender: "Nữ",
        address: "London",
    }
]

export default class Tbody extends Component {

    render() {
        const listUser: any = user.map((person, index) => (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{person.name}</td>
                <td>{person.birthday}</td>
                <td>{person.gender}</td>
                <td>{person.address}</td>
                <td>
                    <button className="btn btn-info mr-2">Sửa</button>
                    <button className="btn btn-danger" style={{ background: 'red' }}>Xóa</button>
                </td>
            </tr>
        ))
        return (
            <tbody>
                {listUser}
            </tbody>
        )
    }
}
