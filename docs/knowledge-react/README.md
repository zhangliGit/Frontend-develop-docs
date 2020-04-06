# React 知识点

[react 资料](https://www.jianshu.com/p/06f5285e2620)

## 1. react 认识

**react 是一个采用声明式，高效而且灵活的用来构建用户界面的框架**

## 2. react 组件生命周期

[生命周期](https://images2015.cnblogs.com/blog/588767/201612/588767-20161205190022429-1074951616.jpg)

```
// 初始化构造函数，初始化state
constructor(props, context) {
    super(props, context);
    this.state = {
        text: ''
    }
}

// 组件渲染之前执行一些操作 （在16版本已废除）
componentWillMount() {

}

// vm（dom）树渲染，生成虚拟dom树

render() {
    return {

    }
}

// 组件渲染完毕，真实dom被渲染
componentDidMount() {

}

// setState 组件更新前执行操作 （在16版本已废除）
componentWillUpdate() {

}

// props属性改变时 对前后属性进行对比，如果一样就不用了进行对比更新
componentWillReceiveProps () {

}

// 对比之前确定是否更新组件
shouldComponentUpdate() {

}

// render重新渲染对比之后 组件真实dom更新完毕
componentDidUpdate () {

}

// 组件被卸载时处理一下操作， （在16版本已废除）
componentWillUnmount() {
 // 处理一些setTimeout 以及一些监听事件

}
```

## 3. react 父组件与子组件交互

- 父子组件直接交换

```
1. 父组件传递数据给子组件

<Child name="zhangli" title="标题"></Child>

const params = {
    name: 'zhangli',
    title: '标题'
}
<child {...params}></child>

// 子组件获取
constructor(props) {
    super(props);
    console.log(this.props.name); //返回传递的属性对象集合
}
<div>{this.props.name}</div>

2. 父组件访问子组件状态和方法 `ref`

// 父组件

getData() {
    console.log(this.refs.child.state.name) // 获取子元素状态属性
    this.refs.child.testData(); // 调用子组件方法
}

render() {
    return (
        <div>
            <child ref="child" onClick={this.getData.bind(this)} />
        </div>
    )
}

// 子组件

constructor(props) {
    super(props);
    this.state = {
        name: 'zhangli'
    }
}
testData() {
    console.log('test data');
}

```

- 跨级父子组件交互

```
// 使用context上下文进行
```

- 兄弟组件直接的交互

```
// 使用父组件传值

// 使用context

// 使用event
```

## 4. react 子组件与父组件交互

```
1. 子组件获取父组件的属性状态

// 父组件

constructor() {
    super();
    this.state = {
        name: 'zhangli'
    }
}
setData () {
    this.setState({
        name: 'zhanglizhangli'
    })
}
render() {
    return (
        <div>
            <child name={this.state.name} setData={this.setData.bind(this)}></child>
        </div>
    )
}

// 子组件

render() {
    return (
        <div>
            { this.props.name }
        </div>
    )
}

2. 子组件调用父组件的方法

// 父组件同上

// 子组件调用方法，并传递参数
render() {
    return (
        <div onClick={this.props.setData.bind(this, 'zhangli')}>
            { this.props.name }
        </div>
    )
}

```

## 5. react 兄弟组件之间的交互

```
// 以父组件作为桥梁, A子组件调用父组件，父组件在调用B子组件

```

## 6. className classNames 和 style

## 7. defaultProps 默认的属性值

## 8. react 遍历元素

```
// return的元素必须只有一个根元素

constructor(props) {
    super(props);
    this.state = {
        tabList: props.tabList;
    }
}
render() {
    return (
        <div>
           {
               this.state.tabList.map((item, index) => {
                   return (
                     <div className="co-pd-a05 co-bg-0" key={item.id}>
                        {item.title}
                     </div>
                   )
               })
           }
        </div>
    )
}

```

## 9. react 事件处理

```
1. 点击事件 onClick 以及传递参数

constructor(props) {
    super(props);
}

// 原型方法
handClick(params, e) { // 事件对象要放在后面
    console.log(params);
}

// 加上.bind是绑定事件，手动执行

(
    <div onClick={this.handClick.bind(this, 'params')}>

    </div>
)

// 监听函数 实例方法
handClick = () => {

}

(
    <div onClick={ () => this.handClick()}>

    </div>
)

(
    <div onClick={ this.handClick }></div>
)


```

## 10. react 条件渲染

```
// 使用三目运算符或判断语句

render() {
    return (
        <div>
            {
                this.state.isBack ?
                <div>对的</div>
                :
                <div>错的</div>
            }
        </div>
    )
}

```

## 11. react 组件自定义元素（类似 vue 插槽功能）

> 属性插槽

```
// 父组件

<child
    left = {

        (
            <div>
                我是左边
            </div>
        )
    }
    right = {
        (
            <div>
                我是右边说
            </div>
        )
    }
>
</child>

// 子组件

render() {
    return (
        <div>
            我是子组件
            { this.props.left }
            { this.props.right }
        </div>
    )
}

```

> 嵌套组件插槽

```
// 父组件
function Slide1(props) {
  return (
    <div>
      子代1
    </div>
  )
}

function Slide2(props) {
  return (
    <div>
      子代2
    </div>
  )
}
<child>
 <div>我是元素</div>
 <div>我也是元素</div>
</child>

// 子组件

render() {
    return (
        <div>
            { this.props.children }
        </div>
    )
}
```

## 12. react 路由

**1. 安装模块**

```js
cnpm i react-router-dom -S
```

```
路由组件中常见的属性
history
route：{
    location,
    match
}
const history = createBrowserHistory()
static childContextTypes = {
  router: PropTypes.object.isRequired
}
```

> BrowserRouter (没有 # 号) 适合动态网页

```
使用BrowserRouter(history)模式

 // 需要引用模块 react-router-dom
 // 根模块

 import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
 // Router必须只包含一个子元素
 ReactDOM.render(
    <Router>
        <div class="qui-Page qui-flex qui-fx-ver">
            <Swith>
                <Route exact path="/" component={Home}>
                <Route path="/List/:id/:name" component={List}>
            </Switch>
        </div>
    </Router>,
    document.getElement('root')
)

```

> HashRouter (有 # 号) 适合静态页面

```
使用HashRouter(hash)模式

 import { HashRouter, Route, Link, Switch } from 'react-router-dom'

 ReactDOM.render(
    <HashRouter>
        <div class="qui-Page qui-flex qui-flex-ver">
            <Swith>
                <Route exact path="/" component={Home}>
                <Route path="/List" component={List}>
            </Switch>
        </div>
    </HashRouter>,
    document.getElement('root')
 )

```

## 13. react 路由跳转以及传参

```
1. 使用BrowserRouter模式

this.props.history.push('/List')


2. 使用HashRouter模式

// url传递参数
this.props.history.push('/List/2/zhangli')

componentDidMount() {
    console.log(this.props.match.params); // {id: 2, name: 'zhangli'}
}

// 隐式传递
this.props.history.push({
    pathname: '/List',
    state: {
        id: 2,
        name: zhangli
    }
})
componentDidMount() {
    console.log(this.props.history.location.state)
}

3. 路由返回

this.props.history.goBack();

4. 防止路由死循环
this.props.history.replace('/List');
```

## 14. react 路由缓存

```

```

## 15. react 路由按需加载

[路由异步加载](https://segmentfault.com/a/1190000009539836)<br />
[bundle-loader](https://www.cnblogs.com/little-ab/articles/6956341.html)

```
bundle-loader
```

## 16. react 状态管理(redux)

> 安装相关依赖

```
npm install redux react-reduxs

npm install prop-types

```

> store

```
redux的状态管理仓库，通过createStore传入reducer创建的一个对象
redux-thunk为异步处理中间件


import { createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducer/index';

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
```

> action

```
redux 中的用户行为管理，所有的操作都经过action, 调用action里面的方法时会执行对应reducer里面的类型处理

const TICKET_DETAIL = 'ticket_detail'
/**
 * @Func ticketList
 * @Des 查询火车票详情
 */
const ticketDetailActions = (data) => {
  return {
    type: TICKET_DETAIL,
    data
  }
}
// 异步处理
export const ticketDetail = () => {
  return async (dispatch) => {
    const params = {
      url: apiList.ticketDetail
    }
    let data = await $ajax.get(params);
    dispatch(ticketDetailActions(data.data));
  }
}
```

> reducer

```
redux 中用户行为的处理, 修改store中的值只能在reducer中处理
根据action.type的类型判断进行数据处理
处理之后返回一个新的state

import { TICKET_LIST, TICKET_DETAIL } from '../action/ticket'


/**
 * @Func ticketList
 * @Des 火车票列表，详情数据处理
 */
const intiState = {
  list: [],
  detail: {
  }
};
export const ticket = (state = intiState, action) => {
  switch(action.type) {
    case TICKET_LIST :
    return {
      ...state,
      list: action.list
    }
    case TICKET_DETAIL :
    return {
      ...state,
      detail: action.data
    }
    default:
    return state
  }
}
```

> Provider

```
import { Provider } from 'react-redux'
Provider 实质上是一个容器组件，包裹在所 有容器最外层，传入store属性，让所有的组件都可以获取到store
<Provider store = { store }>
</Provider>

// 子组件
 需要引入prop-types模块
 import PropTypes from 'prop-type'
 exprot class Child extends React.Component {
    static contextTypes = {
        store: PropTypes.object.required
    }
    constructor(props, context) {
        super(props, context)
        console.log(this.context.store)
    }
    render() {
        console.log(this.context)
        return (
            <div></div>
        )
    }
 }
```

> connect

```
/**action/indexjs**/

export const ADD_NOTE = 'add_note'
export const DEL_NOTE = 'del_note'
export const addNote = (title) => ({
    return {
        type: ADD_NOTE,
        title,
        id: 1
    }
})

export const delNote = (title) => ({
    return {
        type: DEL_NOTE,
        id: 1
    }
})

/***app.js***/

import { bindActionCreators } from 'redux'
import { connect }  from 'react-redux'
import { addNote, delNote } from './action/index.js'
connect的作用是把state中的数据和action的方法绑定在组件的props上，这样在当前的组件中可以直接通过
this.props.xx或this.props.actions.xx() 去访问state数据和修改state数据

class Child extends React.Component {
    //
    render() {
        const { actions, list } = this.props
        return (
        )
    }
}

function mapStateToProps(state) {
    return {
        list: state.list
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ // 此处的操作是在action中定义的方法
            addNote,
            delNote
        }, dispatch)
    }
}

Child =  connect(mapStateToProps, mapDispatchToProps)(Child)

export Child

```

## 17. react 获取 dom 元素或组件实例

字符串形式（新版本不推荐）

```
componentDidMount() {
    console.log(this.refs.myDiv)
}
<div ref="myDiv"></div>
```

callback 形式

```
componentDidMount() {
    console.log(this.myDiv)
}
<div ref={el => this.myDiv = el}></div>
```

## 18. react input 数据双向绑定

```
// react没有指令直接实现数据双向绑定，但可以自己很简单的实现onChange

export class Child extends React.Component {
    constructor(porps) {
        super(props);
        this.state = {
            text: ''
        }
    }
    setValue(e) {
        this.setState({
            text: e.target.value
        })
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.text} onChange = {this.setValue.bind(this)} />
            </div>
        )
    }
}

```

## 19. react 动画实现

> react-transition-group

```
import { TransitionGroup, CSSTransition } from 'react-transition-group'

// css样式
.yu-enter{
    margin-left: 200px;
    transition:all 3s ease-out;
}
.yu-enter-active{
    background: blue
}
.yu-enter-done {
  transition:all .1s ease-out;
  background: green
}
.yu-exit{
    transition:all .2s ease-out;
}
.yu-exit-active{
    background: red;
}
.yu-exit-done {
  background: #000
}

constructor(props) {
    this.state = {
        showFlag: false
    }
}

const timeout = {
    enter: 1000, // 进行时执行的时间
    exit: 2000 // 离开时执行的时间
}

classNames的另一种写法
classNames={{
    enter: 'animated',
    enterActive: 'fadeInDown',
    exit: 'animated',
    exitActive: 'fadeOutDown'
  }}

<CSSTransition
    timeout = { timeout  }
    in = { this.state.showFlag }
    classNames = "yu"
    appear = { true }
>
<div id="myDiv">2323</div>
</CSSTransition>
appear={true} //添加这个属性使组件第一次出现的时候（即页面刚加载时）
,也使用动画，对应css中的fade-appear和fade-appear-active样式

注意样式为 classNames 加上s，
timeout 为延迟多长时间执行 yu-enter-done 或 yu-exit-done
当in的值为true时，myDiv的class样式先添加yu-enter yu-enter-active, enter(timeout)完之后变为yu-enter-done，
当in的值为false时，myDiv的class样式变为yu-exit yu-exit-active，
exit(timeout)完之后变为yu-exit-done

```

> react-addons-css-transition-group

```
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

<ReactCSSTransitionGroup
    appear
    component = "div"
    className = "myDiv"
    transitionName = "slide-in"
    transitionEnterTimeout = { 300 }
    transitionLeaveTimeout = { 300 }
>
    <div></div>
</ReactCSSTransitionGroup>

component属性会创建一个div的标签，并且class样式为myDiv的元素
transitonName属性 进场动画时样式添加slide-in-enter slide-in-enter-active,
并且在tansitionEnterTimeout的时间后移除slide-in-enter slide-in-enter-active
当<div class="myDiv">子元素被移除的时候，先添加slide-in-leave slide-in-leave-active
并且在tansitionLeaveTimeout的时间后移除slide-in-leave slide-in-leave-active样式，并最终移除元素

```

## 20. react style

**组件元素内使用**

```
<div style = {{width: 100px, height: 200px;}}></div>

const styles = {
    header: {
        background: "red"
    },
    con: {
        width: "100px"
    }
}
<div style = {{ ...styles.header, ...styles.con }}></div>
<div style = {{background: index === 0 ? 'red':'blue', color: 'green'}}>212</div>
```

## 21. react class

**外部引入样式**

```
import styles from './index.less'
.bg {
    background-color:red
}

render() {
    return (
        <div className = {${styles.bg} 'qui-fx-f1'}></div>
    )
}
```

```
<div className = ""></div>
<div className = { `qui-fx-f1 class2 ${myClass}`}></div>
<div className = { ` class1 ${ index === this.state.index ? 'class2': ''} `}></div>
<div className={index === this.state.active ? "active title" : 'title'}>标题</div>
```

## 22. react jsx 语法判断输出

```
render() {
    let div;
    if (true) {
        div = (
            <div>11</div>
        )
    } else {
        div = (
            <div>22</div>
        )
    }
    return (
        { div }
    )
}
```

## 23. react context 上下文，组件之间的数据传递（跨组件传递数据）

```
1. 必须用到prop-types模块
2. 必须定义数据类型
3. 在主组件中定义数据和类型，然后在任意的子组件中获取

// 主组件
import propTypes from 'prop-types'
export default class Index extends React.Component {
    constructor() {
        this.state = {
            text: '初始值'
        }
    }
    // 定义context类型 静态属性
    // 定义传给子组件的属性必须声明类型 否则会报错
    static childContextTypes = {
        name: PropTypes.string,
        age: PropTypes.number,
        setTitle: PropTypes.func
    }

    // 定义context实现的方法

    getChildContext() {
        return {
            name: 'zhangli',
            age: 21,
            setTitle: () => this.setTitle()
            setTitle: this.setTitle
        }
    }
    setTitle() {
        this.setState({
            text: '我改变了'
        })
    }
}

// 子组件
import propTypes from 'prop-types'
export default class Child extends React.Component {

   // 定义context静态数据类型后 可以直接通过this.context 获取
    static contextTypes = {
        name: propsType.string,
        age: propTypes.number,
        setTitle: propTypes.func
    }
    constructor(props, context) {
        super(props, context);
        this.context.setTitle();
        console.log(context); // { name: 'zhangli', age: 21 }
    }
}

```

## 24. react 组件中的 props

> 路由组件

```
通过Route匹配的路由组件，props为路由中的属性
{
    match: { path: '/', url: '/', isExact: true, params: {}},
    history: {},
    location: {pathname: '/', search: '', hash: '', state: ''}
}
```

> 逻辑&&ui 组件

```
表示组件中传递的属性
{
    name: '',
    methods: ''
}
```

## 25 react action 异步操作

```
1. 默认情况下redux只处理同步数据

2. 异步的处理可以放在action里面处理

3. 需要引用异步请求的中间件模块 安装 redux-thunk

4. 在store中配置

    import { createStore, applyMiddleware  } from 'redux';
    import thunk from 'redux-thunk';
    import reducers from './reducer/index';

    const store = createStore(reducers, applyMiddleware(thunk));

    export default store;
```

```
1. 默认情况下redux只处理同步数据

2. 异步的处理可以放在action里面处理

3. 需要引用异步请求的中间件模块 安装 redux-sage

4. 在store中配置

```

## 26 react 多个子组件切换缓存

```

```

## 27 react setState 多层对象属性

```
this.state = {
    form: {
        name: 'zhangli'
    }
}

// 更新state的值
this.setState({
    form: {
        ...this.state.form,
        name: 'chentian'
    }
})
```

## 28. react 高阶函数

```
高阶函数： 以函数作为函数的参数，结果return一个函数
```

## 29. react 高阶组价

```
高阶组价：高阶组件其实是一个纯函数， 调用时传入一个组件作为参数，
结果return一个组件
高阶组件相当于一个父组件，把传入的组件当做子组件进行渲染，合并成一个组件

高阶组件可以把组件公共的部分进行封装，然后在其他组件里面进行调用，类似vue中的mixins（混合）功能

import React from 'react';
export default (WarpComponent) => {
  class HocComponet extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        getName(val) {
          console.log(val);
        }
      }
    }
    componentWillMount() {
    }
    render() {
      return (
        <div>
          <div>12</div>
          <WarpComponent  { ...this.state } ></WarpComponent>
        </div>
      )
    }
  }
  return HocComponet;
}
```

## 30. watch 监听属性变化

```

```

## 31. react 组件懒加载

```
import React, {Fragment, Lazy, Suspense } from 'react'
const son = Lazy(() => import('./Son'))
class Parent extends React.Component {
    render () {
        return (
        // Fragment包裹组件子元素，代替父节点，最终不会被渲染成节点
            <Fragment>
                <Suspense fallback = {<div>loading</div>}>
                    <div>我是子元素</div>
                </Suspense>
            </Frament>
        )
    }
}

```

## 32. 新版 context（跨层级组件之间的数据传递）

创建组件之间传递的内容

```
import { createContext } from 'react'
const PersonInfo = createContext({
    name: 'zhangli',
    age: '30'
})
export default PersonInfo
```

父组件

```
import React from 'react'
import PersonInfo from './Person'

export default Parent extends React.Component {
    state = {
        info: {
            name: 'zhagnli',
            age: 33
        }
    }
    render () {
        return (
            <PersonInfo.Provider value = { this.state.info }>
                <Child></Child>
            </PersonInfo.Provider>
        )
    }
}
```

子组件

```
import React from 'react'
import PersonInfo from './Person'

export default Child extends React.Component {
    static contextType = PersonInfo
    render () {
        return (
           <div>
            { this.context.name }
           </div>
        )
    }
}
```

## 33. 子组件获取路由对象进行跳转

**1. 在父组件中获取 history 对象进行传递**

```js
<Child history={this.props.history}></Child>
```

**2. 在子组件中获取路由对象**
