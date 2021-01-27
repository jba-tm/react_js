function createMarkup() {
    return {__html: 'First &middot; Second'};
}

function MyComponent() {
    return <div dangerouslySetInnerHTML={createMarkup()} />;
}