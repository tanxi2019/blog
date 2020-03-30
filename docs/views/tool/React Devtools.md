--- 
title: React Devtools 调试工具
date: 2019-10-16
tags: 
 - tool
categories:
 - tool
---
# React Devtools

1.去git上克隆[react-devtools](https://github.com/facebook/react-devtools/tree/v3)文件到本地

```sh
git clone https://github.com/facebook/react-devtools

```
2.安装npm依赖,cnpm淘宝镜像

```sh
npm i 或者 cnpm i

```
3.安装依赖成功后，我们便可以打包一份扩展程序出来

```sh
npm run build:extension:chrome 

```
4.打开chrome扩展程序chrome://extensions/，加载已解压的扩展程序，选择第3步中的生成的unpacked文件夹。这时就会添加一个新的扩展程序react-devtools，并在你的浏览器右上角会有个react标志, 就表示成功啦。 
