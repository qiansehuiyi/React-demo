# 5 实现电话簿应用

## Target I 创建应用

> 知识点：创建应用、循环遍历

让我们创建一个简单的电话簿，这一章中我们仅添加名字到电话本中。

让我们从实现将一个人添加到电话簿中开始。

您可以使用下面的代码作为应用的 *App* 组件的起点：

```js
import React, { useState } from 'react';

const App = () => {

  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' },
  ]);
  const [ newName, setNewName ] = useState('');

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...
    </div>
  );

};

export default App;
```

*newName* 状态用于控制表单输入元素。

有时，为了调试目的，将状态和其他变量作为文本渲染出来会很有用。 您可以临时向渲染的组件添加如下元素：

```jsx
<div>debug: {newName}</div>
```

如果你在调试中遇到了问题，建议安装 [*React developer tools*](https://chrome.google.com/webstore/detail/React-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) 扩展，对于跟踪应用状态中发生的变化非常有用。

在完成这个练习之后，你的应用应该是这样的：

![电话簿应用预览](https://image-bed-41101202.oss-cn-hangzhou.aliyuncs.com/typora/image-20210401152118607.png)

请注意上图中使用的  [*React developer tools*](https://chrome.google.com/webstore/detail/React-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) 扩展。

注意：

- 您可以使用该人的姓名作为 *key* 属性的值
- 切记阻止提交 HTML 表单的默认操作 *preventDefault*

## Target II 阻止重复名称

> 知识点：数组、React Hooks

实现一个新功能，防止用户添加已经存在于电话簿中的名称，JavaScript 数组有许多合适的[方法](https://developer.mozilla.org/en-us/docs/web/JavaScript/reference/global_objects/array)来完成这个任务。

当尝试添加同名电话时，使用[alert](https://developer.mozilla.org/en-us/docs/web/api/window/alert)命令发出警告：

![提示重复名称功能预览](https://image-bed-41101202.oss-cn-hangzhou.aliyuncs.com/typora/image-20210401152653105.png)



**注意** 当您构建包含变量值的字符串时，建议使用[模板字符串](https://developer.mozilla.org/en-us/docs/web/javascript/reference/template_literals) :

```js
`${newName} is already added to phonebook`
```

如果*newName* 变量包含值*Arto Hellas*，则模板字符串表达式返回字符串

```js
`Arto Hellas is already added to phonebook`
```

同样的事情也可以通过使用 plus（+） 操作符，以类似 java 的方式来完成:

```js
newName + ' is already added to phonebook'
```

使用模板字符串是更具惯用性的选择，也是真正的 JavaScript 专家的标志。

## Target III 添加号码

> 知识点：添加、表单

扩展您的应用，允许用户将电话号码添加到电话簿。 您需要在表单中添加第二个*input* 元素(以及它自己的事件处理程序) ：

```jsx
<form>
  <div>name: <input /></div>
  <div>number: <input /></div>
  <div><button type="submit">add</button></div>
</form>
```

此时，应用可以看起来像这样。 该图片还显示了 [*React developer tools*](https://chrome.google.com/webstore/detail/React-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) 扩展的状态与帮助：

![添加号码功能预览](https://image-bed-41101202.oss-cn-hangzhou.aliyuncs.com/typora/image-20210401152254374.png)

## Target IV 搜索人员

> 知识点：搜索、输入事件处理

实现一个搜索字段，该字段可用于按姓名筛选人员列表：

![fullstack content](https://fullstackopen.com/static/4b5897029d4c9e2eb61631ca4c1a4f24/5a190/13e.png)



您可以将搜索字段实现为置于 HTML 表单之外的 *input* 元素。 图片中显示的过滤逻辑是*不区分大小写的*，这意味着搜索项 *arto* 也返回包含大写 a 的 *Arto* 的结果。

注意：在开发新功能时，在应用中“硬编码”一些虚拟数据通常很有用，例如：

```js
const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]);

  // ...

};
```

这样您就不必手动将数据输入应用来测试新功能了。

## Target V 重构组件

> 知识点：组件化、重构

如果您已经在单个组件中实现了应用，那么可以通过将合适的部分提取到新组件中来重构它。

同样记住，在 *App* 根组件中维护应用的状态和所有事件处理程序。

从应用中提取 3 个组件就足够了，如：

- 搜索过滤器
- 在电话簿中添加新人的表单
- 电话簿中显示所有人的组件
  - 显示单个人详细信息的组件

在重构之后，应用的根组件可能与此类似。

下面重构的根组件只渲染标题，并让提取的组件处理其余部分。

```jsx
const App = () => {

  // ...

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter ... />

      <h3>Add a new</h3>

      <PersonForm 
        ...
      />

      <h3>Numbers</h3>

      <Persons ... />
    </div>
  );

};
```
