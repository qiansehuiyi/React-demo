# 4 优化展示课程信息的应用

## Target I 优化数据格式

> 知识点：重构、数据格式

让我们像这样修改 *App* 组件：

```jsx
const App = () => {

  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
    ],
  };

  return <Course course={course} />;

};
```

定义一个组件，负责格式化单门课程 *Course*。

例如，应用的组件结构可以是：

```text
App
  Course
    Header
    Content
      Part
      Part
      ...
...
```

因此， *Course* 组件包含前面部分中定义的组件，它们负责渲染课程名称及它的各个章节。

例如，渲染的页面可以如下所示：

![fullstack content](https://image-bed-41101202.oss-cn-hangzhou.aliyuncs.com/typora/8e.png)



你还不需要显示这些练习的总和。

*无论课程有多少章节*，应用都必须正常工作，因此，如果您添加或删除课程的章节，请确保应用工作正常。

## Target II 统计功能预览

> 知识点：数学表达式

实现新功能，在课程章节后显示课程练习总数。

![统计功能预览](https://image-bed-41101202.oss-cn-hangzhou.aliyuncs.com/typora/9e.png)

## Target III *Reduce

> 知识点：数组、reduce

如果你不是用 *reduce* 做的，此时用数组的 [*reduce*](https://developer.mozilla.org/en-us/docs/web/javascript/reference/global_objects/array/reduce) 方法计算练习的总和。

当你的代码看起来像这样：

```js
const total = parts.reduce((s, p) => someMagicHere);
```

而且不起作用时，推荐使用 *console.log* 来进行调试，它要求箭头函数以更长的形式来写（而不能写紧凑模式）:

```jsx
const total = parts.reduce((s, p) => {
  console.log('what is happening', s, p);
  return someMagicHere;
});
```

## Target IV 允许任意课程

> 知识点：数组、遍历

拓展应用，允许任意数量的课程：

```jsx
const App = () => {

  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1,
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2,
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3,
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4,
        },
      ],
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      // ...
    </div>
  );

};
```

例如，应用看起来应该是这样的:

![多课程预览](https://image-bed-41101202.oss-cn-hangzhou.aliyuncs.com/typora/10e.png)

## Target V 重构模块

> 知识点：重构、组件化

将 *Course* 组件声明为单独的模块，并由 *App* 组件导入。

您可以将课程的所有子组件放到同一个模块中。
