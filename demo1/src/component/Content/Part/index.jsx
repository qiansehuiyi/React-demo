import React from 'react';

const Part = ({ name, exercises }) => {

    return <>
        <div>
            <p>{name} {exercises}</p>
        </div>
    </>;

}

export default Part;

// export default class Part extends Component {
//     render() {
//         const name1 = this.props.name1
//         const name2 = this.props.name2
//         const name3 = this.props.name3
//         const exercises1 = this.props.exercises1
//         const exercises2 = this.props.exercises2
//         const exercises3 = this.props.exercises3

//         return (
//             <div>
//                 <p>{name1}{exercises1}</p>
//                 <p>{name2}{exercises2}</p>
//                 <p>{name3}{exercises3}</p>
//             </div>
//         )
//     }
// }
