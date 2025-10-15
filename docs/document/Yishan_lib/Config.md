# 配置
示例配置顺序：
```bash
# 框架
ensure es_extended
# 或者
ensure qb-core
# 或者  
ensure qbx_core

# 依赖资源
ensure oxmysql

# Yishan_lib
ensure Yishan_lib

# 其他资源
ensure name_resources
```

### 3. 配置库设置

编辑 `config.lua` 文件来自定义库的行为：

```lua
Config = {}

-- 框架设置 Framework Settings
-- 选项 Options: 'auto', 'esx', 'qb', 'qbx'
Config.Framework = 'auto'

-- 背包系统设置 Inventory System Settings  
-- 选项 Options: 'auto', 'esx', 'qb', 'ox', 'qs'
Config.Inventory = 'auto'

-- 目标系统设置 Target System Settings
-- 选项 Options: 'auto', 'ox', 'qb', 'qtarget', 'bt'
Config.Target = 'auto'

-- 组织机构设置 Society/Organization Settings
-- 选项 Options: 'auto', 'esx', 'qb', 'qbx'
Config.Society = 'auto'

-- 调试设置 Debug Settings
Config.Debug = {
    Enabled = false,             -- 启用调试模式
    PrintFramework = true,       -- 打印检测到的框架
    PrintInventory = false,      -- 打印检测到的背包系统
    PrintTarget = false,         -- 打印检测到的目标系统
    PrintSociety = false,        -- 打印检测到的组织系统
}
```

### 4. 数据库配置（如果需要）

如果你的插件使用了载具系统或其他需要数据库的功能，确保以下表格存在：

#### ESX 数据库表格
```sql
-- ESX 通常已包含这些表格
-- owned_vehicles 表格用于载具系统
```

#### QB-Core/QBX 数据库表格
```sql
-- QB-Core/QBX 通常已包含这些表格
-- player_vehicles 表格用于载具系统
```

### 5. 重启服务器

1. 停止你的 FiveM 服务器
2. 启动服务器
3. 检查控制台输出确认 Yishan_lib 正确加载

## 常见问题

### Q: 显示 "No supported framework detected!"
**A**: 确保你的框架资源已正确启动，并且 Yishan_lib 在框架之后启动。

### Q: 某些功能不工作
**A**: 检查：
1. 框架是否正确检测
2. 相关依赖资源是否已启动
3. 数据库连接是否正常
4. 控制台是否有错误信息

### Q: 如何强制使用特定框架？
**A**: 在 `config.lua` 中设置：
```lua
Config.Framework = 'esx'  -- 或 'qb', 'qbx'
```

### Q: 如何强制使用特定背包系统？
**A**: 在 `config.lua` 中设置：
```lua
Config.Inventory = 'ox'  -- 或 'esx', 'qb', 'qs'
```

### Q: 如何强制使用特定目标系统？
**A**: 在 `config.lua` 中设置：
```lua
Config.Target = 'ox'  -- 或 'qb', 'qtarget', 'bt'
```

### Q: 如何恢复自动检测？
**A**: 在 `config.lua` 中设置：
```lua
Config.Framework = 'auto'
Config.Inventory = 'auto'
Config.Target = 'auto'
Config.Society = 'auto'
```

### Q: 如何禁用调试信息？
**A**: 在 `config.lua` 中设置：
```lua
Config.Debug.Enabled = false
```


