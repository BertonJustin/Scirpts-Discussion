# Yishan_Text3D

一个用于 FiveM 服务器的现代化 UI 交互系统。该资源使用流畅、现代化的 HTML 界面取代了传统的 DrawText3D 功能，支持基于距离的缩放和视觉自定义。

![1](https://github.com/user-attachments/assets/af286d9d-b2f8-496c-b8a6-6a7266aa3143)
![2](https://github.com/user-attachments/assets/66dc0beb-b411-4f0d-9500-c4d056cbb0ca)


## 功能特性

- 现代化、简洁的 UI 设计，带有浮动交互元素
- 基于距离的交互显示
  - 1-5 米范围：仅显示交互按键（如 "E"）的蓝色按钮
  - 小于 1 米时：显示完整的交互文本，按键单独样式化
- 无背景 - 简洁的 UI 元素，带有细微的文字阴影以提高可见性
- 所有 UI 元素的颜色均可配置
- 性能明显优于原生 DrawText3D
- 流畅的动画和低延迟更新
- 按键高亮显示，带有脉冲发光效果
- 易于与现有脚本集成
- 全面的测试环境用于预览 UI

## 安装

1. 将 `Yishan_Text3D` 文件夹上传到服务器的 resources 目录
2. 在 server.cfg 中添加 `ensure Yishan_Text3D`
3. 重启服务器

## 使用方法

### 基础示例

在脚本中替换传统的 DrawText3D 调用：

**旧方法：**
```lua
DrawText3D(coords.x, coords.y, coords.z, "按 E 打开")
```

**新方法：**
```lua
exports['Yishan_Text3D']:DrawText3D(coords, "~key~E~key~ 打开")
```

### 按键元素格式化

使用 `~key~` 分隔符来高亮显示文本中的按键：

- 单个按键：`"~key~E~key~ 打开"`
- 多个按键：`"Press ~key~E~key~ 打开或 ~key~ESC~key~ 取消"`

### 自定义颜色的高级用法

您可以自定义交互的外观：

```lua
exports['Yishan_Text3D']:AddInteraction(coords, "~key~E~key~ 打开", {
    colors = {
        primary = {r = 255, g = 255, b = 255, a = 255},   -- 按键颜色（白色）
        secondary = {r = 255, g = 255, b = 255, a = 255}, -- 文本颜色（白色）
        background = {r = 59, g = 130, b = 246, a = 200}  -- 背景颜色（蓝色）
    }
})
```

## 配置

您可以在 `client/config.lua` 中自定义行为：

```lua
Config = {
    -- 距离设置
    FullVisibilityDistance = 1.0,  -- 显示完整文本的距离
    IconVisibilityDistance = 5.0,  -- 仅显示按键的距离
    
    -- 性能设置
    UpdateFrequency = 50,          -- UI 更新频率（毫秒）
    
    -- 按键配置
    KeySeparator = '~key~'         -- 按键高亮的分隔符
}
```

## 性能考虑

该资源设计为高性能：
- 使用优化的更新频率（默认 50 毫秒）
- 仅渲染合理距离内的交互
- 玩家死亡时自动清理交互
- 定期清理陈旧的 UI 元素

## 支持与帮助

**作者：** 易山  

**联系方式：** [2728496727](https://qm.qq.com/q/EwXcUxAnD2)

**交流反馈群：** [加入群聊](https://qm.qq.com/q/sjsTBlNJss)

如果您需要帮助或有任何问题，欢迎联系我们！
