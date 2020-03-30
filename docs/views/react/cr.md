--- 
title: react脚手架安装及使用
date: 2019/10/12
tags: 
 - react
categories:
 - react
---
# react安装环境

::: tip 前言
前提[node](http://nodejs.cn/)和[git](https://git-scm.com/)默认安装，然后安装react脚手架。
测试是否安装成功 node -v 查看node版本，npm -v 查看npm版本
:::

#### 一、脚手架工具create-react-app安装

```sh
npm install -g create-react-app

```
#### create-react-app的使用

1.创建react项目 react-app

```sh
create-react-app react-app

```
2.启动项目 react-app

```sh
cd react-app
npm start
```
3.项目打包 react-app

```sh
npm run build
```
4.暴露配置文件

```sh
npm run eject
```
5. 暴露配置文件配置@路径，找到webpack.config.js里的 alias: {}，加入以下配置
```webpack.config.js
// @路劲配置
'@':path.join(__dirname,'../src'),
```

::: tip 
如果下载速度太慢，可以把脚手架的基础摸版上传github，这是我的[react-app](https://github.com/tanxi2019/react)模板
:::
