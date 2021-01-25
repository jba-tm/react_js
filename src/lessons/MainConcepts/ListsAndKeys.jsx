// function NumberList(props) {
//     const numbers = props.numbers
//     const listItems = numbers.map((number, index) =>
//         <li key={index}>{number}</li>
//     )
//
//     return (
//         <ul>{listItems}</ul>
//     )
// }
//
// const numbers = [1, 2, 3, 4, 5]
//
// export default ListItems

// Example: Incorrect Key Usage
//
// function ListItem(props) {
//     const value = props.value;
//     return (
//         // Wrong! There is no need to specify the key here:
//         <li key={value.toString()}>
//             {value}
//         </li>
//     );
// }
//
// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>
//         // Wrong! The key should have been specified here:
//         <ListItem value={number} />
//     );
//     return (
//         <ul>
//             {listItems}
//         </ul>
//     );
// }
//
// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//     <NumberList numbers={numbers} />,
//     document.getElementById('root')
// );

// function ListItem(props){
//     return <li>{props.value}</li>
// }
//
//
// function NumberList(props){
//     const numbers = props.numbers
//     const listItems = numbers.map((number)=>
//         <ListItem key={number.toString()} value={number}/>
//     )
//     return (
//         <ul>{listItems}</ul>
//     )
// }

function Blog(props){
    const sideBar= (
        <ul>
            {props.posts.map((post)=>
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    )

    const content = props.posts.map((post)=>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    )
    return (
        <div>
            {sideBar}
            <hr/>
            {content}
        </div>
    )
}

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

function ListItems(props){
    return (
        <div>
            <Blog posts={posts}/>
        </div>
    )
}

export default ListItems
