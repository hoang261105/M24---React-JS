import { Component } from 'react'

// Bài 6
const user = {
    firstname: 'Nguyễn Diệu',
    lastname: 'Linh'
}

const formatName = (user: any) => {
    return user.firstname + " " + user.lastname
}

export default class FormatName extends Component {
    render() {
        return (
            <div>
                <h3>Họ và tên: {formatName(user)}</h3>
            </div>
        )
    }
}
