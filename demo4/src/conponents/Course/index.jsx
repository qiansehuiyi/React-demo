//import React, { Component } from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'


// export default class Course extends Component {
//     render() {
//         const [course1, course2] = this.props.course
//         return (
//             <div>
//                 <Header course={course1} />
//                 <Content course={course1} />
//                 {/* <Total course={course} /> */}
//                 <Header course={course2} />
//                 <Content course={course2} />
//             </div>
//         )
//     }
// }

const Course = ({ course }) => {
    return <>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
    </>
}


export default Course;