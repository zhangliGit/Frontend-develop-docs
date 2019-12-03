# git规范

## 常规操作

**<p class="tip-color">git基础操作主要分为如下几个步骤</p>**

**第一步：提交工作区代码到暂存区**

```
# 暂存所有文件
git add .

# 暂存指定目录或文件
git add file
```

**第二步： 提交暂存区代码到本地仓库**

**<p class="tip-color"><i class="fa fa-lightbulb-o"></i> 参考git提交格式</p>**

```
git commit -m '提交信息'
git cz
or
git cz file
```

**第三步：拉取远程代码**

```
git pull origin dev
```

**<p class="error-color">第四步：如有突出，处理冲突后再次提交（处理突出时需要与对应的人员沟通，避免删出必要的代码）</p>**

**第五步：推送代码到远程仓库**

```
git push origin dev
```

<p class="tip-info">
  <h3>提示</h3>
  每次提交代码时以功能或模块作为一次提交记录，最好不要所有修改一起提交
</p>

## git提交规范

**在团队合作中，commit时添加合理的注释说明是非常有必要**

**<p class="tip-color"><i class="fa fa-lightbulb-o"></i> 优点</p>**

+ 可读性好，清晰，不必深入看代码即可了解当前commit的作用

+ 为 Code Reviewing做准备

+ 方便跟踪工程历史，进行代码版本回退和撤销

+ 可以直接从commit生成Change log, 方便发布版本时展示差异

+ 提高项目的整体质量，提高个人工程素质

**使用Commitizen工具规范代码提交（主流的Angular规范）**

<p class="tip-color">安装配置</p>

```
npm install -g commitizen
npm install -g cz-conventional-changelog

// 设置支持commit message格式, 在项目目录中执行
commitizen init cz-conventional-changelog --save-dev --save-exact --force
```

<p class="tip-color">使用</p>

用 git cz 代替 git commit -m 就可以轻松的写出 Angular 规范的 commit message 了

## git提交格式

**每次提交，Commit message 都包括三个部分：header，body 和 footer**

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

<p>其中，header 是必需的，body 和 footer 可以省略</p>
<p>不管是哪一个部分，任何一行都不得超过72个字符（或100个字符）</p>

**<p class="tip-color"><i class="fa fa-lightbulb-o"></i> header</p>**

Header部分只有一行，包括三个字段：type（必需）、scope（可选）和subject（必需）

**<p class="warn-color">1. type</p>**

type用于说明 commit 的类别，只允许使用下面10个标识

+ feat：新功能（feature）

+ fix：修补bug

+ docs：文档修改（documentation）

+ style： 格式（不影响代码运行的变动）

+ refactor：重构（即不是新增功能，也不是修改bug的代码变动）

+ perf：提高性能

+ test：增加测试

+ build：依赖的外部资源变化

+ chore：构建过程或辅助工具的变动（包括但不限于文档、代码生成等, 比如修改了README，webpack配置文件等等）

+ revert：恢复先前的提交

如果type为feat和fix，则该 commit 将肯定出现在 Change log 之中。其他情况（docs、chore、style、refactor、test）由你决定，要不要放入 Change log，建议是不要

**<p class="warn-color">2. scope</p>**

scope用于说明 commit 影响的范围，比如路由，组件，功能，接口配置等，视情况而定，如果没有合适的scope，可以省略

**<p class="warn-color">3. subject</p>**

subject是 commit 目的的简短描述，不超过50个字符

**<p class="tip-color"><i class="fa fa-lightbulb-o"></i> body</p>**

Body 部分是对本次 commit 的详细描述，可以分成多行。下面是一个范例

**<p class="tip-color"><i class="fa fa-lightbulb-o"></i> footer</p>**

可以不使用

## git格式验证

**在每次commit前检验提交的信息是否符合规范**

```
# 安装validate-commit-msg
npm install --save-dev validate-commit-msg

# 安装ghooks
cnpm install ghooks --save-dev
```

**在 package.json 配置 ghooks。在config中添加如下信息**

```js
"config": {
  "ghooks": {
    "commit-msg": "validate-commit-msg"
  },
  "validate-commit-msg": {
    "types": ["feat", "fix", "docs", "style", "refactor", "perf", "test", "build", "ci", "chore", "revert"],
    "scope": {
      "required": false,
      "allowed": ["*"],
      "validate": false,
      "multiple": false
    },
    "warnOnFail": false,
    "maxSubjectLength": 100,
    "subjectPattern": ".+",
    "subjectPatternErrorMsg": "subject does not match subject pattern!",
    "helpMessage": "",
    "autoFix": false
  }
}
```