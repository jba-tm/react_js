function Subtree(props) {
    return (
        <App>
            <Profiler id="Panel" onRender={callback}>
                <Panel {...props}>
                    <Profiler id="Content" onRender={callback}>
                        <Content {...props} />
                    </Profiler>
                    <Profiler id="PreviewPane" onRender={callback}>
                        <PreviewPane {...props} />
                    </Profiler>
                </Panel>
            </Profiler>
        </App>
    );
}