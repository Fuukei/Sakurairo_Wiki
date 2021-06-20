---
title: Webp优化随机图说明
date: 2021-01-24 18:00:00
---
# Webp优化随机图说明

主题内置manifest生成工具，使用python3实现，可生成封面图所需文件，详见这里

## 目录及文件说明
```
.
├── manifest
│   ├── gallary           // 存放原图片
│   ├── jpeg              // 存放生成的缩略图
│   ├── webp              // 存放转换后的封面图
│   ├── manifest.json     // 生成的manifest数据
│   ├── manifest.py       // manifest主程序
│   ├── qt.py             // manifest GUI程序（开发中）
│   ├─── __init__.py      // GUI程序初始化文件
│   └── icon.*            // GUI素材文件
```

## 食用方法：

安装依赖

安装 Python： [https://docs.python.org/zh-cn/3.7/using/index.html](https://docs.python.org/zh-cn/3.7/using/index.html)

安装 PIL：

```Sh
# Linux/Mac Terminal
pip install Pillow
# 如果也安装了 Python 2，需要指定 pip 版本：
pip3 install Pillow

# Windows Powershell 或者 CMD
pip install Pillow
# 如果也安装了 Python 2，需要指定 pip 版本：
pip3 install Pillow
# 如果提示权限不足（[WinError 5] Access is denied），请运行：
pip install Pillow --user
```
### 运行

把图片文件放到 gallary 目录，Windows 可直接双击 manifest.py，或者和其他操作系统一样，在 Terminal、Powershell、CMD 中运行：

```Sh
# 切换到 manifest.py 所在目录：
cd /path/to/manifest/
python manifest.py
# 如果也安装了 Python 2，需要指定 Python 版本：
python3 manifest.py
```
之后根据提示操作即可，程序会生成封面图，本主题为后端获取`manifest.json`，在`iro主题设置`中的`主页设置-封面随机图片选项`中 处填写url并保存好后，点击更新会将`manifest.json` 存入WordPress数据库

将 `manifest` 整个文件夹上传至你的cdn，并 在`iro主题设置`中的`主页设置-封面随机图片选项`中 处填写url并保存，最后**不用**加斜杠（注：留空则使用本地的manifest路径）

eg. manifest的地址是` https://cdn.jsdelivr.net/gh/mashirozx/sakura@3.3.3/manifest/` 只需在后台填写 `https://cdn.jsdelivr.net/gh/mashirozx/sakura@3.3.3` 如需使用本地图片库，将url填写处留空即可

现代浏览器基本都支持Webp，如遇不支持的浏览器，api会自动返回压缩后的普通图片