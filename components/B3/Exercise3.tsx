import { Component } from 'react'
type User = {
    id: number,
    name: string,
    address: string,
}

type PropType = {
    user: User[]
}

export default class Exercise3 extends Component<{}, PropType> {
    constructor(props: PropType) {
        super(props);
        this.state = {
            user: [
                {
                    id: 1,
                    name: "John",
                    address: "Hà Nội"
                },
                {
                    id: 2,
                    name: "John",
                    address: "Hà Nội"
                }
            ]
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.user.map((u: User) => (
                        <ul key={u.id}>
                            <li>Id: {u.id}</li>
                            <li>UserName: {u.name}</li>
                            <li>Adress: {u.address}</li>
                        </ul>
                    ))
                }
            </div>
        )
    }
}

