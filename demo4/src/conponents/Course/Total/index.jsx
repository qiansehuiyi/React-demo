// import React, { Component } from 'react'

// export default class Total extends Component {
//     render() {
//         // const exercises1 = this.props.course.parts[0].exercises
//         // const exercises2 = this.props.course.parts[1].exercises
//         // const exercises3 = this.props.course.parts[2].exercises
//         // const total = exercises1 + exercises2 + exercises3
//         const exercises1 = this.props.course.parts[0].exercises
//         const exercises2 = this.props.course.parts[1].exercises
//         const exercises3 = this.props.course.parts[2].exercises
//         const arr = [exercises1, exercises2, exercises3]
//         const reduce = (accumulator, currentValue) => accumulator + currentValue;
//         const total = arr.reduce(reducer)
//         return (
//             <div>
//                 总和：{total}
//             </div>
//         )
//     }
// }

const Total = ({ course }) => {
    return <>
        <div>
            total
            of &nbsp;
            {
                JSON.stringify(
                    course
                        .map(
                            ({ parts }) => parts.map(({ exercises }) => exercises)
                        )
                        .flat()
                        .reduce((prev, next) => prev + next)
                )
            }
            &nbsp;
            exercises
        </div>
    </>
}

export default Total
