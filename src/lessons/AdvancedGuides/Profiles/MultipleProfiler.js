function MultiProfile(props) {
    return (
        <App>
            <Profiler id="Navigation" onRender={callback}>
                <Navigation {...props} />
            </Profiler>
            <Profiler id="Main" onRender={callback}>
                <Main {...props} />
            </Profiler>
        </App>
    );
}