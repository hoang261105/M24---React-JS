import { Component } from 'react'
import Header from './Header'
import Tbody from './Tbody'

export default class ListUser extends Component {
    render() {
        return (
            <table style={{ width: "100%" }}>
                <Header />
                <Tbody />
            </table>
        )
    }
}
