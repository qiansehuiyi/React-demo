# 2 实现收集反馈的应用

## 目标与成果预览

本任务的目标是实现一个收集客户反馈的 web 应用。

反馈只有三种选择：*good*、*neutral* 和 *bad*。

应用必须显示每个类别收集的反馈总数，最终的应用可以是这样的：

![成果预览](https://image-bed-41101202.oss-cn-hangzhou.aliyuncs.com/typora/13e.png)

同样，我们暂时无需关心样式优化的问题。

请注意，您的应用只需要在单个浏览器会话期间工作。 一旦刷新页面，收集到的反馈信息就会消失。

## Target I 创建应用

> 知识点：创建应用、React Hooks

建议使用与之前课程材料相同的结构，*index.js* 文件内容如下：

```jsx
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />, 
  document.getElementById('root'),
);
```

您可以使用下面的代码作为 *App.js* 的起点。

```jsx
import React, { useState } from 'react';

const App = () => {

  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      code here
    </div>
  );
};

export default App;
```

## Target II 统计数据

> 知识点：表达式计算

扩展应用，以便它显示更多关于收集到的反馈的统计数据：

- 收集到的反馈总数
- 平均分数(好：1，中性：0，坏：-1)
- 正反馈的百分比

完成本目标后，应用大概是这个样子：

![统计功能预览](https://image-bed-41101202.oss-cn-hangzhou.aliyuncs.com/typora/14e.png)

## Target III 重构组件

> 知识点：组件化、重构

重构应用，以便将显示统计信息提取到它自己的 *Statistics* 组件中，但应用的状态应该保留在 *App* 根组件中。

记住组件不应该在其他组件中定义，如：

```jsx
// a proper place to define a component
const Statistics = (props) => {
  // ...
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // do not define a component within another component
  const Statistics = (props) => {
    // ...
  }

  return (
    // ...
  )
}
```

## Target IV 条件判断

> 知识点：条件判断

优化项目，只有在收集到反馈之后，才能将应用更改为显示统计信息。

当没有反馈数据时，应用看起来应当是这个样子：

![空值预览](https://image-bed-41101202.oss-cn-hangzhou.aliyuncs.com/typora/15e.png)

## Target V 重构组件

> 知识点：组件化、重构

让我们继续重构这个应用，提取如下两个组件：

- *按钮* 用于定义用于提交反馈的按钮
- *显示单一统计数字的 statistics*，例如平均分数

需要明确的是，*statistics* 组件总是显示一个统计信息，这意味着应用需要使用多个组件来渲染所有的统计信息：

```js
const Statistics = (props) => {
  /// ...
  return(
    <div>
      <Statistic text="good" value ={...} />
      <Statistic text="neutral" value ={...} />
      <Statistic text="bad" value ={...} />
      // ...
    </div>
  );
};
```

应用的状态仍然应该保存在 *App* 根组件中。

## Target VI *表格展示

> 知识点：HTML 表格
>
> 注意，标题带有 * 的 Target 为可选 Target，不完成该目标不会对你的应用有任何功能上的影响。

在 [HTML 表格](https://developer.mozilla.org/zh-CN/docs/learn/HTML/tables/basics)中显示统计信息 ，这样你的应用看起来大致如下：

![表格展示预览](https://image-bed-41101202.oss-cn-hangzhou.aliyuncs.com/typora/16e.png)

同时打开浏览器的控制台（使用 *Ctrl + Shift + I* 打开），确保从现在开始，你在控制台上看不到任何警告。

