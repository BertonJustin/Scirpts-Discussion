# 安装

## 第1步：下载和准备文件

### 从 FiveM Keymaster 下载脚本
* 访问 [FiveM Portal](https://portal.cfx.re/) 门户网站

* 使用您的帐户进行登录

* 在 **授予资产**（Granted Assets） 中找到 `Yishan_decal` 脚本

* 从 **Keymaster** 下载脚本文件

### 解压和安装文件

在服务器上解压下载的文件。

将解压的文件放到到 FiveM 服务器的文件夹 `resources`

## 第2步：将脚本添加到服务器配置

**编辑 `server.cfg`**

* 打开你的 FiveM 服务器根目录中的文件 `server.cfg`

* 添加以下行以确保 Yishan_decal 脚本在你的服务器启用：
```bash
ensure Yishan_lib
```
