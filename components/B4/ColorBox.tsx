import { Component } from 'react'

// Bài 4
const square: any = {
    width: 200,
    height: 200,
    textAlign: 'center'
}

export default class ColorBox extends Component {
    render() {
        return (
            <div style={{ display: "flex", gap: 40, color: "white", lineHeight: "200px" }}>
                <div style={{ ...square, backgroundColor: "red" }} className='box'>Box</div>
                <div style={{ ...square, backgroundColor: "blue" }} className='box'>Box</div>
                <div style={{ ...square, backgroundColor: "green" }} className='box'>Box</div>
            </div>

        )
    }
}
