import React from "react";

export default class SectionNavHorizontal extends React.Component {
    fill;
    render() {
        return (
            <header className="container-fluid d-flex py-6 mb-4">
                <form className="d-none d-md-inline-block me-auto">
                    <div className="input-group input-group-merge">
                        <input type="text" className="form-control bg-light-green border-light-green w-250px" placeholder="Search..." aria-label="Search for any term" />
                        <span className="input-group-text bg-light-green border-light-green p-0">
                            <button className="btn btn-primary rounded-2 w-30px h-30px p-0 mx-1" type="button" aria-label="Search button">
                                <svg viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.750 9.812 A9.063 9.063 0 1 0 18.876 9.812 A9.063 9.063 0 1 0 0.750 9.812 Z"
                                          fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="1.5" transform="translate(-3.056 4.62) rotate(-23.025)">
                                    </path>
                                    <path d="M16.221 16.22L23.25 23.25" fill="none" stroke="currentColor"
                                          strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                                    </path>
                                </svg>

                            </button>
                        </span>
                    </div>
                </form>
                <div className="d-flex align-items-center ms-auto me-n1 me-lg-n2"></div>
            </header>
        )
    }
}