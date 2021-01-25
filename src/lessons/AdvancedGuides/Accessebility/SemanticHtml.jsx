// function ListItem({item}){
//     return (
//         <Fragment >
//             <dt>{item.term}</dt>
//             <dd>{item.description}</dd>
//         </Fragment>
//     )
// }
//
//
// function Glossary(props){
//     return (
//         <dl>
//             {
//                 props.items.map(item=>(
//                     <ListItem item={item} key={item.id}/>
//                 ))
//             }
//         </dl>
//     )
// }

import {Fragment} from 'react'

function ListItem({ item }) {
    return (
        <>
            <dt>{item.term}</dt>
            <dd>{item.description}</dd>
        </>
    );
}

function Glossary(props) {
    return (
        <dl>
            {props.items.map(item => (
                // Fragments should also have a `key` prop when mapping collections
                <Fragment key={item.id}>
                    <dt>{item.term}</dt>
                    <dd>{item.description}</dd>
                </Fragment>
            ))}
        </dl>
    );
}

export default Glossary