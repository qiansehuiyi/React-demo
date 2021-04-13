// import React, { Component } from 'react'

// export default class Part extends Component {
//     render() {
//         const { name, exercises, id } = this.props.parts
//         return (
//             <div>
//                 <p>{id}{name} {exercises}  </p>
//             </div>
//         )
//     }
// }

const Part = ({ parts }) => {
    return <>
        {
            parts.map(({ name, exercises, id }) => <p key={id}>{name}{exercises}</p>)
        }
    </>

}

export default Part
