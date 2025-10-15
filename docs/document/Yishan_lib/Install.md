# 安装

## 前期工作

- FiveM 服务器
- 支持的框架之一：
  - ESX (es_extended)
  - QB-Core (qb-core)  
  - QBX (qbx_core)
  
::: details 安装所需框架

* ESX：[下载安装ESX Core](https://www.esx-framework.org/)

* QB-Core：[下载安装QB Core](https://qbcore.net/)

* Qbox-Core：[下载安装QBox Core](https://github.com/Qbox-project/qbx_core)
:::

## 安装插件

::: tip 说明
下载Yishan_lib插件并解压到resources文件夹中
:::

1. 将整个 `Yishan_lib` 文件夹复制到你的 FiveM 服务器 `resources` 目录下
2. 确保文件结构如下：
```
resources/
└── Yishan_lib/
    ├── fxmanifest.lua
    ├── config.lua
    ├── core/
    ├── modules/
    ├── examples/
    └── README.md
```
### 2. 配置Server

在你的 `server.cfg` 文件中添加以下行：

```bash
# 确保在框架之后启动
ensure Yishan_lib
```


**重要**: <Badge type="danger" text="确保 Yishan_lib 在你的主框架（ESX/QB-Core/QBX）之后启动" />

## 配置

<Linkcard url="/document/Yishan_lib/Config" title="Yishan_lib配置示例"/>