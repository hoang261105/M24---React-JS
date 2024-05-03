import { Component } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Menu from './Menu'
import Main from './Main'
import Cart from './Cart'

export default class UserLayout extends Component {
    render() {
        return (
            <div style={{ width: "100%" }}>
                <Header></Header>
                <Navbar></Navbar>
                <div style={{ display: "flex", justifyContent: "space-between", background: "#fefaec" }}>
                    <Menu></Menu>
                    <Cart></Cart>
                    <Main></Main>
                </div>
            </div>
        )
    }
}
