import { useState } from "react"
interface Task {
    id: number;
    name: string;
    assign: string;
    status: boolean;
    created_at: Date;
}

export default function TodoList() {
    const [tasks] = useState<Task[]>([
        {
            id: 1,
            name: "Thiết kế giao diện 1",
            assign: "Nguyễn Văn A",
            status: false,
            created_at: new Date(),
        },

        {
            id: 2,
            name: "Thiết kế giao diện 2",
            assign: "Nguyễn Văn B",
            status: true,
            created_at: new Date(),
        }
    ])

    const formatStatus = (status: boolean): string => {
        return status ? <button type="button" className="btn btn-success" style={{ background: "#2eb872", fontSize: 12 }}>Đã hoàn thành</button> : <button type="button" className="btn btn-success" style={{ background: "#ff8585", fontSize: 12 }}>Chưa hoàn thành</button>
    }

    const formatDate = (date: Date): string => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    }
    return (
        <table style={{ width: 1200 }}>
            <thead>
                <tr>
                    <td>STT</td>
                    <td>Tên công việc</td>
                    <td>Người thực hiện</td>
                    <td>Trạng thái</td>
                    <td>Thời gian tạo</td>
                    <td>Chức năng</td>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task, index) => (
                    <tr key={task.id}>
                        <td>{index + 1}</td>
                        <td>{task.name}</td>
                        <td>{task.assign}</td>
                        <td>{formatStatus(task.status)}</td>
                        <td>{formatDate(task.created_at)}</td>
                        <td>
                            <button type="button" className="btn btn-primary" style={{ background: "blue", color: "white", fontSize: 12 }}>Sửa</button>
                            <button type="button" className="btn btn-danger" style={{ background: "red", color: "white", fontSize: 12 }}>Xóa</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}


