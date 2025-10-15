# Yishan_Textui 文本界面系统

## 使用方法

### 方式一：导出函数调用 (Exports)

```lua
-- 显示文本
exports['Yishan_Textui']:DrawText("要显示的文本")

-- 隐藏文本
exports['Yishan_Textui']:HideText()
```

### 方式二：事件触发 (Events)

```lua
-- 显示文本
TriggerEvent('Yishan_Textui:Show', "要显示的文本")

-- 隐藏文本
TriggerEvent('Yishan_Textui:Hide')
```

### 参数说明 (Parameters)

- **text**: 要显示的文本内容
  - 支持普通文本

### 使用示例 (Examples)

```lua
-- 示例1：使用导出函数显示按键提示
exports['Yishan_Textui']:DrawText("[E]按键交互")

-- 示例2：使用事件显示提示文本
TriggerEvent('Yishan_Textui:Show', "请等待...")

-- 隐藏文本
exports['Yishan_Textui']:HideText()
-- 或者
TriggerEvent('Yishan_Textui:Hide')
```

## 支持与帮助

**作者：** 易山  

**联系方式：** [2728496727](https://qm.qq.com/q/EwXcUxAnD2)

**交流反馈群：** [加入群聊](https://qm.qq.com/q/sjsTBlNJss)

如果您需要帮助或有任何问题，欢迎联系我们！