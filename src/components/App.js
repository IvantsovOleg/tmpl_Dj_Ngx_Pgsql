import React from "react";
import SectionNavVertical from "./navVertical/SectionNavVertical";
import SectionMain from "./main/SectionMain";

export default class App extends React.Component {

    render() {
        return (
            <div>
                <SectionNavVertical />
                <SectionMain />
            </div>
        )
    }
}