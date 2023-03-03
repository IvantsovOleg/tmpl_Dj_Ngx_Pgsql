import React from "react";

export default class PageContent extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <h1 className="h2">
                    Dashboard
                </h1>
                <div className="row">
                    <div className="col-xxl-5">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card border-0">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col d-flex justify-content-between">
                                                <div>
                                                    <h5 className="d-flex align-items-center text-uppercase text-muted fw-semibold mb-2">
                                                        <span className="legend-circle-sm bg-success"></span>
                                                        Income
                                                    </h5>
                                                    <h2 className="mb-0">
                                                        $3,240
                                                    </h2>
                                                    <p className="fs-6 text-muted mb-0">
                                                        No additional income
                                                    </p>
                                                </div>
                                                <span className="text-primary">
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card border-0">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col d-flex justify-content-between">
                                                <div>
                                                    <h5 className="d-flex align-items-center text-uppercase text-muted fw-semibold mb-2">
                                                        <span className="legend-circle-sm bg-danger"></span>
                                                        Expense
                                                    </h5>
                                                    <h2 className="mb-0">
                                                        $1,500
                                                    </h2>
                                                    <p className="fs-6 text-muted mb-0 text-truncate">
                                                        + $6.50 bank charges fee
                                                    </p>
                                                </div>
                                                <span className="text-primary"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary" onClick={this.sendAjax}>Клик</button>
            </div>
        )
    }
    sendAjax() {
        fetch("/api/12")
            .then(res => res.json())
            .then((response) => {
                    console.log(response)
                },
                (error) => {
                    console.log(error)
                }
            )
        console.log('here')
    }
}