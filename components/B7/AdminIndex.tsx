import { Component } from 'react'
import Header from './Header'
import Menu from './Menu'
import Main from './Main'
import Footer from './Footer'

export default class AdminIndex extends Component {
    render() {
        return (
            <div style={{ width: "1280px" }}>
                <Header></Header>
                <div style={{ display: "flex", gap: 20 }}>
                    <Menu></Menu>
                    <div style={{ width: "90%", padding: "25px" }}>
                        <Main></Main>
                        <Footer></Footer>
                    </div>
                </div>
            </div>
        )
    }
}
