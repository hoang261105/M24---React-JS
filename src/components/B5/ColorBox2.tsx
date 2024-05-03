import { Component } from 'react'

// Bài 5
export default class ColorBox2 extends Component {
    render() {
        return (
            <div style={{ display: "flex", gap: 40, lineHeight: "200px", textAlign: "center", padding: "10px", color: "white" }}>
                <div style={{ width: 200, height: 200, background: "red" }}>Box 1</div>
                <div style={{ width: 200, height: 200, background: "blue" }}>Box 2</div>
                <div style={{ width: 200, height: 200, background: "green" }}>Box 3</div>
            </div>

        )
    }
}
