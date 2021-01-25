import React from 'react'

// function WelcomeFuction(props){
//     return (
//         <h1>Hello, {props.name}</h1>
//     )
// }
//
// class Welcome extends React.Component{
//     render() {
//         return (
//             <h1>
//                 Hello, {this.props.name}
//             </h1>
//         );
//     }
// }
//
//
// export default Welcome

function formatDate(date){
    return new date.toLocaleString()
}

function Avatar(props) {
    return (
        <img className="Avatar"
             src={props.user.avatarUrl}
             alt={props.user.name}
        />
    );
}

function UserInfo(props){
    return(
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    )
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

export default Comment