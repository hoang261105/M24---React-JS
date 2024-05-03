import { Component } from 'react'

// Bài 2
export default class Calculation extends Component {
    render() {
        const a = 10;
        const b = 10;
        return (
            <ul>
                <li>{`${a} + ${b} = ${Sum(a, b)}`}</li>
                <li>{`${a} - ${b} = ${Diff(a, b)}`}</li>
                <li>{`${a} * ${b} = ${Multi(a, b)}`}</li>
                <li>{`${a} / ${b} = ${Divid(a, b)}`}</li>
            </ul>
        )
    }
}

function Sum(a: number, b: number): number {
    return a + b;
}

function Diff(a: number, b: number): number {
    return a - b;
}

function Multi(a: number, b: number): number {
    return a * b;
}

function Divid(a: number, b: number): number {
    return a / b;
}
