import { Component } from 'react'
interface FullName {
    fullName: string;
}

export default class Exercise1 extends Component<{}, FullName> {
    constructor(props: FullName) {
        super(props)
        this.state = {
            fullName: "Nguyễn Huy Hoàng"
        }
    }
    render() {
        return (
            <h2>Họ và tên: {this.state.fullName}</h2>
        )
    }
}

