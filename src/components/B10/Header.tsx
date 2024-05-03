import { Component } from 'react'


export default class Header extends Component {
    render() {
        return (
            <>
                <div className="card-body p-5">
                    <h3 style={{ textAlign: "center", marginBottom: 40 }}>Quản lý công việc</h3>
                    <form
                        className="d-flex justify-content-center
                        align-items-center mb-4"
                    >
                        <div className="form-outline flex-fill">
                            <input type="text" id="form2" className="form-control" placeholder='Thêm công việc' style={{ width: "90%", height: 40 }} />
                            <button
                                type="submit"
                                className="btn btn-info
                                ms-2"
                            >
                                Thêm
                            </button>
                        </div>

                    </form>
                </div>

            </>
        )
    }
}
