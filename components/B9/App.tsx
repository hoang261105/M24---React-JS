import { useState } from "react"


export default function App() {
    const [App] = useState([
        { theme: "sáng", language: "Tiếng Anh" },
        { theme: "tối", language: "Tiếng Việt" },
    ])
    return (
        <div>
            {
                App.map((item) => {
                    if (item.theme === "tối") {
                        return <div style={{
                            width: 200,
                            height: 100,
                            background: "black",
                            color: "white",
                            fontSize: 20
                        }}>
                            <h3>Nền: {item.theme}</h3>
                            <p>Ngôn ngữ: {item.language}</p>
                        </div>
                    } else if (item.theme === "sáng") {
                        return <div style={{
                            width: 200,
                            height: 100,
                            background: "white",
                            color: "black",
                            fontSize: 20
                        }}>
                            <h3>Nền: {item.theme}</h3>
                            <p>Ngôn ngữ: {item.language}</p>
                        </div>
                    }
                })
            }
        </div>
    )
}
