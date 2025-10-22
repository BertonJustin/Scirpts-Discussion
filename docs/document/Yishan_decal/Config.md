# 自定义涂鸦

如何添加自定义涂鸦，将为您提供将自定义图片添加到`Yishan_decal`

## 打开 (Yishan_decal/decals.lua)

### 如何添加自定义图片

要添加自定义图片，您需要修改 `Yishan_decal/decals.lua` 文件。请按照以下步骤操作：

## 使用图片文件添加自定义涂鸦  (推荐)
1. **将您的图片文件  (`.png`, `.webp`, 或 `.jpg`) 复制到 `Yishan_decal/assets` 文件夹中**

2. **打开配置文件  (`Yishan_decal/decals.lua`)**

3. **像这样添加涂鸦 ：**


```lua
{
    label = '涂鸦名字',
    fileName = '涂鸦图片文件名', -- 将文件扩展名更改为与图片名字匹配（.png、.webp 或 .jpg）
    identifiers = {
        ['myIdentifier'] = true,
    },
},
```

4. **重启脚本或输入 `refresh` 然后在服务器控制台中 `ensure Yishan_decal`**

## 使用 YTD 文件添加自定义涂鸦

1. **打开 OpenIV**

2. **启用编辑模式**

3. **点击新建按钮**

4. **选择 "纹理字典 (.ytd)"**

5. **输入纹理字典名称如：(`Yishan_test.ytd`)**

6. **在 GTA V 文件夹中找到刚才创建的纹理字典并打开它**

7. **点击导入, 选择所有要转换为涂鸦的图片**

8. **选择 DXT5 作为纹理格式**

9. **保存并将制作好的文件 <Badge type="tip" text=".ytd" /> 复制到 `Yishan_decal/stream`**

10. **将图片复制到 `Yishan_decal/assets`**

11. **打开配置文件 （`Yishan_decal/decals.lua`），并像这样添加涂鸦：**

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

12. **重启脚本服务器以使贴纸生效**

## 使用说明

对于图片的涂鸦,请确保文件位于 `assets` 文件夹中存在。支持的格式有 `.png`、`.webp` 和 `.jpg`

对于 `YTD` 贴纸,需要将纹理文件放置在 `assets` 文件夹中并设置 `fileName`

重启服务器或刷新并重载插件以激活新涂鸦