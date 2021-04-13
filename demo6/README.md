# 6 优化电话簿应用

## Target I 启动简单服务器

> 知识点：RESTful、npm

将应用的初始状态存储在文件 *db.json* 中，将该文件应该放在项目的根目录中。

```json
{
  "persons":[
    { 
      "name": "Arto Hellas", 
      "number": "040-123456",
      "id": 1
    },
    { 
      "name": "Ada Lovelace", 
      "number": "39-44-5323523",
      "id": 2
    },
    { 
      "name": "Dan Abramov", 
      "number": "12-43-234345",
      "id": 3
    },
    { 
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122",
      "id": 4
    }
  ]
}
```

在 4000 端口上通过如下命令启动 *JSON Server*：

```bash
npx json-server -p4000 --watch db.json
```

并确保服务器通过访问浏览器中的地址 <http://localhost:4000/persons> 能够返回人员列表。

如果您收到如下错误消息：

```js
events.js:182
      throw er; // Unhandled 'error' event
      ^

Error: listen EADDRINUSE 0.0.0.0:4000
    at Object._errnoException (util.js:1019:11)
    at _exceptionWithHostPort (util.js:1041:20)
```

这意味着端口 4000 已经被另一个应用使用，例如已经运行了一个 *JSON Server* 实例。

想要解决该问题，请尝试关闭其他应用，或者更改端口，以防出现不正常的情况。

## Target II 从服务器获取数据

> 知识点：网络通信、HTTP 请求、异步、Promise、Effect Hook

修改应用，使用 *axios* 库从服务器获取数据的初始状态。使用 [Effect hook](https://reactjs.org/docs/hooks-Effect.html) 完成获取操作。

## Target III 将数据保存到服务器

> 知识点：POST 请求、Axios

在添加新号码时，向 JSON Server 发送一个 POST 请求，以便于将数据存储至服务器。

## Target IV 重构通信模块

> 知识点：重构、模块化

将所有涉及通信的功能提取为一个单独的模块。

## Target V 删除用户

> 知识点：DELETE 请求、Axios

使用户可以从列表中删除电话簿中的人员，并通过使用 [*window.confirm*](https://developer.mozilla.org/en-us/docs/web/api/window/confirm) 方法来确认用户的操作。

该功能预览图如下：

![删除用户功能预览](https://image-bed-41101202.oss-cn-hangzhou.aliyuncs.com/typora/image-20210401112614053.png)

### 提示

通过对资源的 URL 发出 HTTP DELETE 请求，可以删除后端中人员的关联资源。

例如，如果我们要删除一个 *id* 为2的人，我们必须向 *localhost:4000/persons/2* 发出 HTTP DELETE 请求，该请求不需要请求体。

您可以使用 [axios](https://github.com/axios/axios) 库发出 HTTP DELETE 请求，就像我们发出所有其他请求一样。

注意：不能对变量使用 *delete* 这个名称，因为它在 JavaScript 中是一个保留字，以下示例是非法命名：

```js
// use some other name for variable!
const delete = (id) => {
  // ...
}
```

## Target VI 更新号码

> 知识点：PUT 请求

当向电话簿添加新的人员时，如果对应人员存在，则通过 [*window.confirm*](https://developer.mozilla.org/en-us/docs/web/api/window/confirm) 方法向用户确认是否更新该人员的号码。

该功能预览图如下：

![更新用户号码](https://image-bed-41101202.oss-cn-hangzhou.aliyuncs.com/typora/image-20210401113003933.png)
