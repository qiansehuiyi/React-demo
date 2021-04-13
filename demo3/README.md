# 3 实现展示箴言的应用

## 目标与成果预览

在软件工程的世界里，充满了从我们这个领域提炼出永恒真理。

## Target I 创建应用

> 知识点：创建应用、点击事件处理、React Hooks

创建一个应用，通过添加一个点击按钮来显示软件工程领域的随机箴言，扩展如下应用：

```jsx
import React, { useState } from 'react'

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  ];

  const [selected, setSelected] = useState(0);

  return (
    <div>
      {anecdotes[selected]}
    </div>
  );
};

export default App;
```

谷歌会告诉你如何在 JavaScript 中生成随机数。记住，你可以在浏览器的控制台中测试随机数的生成。

你完成的应用可以是这样的：

![初始样式预览](https://image-bed-41101202.oss-cn-hangzhou.aliyuncs.com/typora/18a.png)

## Target II 投票功能

> 知识点：点击事件、React Hooks

扩展本应用，以便您可以为显示箴言的投票。 

![投票功能预览](https://image-bed-41101202.oss-cn-hangzhou.aliyuncs.com/typora/19a.png)



注意， 将对每个箴言的投票存储到组件状态的数组或对象中。记住，更新存储在对象和数组等复杂数据结构中的状态，**正确方法是复制状态**。

你可以像这样创建一个对象的副本：

```js
const points = { 0: 1, 1: 3, 2: 4, 3: 2 };

const copy = { ...points };
// increment the property 2 value by one
copy[2] += 1;
```

或者一个数组的副本：

```js
const points = [1, 4, 6, 3];

const copy = [...points];
// increment the value in position 2 by one
copy[2] += 1;
```

在这种情况下，使用数组可能是更简单的选择。 在谷歌上搜索会给你提供很多关于如何创建一个具有期望长度的、零填充的数组，比如[这一篇](https://stackoverflow.com/questions/20222501/how-to-create-a-zero-filled-javascript-array-of-arbitrary-length/22209781)。

## Target III 最受欢迎的箴言

> 知识点：数组处理

现在实现这个应用的最终版本，显示得票最多的警句：

![最受欢迎的警句](https://image-bed-41101202.oss-cn-hangzhou.aliyuncs.com/typora/20a.png)

如果有多个箴言并列第一，那么只要展示其中一个就足够了。
