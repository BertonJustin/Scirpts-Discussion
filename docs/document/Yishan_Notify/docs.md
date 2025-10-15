# Yishan_Notify 通知系统

## 功能特性

- ✨ 6种不同类型的通知样式
- 📍 3个可选的显示位置（左侧、右侧、顶部）
- 🎯 智能通知合并（相同通知会显示计数徽章）
- 🎨 支持 HTML 标签自定义文本样式
- ⏱️ 可自定义显示时长
- 🎵 通知音效提示
- 💫 流畅的动画效果

## 使用方法

### 客户端调用 (Client Side)

```lua
exports['Yishan_Notify']:Hints("标题", "文本", time, 'type', 'position')
```

### 服务端调用 (Server Side)

```lua
TriggerClientEvent('Yishan_Notify:Hints', source, "标题", "文本", time, 'type', 'position')
```

### 参数说明 (Parameters)

- **time**: 通知显示时长，单位为毫秒（可选参数，默认3000毫秒）
  - 1000 = 1秒
  - 5000 = 5秒

- **type**: 通知类型（可选参数，默认'success'）
  - `success` - 成功提示（绿色，默认）
  - `info` - 信息提示（蓝色）
  - `warning` - 警告提示（黄色）
  - `error` - 错误提示（红色）
  - `phonemessage` - 短信提示（橙色）
  - `neutral` - 中性提示（灰色）

- **position**: 显示位置（可选参数，默认'right'）
  - `right` - 右侧显示（默认）
  - `top` - 顶部显示
  - `left` - 左侧显示

### 使用示例 (Examples)

```lua
-- 最简单的调用（使用所有默认值：3秒, success类型, 右侧显示）
exports['Yishan_Notify']:Hints("成功", "操作已完成！")

-- 直接指定类型（使用默认时间3秒）
exports['Yishan_Notify']:Hints("信息", "服务器正在维护中...", 'info')

-- 直接指定类型和位置（使用默认时间3秒）
exports['Yishan_Notify']:Hints("错误", "操作失败！", 'error', 'left')

-- 自定义时间和类型
exports['Yishan_Notify']:Hints("警告", "即将维护...", 5000, 'warning')

-- 完整参数调用
exports['Yishan_Notify']:Hints("错误", "操作失败，请重试！", 2000, 'error', 'left')

-- 使用 HTML 标签自定义样式
exports['Yishan_Notify']:Hints("提示", "你获得了 <span style='color:#4ade80'>$100</span> 奖励！", 5000, 'success')

-- 短信通知示例
exports['Yishan_Notify']:Hints("短信", "<span style='color:#fb923c'>小明：</span> 你在哪里？", 5000, 'phonemessage', 'top')

-- 长文本通知
exports['Yishan_Notify']:Hints("长文本", "这是一条较长的通知消息，用于测试通知框对长文本的显示效果和自动换行功能。", 5000, 'neutral', 'left')
```

### 测试命令 (Test Commands)

资源内置了一些测试命令，可以在游戏中使用：

```
/success  - 测试成功通知（带HTML样式）
/info     - 测试信息通知（顶部显示）
/error    - 测试错误通知（左侧显示）
/warning  - 测试警告通知（右侧显示）
/phone    - 测试短信通知（顶部显示）
/longtext - 测试长文本通知（左侧显示）
```

> **注意**：这些测试命令仅供开发测试使用，正式环境建议删除或注释掉 client.lua 中的相关代码。

## 高级功能

### HTML 标签支持

通知消息支持 HTML 标签，您可以使用 `<span>` 标签来自定义文本颜色和样式：

```lua
exports['Yishan_Notify']:Hints(
    "提示", 
    "玩家 <span style='color:#60a5fa'>易山</span> 加入了服务器", 
    4000, 
    'info'
)
```

### 智能通知合并

当在短时间内触发多个相同的通知时，系统会自动合并它们并显示计数徽章，避免屏幕被相同通知刷屏。

## 支持与帮助

**作者：** 易山  

**联系方式：** [2728496727](https://qm.qq.com/q/EwXcUxAnD2)

**交流反馈群：** [加入群聊](https://qm.qq.com/q/sjsTBlNJss)

如果您需要帮助或有任何问题，欢迎联系我们！