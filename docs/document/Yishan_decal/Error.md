# 常见错误

## 重载后YTD类型的涂鸦不渲染

::: danger 警告
YTD类型涂鸦需要重启服务器！！！
:::

## 新加涂鸦不显示

### 1. 图片作为涂鸦

* 查看添加方法所有配置是否正确

* `fileName`必须要和你的图片名字匹配
```lua

{
    label = '涂鸦名字',
    fileName = '涂鸦图片文件名', -- 将文件扩展名更改为与图片名字匹配（.png、.webp 或 .jpg）
    identifiers = {
        ['myIdentifier'] = true,
    },
},

```

### 2. YTD作为涂鸦

* 需要重启服务器才可以正常渲染

* 制作好的`.ytd`文件是否放入`Yishan_decal/stream`

* 查看配置`Yishan_decal/decals.lua`文件中是否正确

<Badge type="danger" text="textureName" />是在制作 `.ytd` 中的文件命名


```lua
{
   label = '涂鸦名字',
   fileName = '涂鸦图片文件名',         --如：Yishan.png
   textureName = '涂鸦纹理名字',        --如：Yishan(.ytd中图片的名字)
   textureDict = '涂鸦的纹理字典',      -- 如：Yishan_test.ytd(刚才创建的.ytd文件名)
   identifiers = {
      ['myIdentifier'] = true,
    },
},

```

## 其他错误

*  **如果遇到新的错误和BUG请联系进行反馈**

* 遇到无法解决的错误可联系我反馈  

**联系方式：** <Badge type="info" text="易山" />:[2728496727](https://qm.qq.com/q/EwXcUxAnD2)

**交流反馈群：** <Badge type="info" text="售后群" />:[加入群聊](https://qm.qq.com/q/sjsTBlNJss)

