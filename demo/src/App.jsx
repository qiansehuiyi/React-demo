import React, { Component } from 'react'
/* import Header from './components/Header'
import Contents from './components/Contents' */
import Header from './components/Header'
import Contents from './components/Contents'

export default class App extends Component {

    render() {
        /*方法二
        const course = 'Half Stack application development';
        const part1 = 'Fundamentals of React';
        const exercises1 = 10;
        const part2 = 'Using props to pass data';
        const exercises2 = 7;
        const part3 = 'State of a component';
        const exercises3 = 14;*/

        const course = 'Half Stack application development';
        const parts = [
            {
                name: 'Fundamentals of React',
                exercises: 10,
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
            },
            {
                name: 'State of a component',
                exercises: 14,
            },
        ];

        return (
            /*方法一
             <div>
                 <h1>Half Stack application development</h1>
                 <ol>
                     <li>
                         <span>Fundamentals of React</span>&nbsp;&nbsp;
                         <span>10</span>
                     </li>
                     <li>
                         <span>Using props to pass data</span>&nbsp;&nbsp;
                         <span>7</span>
                     </li>
                     <li>
                         <span>State of a component</span>&nbsp;&nbsp;
                         <span>14</span>
                     </li>
                 </ol>
             </div> 
             */
            /* 方法二 
            <div>
                 <h1>{course}</h1>
                 <ol>
                     <li>{part1}   {exercises1}</li>
                     <li>{part2}   {exercises2}</li>
                     <li>{part3}   {exercises3}</li>
                     <li>all:  {exercises1 + exercises2 + exercises3}</li>
                 </ol>
             </div>
             */
            /*
            <div>
                <Header></Header>
                <Contents /> 
            </div> */
            <div>
                <Header course={course} />
                <Contents parts={parts} />
            </div>
        )
    }
}
