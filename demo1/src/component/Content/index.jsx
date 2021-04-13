import React from 'react';
import Part from './Part';

const Content = ({ parts }) => {

    return <>
        {
            parts.map(part => <Part key={part.name} {...part}></Part>)
        }
    </>;

}

export default Content;

// export default class Content extends Component {
//     render() {
//         const name1 = this.props.parts[0].name
//         const name2 = this.props.parts[1].name
//         const name3 = this.props.parts[2].name
//         const exercises1 = this.props.parts[0].exercises
//         const exercises2 = this.props.parts[1].exercises
//         const exercises3 = this.props.parts[2].exercises

//         return (
//             <div>
//                 <Part name1={name1} exercises1={exercises1}></Part>
//                 <Part name2={name2} exercises2={exercises2}></Part>
//                 <Part name3={name3} exercises3={exercises3}></Part>
//             </div>
//         )
//     }
// }
