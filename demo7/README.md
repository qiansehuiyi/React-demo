# 7 实现展示国家信息的应用

## Target I 创建应用

> 知识点：HTTP 请求、Axios、遍历渲染、Effect Hook

API <https://restcountries.eu> 以机器可读的格式，提供了不同国家的大量数据，即所谓的 RESTful API。

创建一个应用，可以查看不同国家的数据。应用可以从这个 URI <https://restcountries.eu/#api-endpoints-all> 中获取数据。

第一个目标非常简单：获取所有国家信息，并展示所有国家列表。

## Target II 搜索

> 知识点：事件处理、Effect Hook

接下来要实现一个新功能，通过在搜索字段中键入搜索查询，可以找到要显示的国家名称。

预览图如下：	

![搜索结果预览](https://image-bed-41101202.oss-cn-hangzhou.aliyuncs.com/typora/image-20210401150238399.png)

## Target III 优化搜索展示

> 知识点：分支判断

对上一步的搜索功能进行优化，如果匹配查询的国家太多（超过 10 个），则提示用户使查询更加具体：

![结果过多预览](https://image-bed-41101202.oss-cn-hangzhou.aliyuncs.com/typora/image-20210401150104894.png)

如果少于 10 个国家，则显示所有匹配查询的国家名称：

![国家列表预览](https://image-bed-41101202.oss-cn-hangzhou.aliyuncs.com/typora/image-20210401150040164.png)

## Target IV 显示国家详情

如果只有一个国家匹配查询，则显示该国的基本数据、国旗和该国使用的语言：

![国家详情预览](https://image-bed-41101202.oss-cn-hangzhou.aliyuncs.com/typora/image-20210401145918531.png)

提示：你的应用在大多数国家能好用就可以了。 有些国家（如苏丹）可能会很难支持，因为国名是另一个国家名称的一部分。你不必担心这些边缘情况。

## Target V 展开按钮

> 知识点：条件渲染

当页面上显示多个国家的名称时，在国家名称旁边有一个展开按钮，当按下该按钮时，显示该国家的详细信息：

![展开按钮预览](https://image-bed-41101202.oss-cn-hangzhou.aliyuncs.com/typora/image-20210401150014756.png)

## Target VI 天气信息

> 知识点：环境变量、HTTP 请求

在显示单个国家数据的视图中添加该国首都的天气报告，这里推荐使用 <https://weatherstack.com> 接口。

最终功能成果的预览如下：

![天气功能预览](https://image-bed-41101202.oss-cn-hangzhou.aliyuncs.com/typora/image-20210401145948303.png)



你可能需要注册一个账号，并获取一个 Secret Key 来调用该服务网站的 API 接口。

**警告：不要将 Secret Key 保存到源代码管理 Git 中！应当使用[环境变量](https://create-react-app.dev/docs/adding-custom-environment-variables/)来保存密钥。**

### 方式一

假设 Secret Key 是 *t0p53cr3t4p1k3yv4lu3*，可以通过这种方式传入环境变量：

```bash
REACT_APP_SECRET_KEY='t0p53cr3t4p1k3yv4lu3' npm start
```

您可以从 *process.env* 对象访问密钥的值：

```js
const secretKey = process.env.REACT_APP_API_KEY;
// variable secretKey has now the value set in startup
```

注意，如果你使用 `npx create-react-app ...` 创建了应用，并且想要为环境变量使用其他名称，则环境变量必须以 `REACT_APP_` 开头。

### 方式二

你还可以通过在项目中创建一个名为 `.env` 的文件并添加以下内容来使用 `.env` 文件，而不是每次都在命令行中定义。

```text
REACT_APP_SECRET_KEY=t0p53cr3t4p1k3yv4lu3
```

注意你需要重启 React 开发服务器来启用这些变化。
