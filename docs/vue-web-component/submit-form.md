# 表单提交 SubmitForm

## 功能

- 文本框

- 文本区域

- 下拉选择框

- 单选框

- 多选框

- 图片上传

- 日期时间选择框(单个或区间)

## 示例

```html
<template>
  <submit-form
    ref="form"
    @submit-form="submitForm"
    :title="title"
    v-model="formStatus"
    :form-data="formData"
  >
    <div slot="upload">
      <upload-multi
        :length="3"
        v-model="fileList"
        :fileInfo="fileInfo"
      ></upload-multi>
    </div>
  </submit-form>
</template>
<script>
  import SubmitForm from "@c/SubmitForm";
  import UploadMulti from "@c/UploadMulti";
  // 表单提交数据
  const formData = [
    {
      value: "userName",
      initValue: "",
      type: "input",
      label: "姓名",
      required: false, // 默认为true，不用填写
      readonly: true, // 是否只读,
      disabled: true, // 是否禁用
      len: 3, // 固定长度
      max: 4, // 最大长度
      placeholder: "请输入姓名",
      regular: "password" // 正则验证{密码：password，网址：url，IP：ip，手机号：phone，邮箱：email}
    },
    {
      value: "sex",
      initValue: [],
      list: [
        {
          key: 1,
          val: "男"
        },
        {
          key: 2,
          val: "女"
        },
        {
          key: 3,
          val: "未知"
        }
      ],
      type: "select",
      label: "性别",
      placeholder: "请选择性别"
    },
    {
      value: "enjoy",
      initValue: [],
      list: [
        {
          key: 1,
          val: "篮球"
        },
        {
          key: 2,
          val: "足球"
        },
        {
          key: 3,
          val: "羽毛球"
        }
      ],
      type: "checkbox",
      label: "兴趣爱好",
      placeholder: "请选择兴趣爱好"
    },
    {
      value: "marry",
      initValue: 1,
      list: [
        {
          key: 1,
          val: "已婚"
        },
        {
          key: 2,
          val: "未婚"
        }
      ],
      type: "radio",
      label: "是否已婚",
      placeholder: "请选择是否已婚"
    },
    {
      type: "upload",
      label: "上传图像"
    },
    {
      value: "birthday",
      type: "singleTime",
      label: "生日",
      initValue: "",
      placeholder: "请选择生日"
    },
    {
      value: "workTime",
      type: "rangeTime",
      label: "工作时间",
      initValue: "",
      placeholder: "请选择工作时间"
    }
  ];
  export default {
    name: "Demo",
    components: {
      SubmitForm,
      UploadMulti
    },
    data() {
      return {
        fileInfo: {
          url: "/upload/base/file/freeUpload", // 接口地址
          tip: "上传图片",
          h: 120, // 高度
          w: 120 // 宽度
        },
        fileList: [],
        title: "新增应用",
        formStatus: false,
        formData
      };
    },
    methods: {
      // 提交表单
      submitForm(values) {
        console.log(values);
        setTimeout(() => {
          this.$refs.form.reset(); // 成功调用
          // this.$refs.form.error() // 失败调用
        }, 2000);
      },
      // 添加编辑表单
      addApp(type, record) {
        this.formStatus = true;
        if (type) {
          // 编辑 回填数据
          this.formData = this.$tools.fillForm(formData, record.record);
        } else {
          // 添加
          this.formData = formData;
        }
      }
    }
  };
</script>
```

## 属性

| 名字      | 类型    | 是否必需 | 默认值 | 说明                                       |
| :-------- | :------ | :------: | :----: | :----------------------------------------- |
| v-model   | Boolean |    是    | false  | 是否显示弹出框                             |
| title     | String  |    是    |   ''   | 表单标题                                   |
| form-data | Array   |    是    |   []   | 提交表单信息                               |
| ref       | String  |    是    |  form  | 获取表单组件实例属性，提交成功或失败后操作 |

## 事件

| 名字        | 参数   | 说明             |
| :---------- | :----- | :--------------- |
| submit-form | Object | 点击提交按钮触发 |
