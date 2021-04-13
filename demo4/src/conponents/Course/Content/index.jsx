// import React, { Component } from 'react'
import Part from './Part'

// export default class Content extends Component {
//     render() {
//         const [parts1, parts2] = this.props.course.parts
//         return (
//             <div>
//                 <Part parts={parts1} />

//                 <Part parts={parts2} />

//             </div>
//         )
//     }
// }

const Content = ({ course }) => {
    return <>
        {
            course.map(parts => <Part key={parts.name} {...parts}></Part>)
        }
    </>
}

export default Content
