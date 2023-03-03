import React from "react";
import SectionNavHorizontal from './navHorizontal/SectionNavHorizontal';
import PageContent from "./pageContent/PageContent";

export default class SectionMain extends React.Component {
    render() {
        return (
            <main>
                <SectionNavHorizontal />
                <PageContent />
            </main>
        )
    }
}