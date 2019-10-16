--- 
title: Vue脚手架安装及使用
date: 2019/10/12
tags: 
 - Vue
categories:
 - Vue
---
# vue2.0

::: tip 前言
前提[node](http://nodejs.cn/)和[git](https://git-scm.com/)默认安装，然后安装vue-cli脚手架。
测试是否安装成功 node -v 查看node版本，npm -v 查看npm版本
:::

1.全局安装脚手架工具vue-cli，测试是否安装成功vue -V

```sh
npm install --global vue-cli

```

2.全局安装webpack，测试是否安装成功webpack-v

```sh
npm install -g webpack

```
3.创建vue项目vue-app

```sh
vue init webpack vue-app

```
3.运行项目vue-app(开发环境)

```sh
cd vue-app
npm i
npm run dev

```
3.运行项目vue-app(生产环境)

```sh
cd vue-app
npm run build

```
4.在浏览器上输入：localhost:8080

# vue 3.0

::: tip
环境安装不变，改变的是脚手架命令和项目结构。
:::

1.创建项目vue-app

```sh
vue create vue-app

```
2.vdefault是使用默认配置,Manually select features 是 自定义配置,需要什么安装什么

3. vue ui生成vue项目
