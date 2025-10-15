# Yisshan_Progressbar进度条

## ✨ 主要特性

- **🎨 现代化UI设计** - 采用 Poppins 字体，简洁美观的进度条界面
- **🎭 动画支持** - 支持播放动画字典中的动画或场景任务
- **🔧 道具系统** - 可同时附加两个道具到玩家身上
- **🎮 控制管理** - 灵活的控制禁用选项（移动、战斗、鼠标等）
- **⚡ 高性能** - 优化的代码结构，流畅的动画效果
- **🔄 事件驱动** - 支持开始、进行中、完成等多种回调事件
- **❌ 可取消操作** - 支持取消进度条
- **💀 死亡处理** - 可配置死亡时是否继续执行

## 🚀 功能亮点

### 进度条配置选项
- **duration** - 进度条持续时间（毫秒）
- **label** - 显示的操作标签
- **canCancel** - 是否允许取消
- **useWhileDead** - 死亡时是否可用
- **disarm** - 是否解除武装

### 控制禁用选项
- 禁用移动
- 禁用载具移动
- 禁用鼠标
- 禁用战斗

### 动画系统
- 支持动画字典 + 动画名称
- 支持场景任务
- 自定义动画标志

### 道具系统
- 主道具和副道具
- 自定义骨骼绑定
- 精确的坐标和旋转控制

## 🎯 适用场景

- 🍔 进食/饮水系统
- 🔧 修理/制作系统
- 💊 医疗/治疗系统
- 🏪 购买/交易系统
- 🚗 载具相关操作
- 🎮 任何需要进度反馈的交互

## 使用方法

### 导出函数调用 (Exports)
 **示例：**
 ```lua
exports['Yishan_Progressbar']:Progress({
    name = "random_task",
    duration = 5000,
    label = "Doing something",
    useWhileDead = false,
    canCancel = true,
    controlDisables = {
        disableMovement = false,
        disableCarMovement = false,
        disableMouse = false,
        disableCombat = true,
    },
    animation = {
        animDict = "mp_suicide",
        anim = "pill",
        flags = 49,
    },
    prop = {},
    propTwo = {}
}, function(cancelled)
    if not cancelled then
        -- finished
    else
        -- cancelled
    end
end)
```
## 支持与帮助

**作者：** 易山  

**联系方式：** [2728496727](https://qm.qq.com/q/EwXcUxAnD2)

**交流反馈群：** [加入群聊](https://qm.qq.com/q/sjsTBlNJss)

如果您需要帮助或有任何问题，欢迎联系我们！