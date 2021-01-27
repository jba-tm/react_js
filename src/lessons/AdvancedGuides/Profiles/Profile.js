import React from "react";

export class ProfileSingle extends React.Component {
    render() {
        return (
            <>
                <React.Profiler id="Navigation" onRender={callback}>
                    <Navigation {...props} />
                </React.Profiler>
                <Main {...props} />
            </>
        );
    }
}