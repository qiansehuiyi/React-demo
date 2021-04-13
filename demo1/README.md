# 1 实现展示课程信息的应用

## 成果预览

使最终的项目看起来像这样即可，目前我们不需要优化其样式。

![最终成果预览](https://image-bed-41101202.oss-cn-hangzhou.aliyuncs.com/typora/image-20210401091733046.png)

## Target I 创建应用

> 知识点：创建应用、基础语法

使用 `create-react-app` 来初始化一个新的应用，将 *index.js* 的内容修改如下：

```js
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />, 
  document.getElementById('root'),
);
```

*App.js* 内容如下：

```jsx
import React from 'react';

const App = () => {

  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  );
};

export default App;
```

并删除额外的文件(*App.css*, *App.test.js*, *logo.svg*, *setupTests.js*, *reportWebVitals.js*)。

## Target II 组件化

> 知识点：组件化、组件传值

不幸的是，目前整个应用都在同一个组件中。 重构代码，使其由三个新组件组成：*Header*、*Content* 和 *Total*。 所有数据仍然耦合在 *App* 组件中，让该组件使用 *props* 将必要的数据传递给每个组件。*Header* 负责显示课程的名称，*Content* 显示课程的章节及其练习的数量， *Total* 显示练习的总数。

在 *App.js* 中定义新的组件。

*App* 组件的body大致如下:

```jsx
const App = () => {

  // const-definitions

  return (
    <div>
      <Header course={course} />
      <Content ... />
      <Total ... />
    </div>
  );

};
```

## Target III 重构组件

> 知识点：组件化、重构

重构 *Content* 组件，使它本身不渲染任何章节的名称或练习的数量。 而是让它只渲染三个 *Part* 组件，每个组件渲染一个章节的名称和练习次数。

```jsx
const Content = ... {
  return (
    <div>
      <Part .../>
      <Part .../>
      <Part .../>
    </div>
  );
};
```

我们的应用目前是在以相当原始的方式传递信息，因为它是基于单个变量的。我们会在后面的练习中优化这种操作。

## Target IV 优化数据结构

> 知识点：结构化数据、对象

按如下方式修改 *App* 组件的变量定义来重构应用，使其仍然可以正常工作：

```jsx
const App = () => {

  const course = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  };
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  };
  const part3 = {
    name: 'State of a component',
    exercises: 14,
  };

  return (
    <div>
      ...
    </div>
  );

}
```

## Target V 优化数据结构

> 知识点：结构化数据、数组

将对象放到一个数组中。按如下方式修改 *App* 变量的定义，并相应地修改应用的其他部分：

```jsx
const App = () => {

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
    <div>
      ...
    </div>
  );

};
```

**注意**：在这里，我假定它总是有三个元素，所以没有必要使用循环遍历数组。 我们将在之后的练习中学习“基于数组中的元素渲染组件”。

但也不要把这些对象作为单独的 *props* 从 *App* 组件传递给 *Content* 和 *Total* 两个组件，而应将它们直接作为数组传递：

```jsx
const App = () => {
  // const definitions

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};
```

## Target VI 优化数据结构

> 知识点：结构化数据、对象、数组a

让我们进一步做一些改变。 将课程及其章节合成为一个 JavaScript 对象，修复好之前所有的缺陷。

```jsx
const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
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
    ],
  };

  return (
    <div>
      ...
    </div>
  );

};
```
