# 平台公共UI模块

## 按钮

[效果预览](http://192.168.1.28:3004/#/table)

```js
<div class="top-btn-group">
  <a-button icon="plus" class="add-btn">新增</a-button>
  <a-button icon="export" class="export-btn">导入</a-button>
  <a-button icon="export" class="export-all-btn">批量导入</a-button>
  <a-button icon="delete" class="del-btn">批量删除</a-button>
</div>
```

## 表格操作按钮

[效果预览](http://192.168.1.28:3004/#/table)

```js
<a-tooltip placement="topLeft" title="详情">
  <a-button size="small" class="detail-action-btn" icon="ellipsis"></a-button>
</a-tooltip>
<a-tooltip placement="topLeft" title="权限管理">
  <a-button size="small" class="power-action-btn" icon="lock"></a-button>
</a-tooltip>
<a-tooltip placement="topLeft" title="用户列表">
  <a-button size="small" class="user-action-btn" icon="team"></a-button>
</a-tooltip>
<a-tooltip placement="topLeft" title="新增">
  <a-button size="small" class="add-action-btn" icon="plus"></a-button>
</a-tooltip>
<a-tooltip placement="topLeft" title="编辑">
  <a-button size="small" class="edit-action-btn" icon="form"></a-button>
</a-tooltip>
<a-tooltip placement="topLeft" title="删除">
  <a-button size="small" class="del-action-btn" icon="delete"></a-button>
</a-tooltip>
```

