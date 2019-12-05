# 图片上传 UploadMulti

## 功能

+ 单张或多张上传

## 示例

```html
<template>
  <upload-multi :length="3" v-model="fileList" :fileInfo="fileInfo" ></upload-multi>
</template>
<script>
  import UploadMulti from '@c/UploadMulti'
  export default {
    name: 'Demo',
    components: {
      UploadMulti
    },
    data () {
      return {
        fileList: [],
        fileInfo: {
          url: '/upload/base/file/freeUpload', // 接口地址
          tip: '上传图片',
          h: 120, // 高度
          w: 120 // 宽度
        }
      }
    }
  }
</script>
```

## 属性

名字|类型|是否必需|默认值|说明
:-|:-|:-:|:-:|:-
v-model|Array|否|{uid: '', url: ''}|上传的图片列表信息
length|Number|否|3|最多可上传几张图片
fileInfo|Object|是|{url: '',h: 120,w: 120,tip: '上传图片'}|描述信息
