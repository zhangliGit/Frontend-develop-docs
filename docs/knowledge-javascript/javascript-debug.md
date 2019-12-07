# javascript调试

## 浏览器debugger

> Pause/Resume script execution（ F8）

**在断点暂停后，点击恢复脚步执行，直到下一个断点为止**

**长按图标，会出现灰色的播放按钮，鼠标移上去再松开左键，会忽略所有的断点，强制渲染完整的页面** 

> Step over next function call （F10）

**当在一行代码中debugger，如果代码中包含一个与正在调试问题无关紧要的函数，点击此图标则直接解析该函数，而不是进入到函数内部逐行调试代码**

> Step into next function call （ F11）

**当断点找到了要debug的确切函数，点击此图标可以进入到函数内部，逐行的调试代码**

> Step out of current function （Shift + F8）

**当进入到一个与调试无关紧要的函数后，点击此图标解析函数剩余的代码，跳出函数到下一行**