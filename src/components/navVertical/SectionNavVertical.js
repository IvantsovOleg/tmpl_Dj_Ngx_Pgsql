import React from "react";
import ItemsNavVertical from "./ItemsNavVertical";

export default class SectionNavVertical extends React.Component {
    render() {
        return (
            <nav id="mainNavbar" className="navbar navbar-vertical navbar-expand-lg scrollbar bg-dark navbar-dark">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="sidenavCollapse">
                        <ItemsNavVertical />
                    </div>
                </div>
            </nav>
        )
    }
}