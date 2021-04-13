//import React, { Component } from 'react'

// export default class Header extends Component {
//     render() {
//         const { id, name } = this.props.course
//         return (
//             <div>
//                 <h1>{id}  {name}</h1>
//             </div>
//         )
//     }
// }
const Header = ({ course }) => {
    return <>
        {
            course.map(({ name, id }) => <h1 key={id}>{name}</h1>)
        }
    </>
}

export default Header
