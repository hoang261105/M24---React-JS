import { Component } from 'react'
import Header from './Header'
import ListWork from './ListWork'

export default class TodoListIndex extends Component {
    render() {
        return (
            <div>
                <Header />
                <ListWork />
            </div>
        )
    }
}
