import React from "react";

export default class ItemsNavVertical extends React.Component {
    render() {
        return (
            <ul className="navbar-nav mb-lg-7">
                <li className="nav-item dropdown">
                    <a className="nav-link " href="#" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="dashboardsCollapse">
                        <span>Dashboards</span>
                    </a>
                </li>
            </ul>
        )
    }
}