# git基础操作

**git版本管理工具命令行操作手册**

**[git使用笔记](https://www.jianshu.com/p/3dc4677a3b08)**
**[分支管理](https://www.cnblogs.com/cnblogsfans/p/5075073.html)**

## 初始化仓库

```
git init
```

## 查看git配置

```
git config --list
```
## 修改配置

```
git config --global user.name 'zhangli' // 用户名

git config --global user.email 'qq.com' // 邮箱

git config --global user.password '12345' // 密码
```

## 创建文件

```
> test.js
```

## 删除文件

```
rm test.js // 删除还有没add的文件

// 如果文件在暂存区 不能直接删除，可以使用git reset HEAD file 取消暂存 或者使用 git rm -f file强制删除
// 如果文件以被提交，则会被删除，在暂存区的状态为delete，可以使用git reset HEAD file 恢复， 然后使用git checkout -- file重新恢复文件
git rm test.js 

git rm -f file // 强制删除暂存的文件，也会删除工作区的

git rm --cached file // 删除暂存区的文件工作区不变
```

## 检出被删除的文件

```
git reset HEAD test.js

//  对工作区的文件进行了修改，如果不想暂存修改，可以使用此命令撤销
git checkout -- test.js
```

## 创建分支

```
git branch [name]

git checkout -b [name]
```

## 切换分支

```
git checkout [name]
```

## 查看文件状态

```
git status [file] // 查看指定文件状态

git status
```

## 提交文件到暂存区

```
git add . // 提交所有文件

git add file // 提交指定文件
```

## 查看提交记录

```
git log // 显示提交信息 多行

git log file

git log --oneline // 一行显示

git reflog // 简单列表形式展示
```

## 撤回提交到暂存区的文件

```
git reset HEAD // 撤销所有提交到暂存区的文件

git reset HEAD file // 撤销指定提交到暂存区的文件
```

## 提交到本地仓库

```
git commit -m '提交信息'  // 提交暂存区所有代码到本地仓库

git commit -m '提交信息' file  // 提交暂存区指定的文件到本地仓库
```

## 修改提交的描述

```
git commit --amend // 修改最后一次提价的描述

```

## 撤销提交的文件

**git reset是回退的意思，不会产生新的版本提交, 实质是移动当前分支中HEAD的指针指向不同的commit版本**

**场景：当我们提交代码之后，发现代码有错误，想回退到之前某一次提交的版本，并且不需要保存错误的版本（也就是那个版本之后的版本），可以使用此命令**

**使用此命令后 本地的库HEAD的指向比远程的要旧, 使用git push命令可能会报错, 需使用git push -f 强制推送**

```
git reset --hard  HEAD^ // 撤销到上一个版本

git reset --hard HEAD^^ // 撤销到上上一个版本

git reset --hard HEAD~n // 撤销到前n个版本

git reset --hard id // 撤销到某一个版本
```

```
git reset --soft  HEAD^
```

## 恢复文件到之前的版本

**适用场景： 如果我们想撤销之前的某一版本，但是又想保留该目标版本后面的版本，记录下这整个版本变动流程，就可以用这种方法**

**git revert操作是一次新的版本提交，HEAD继续向前，本质和普通的git commit一样，仅仅commit内容很特殊**

```
git revert HEAD // 恢复到上一个版本

git revert HEAD~1 // 恢复到上上一次的版本

git revert id // 恢复到id版本的前一个版本

```

**revert过程中可能遇到冲突reverting**

```
git revert --abort // 终止此次的回滚操作
```

## 合并分支

```
git merge [name] // 合并[name]分支到当前分支
```

## 提交本地分支到远程

```
git push origin [name]
```

## 拉取远程分支

```
git fetch origin -u [name]:[name]
```

## 删除本地分支

**删除本地分支需要切换到其他分支才能删除**

```
git branch -D [name]
````

## 删除远程分支

```
git push origin --delete [name]
```

## 查看分支

```
git branch // 查看本地分支

git branch -a // 查看所有分支(包括远程)
```
