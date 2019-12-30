--- 
title: dedecms部署
date: 2019/12/12
tags: 
 - linux
categories:
 - linux
---

::: tip 关于dedecms服务器部署教程
本教程服务器以contOS7.6为例，购买服务器（阿里and腾讯），购买成
后记者公网IP，账号，密码，然后需要准备环境配置nginx+mysql+php
:::

#### 1.0 登录服务器更新

``` 
yum -y update
// 升级所有包，改变软件设置和系统设置,系统版本内核都升级
```
::: tip
等待更新完毕，linux系统安装软件包说明：软件包放在 /usr/local/src/目录下，
软件安装在 /usr/local/ 目录下面。
:::
#### 2.0 安装nginx
+ 2.1 下载nginx包到/usr/local/src/
```
weget nginx-1.9.9.tar.gz
```
+ 2.2 解压 nginx包到/usr/local/src/
```
tar -zxvf nginx-1.9.9.tar.gz
```
+ 2.3 编译安装nginx，需要提前在/usr/local/下创建文件夹nginx
```
ls
//查看目录下的文件
cd nginx-1.9.9
// 切换到下一级目录
./configure --prefix=/usr/local/nginx 
//编译安装到/usr/local/nginx 
```
+ 2.4 安装报错，说明缺少C的环境
```
yum install gcc gcc-c++ ncurses-devel perl
yum -y install make gcc gcc-c++ ncurses-devel
yum -y install zlib zlib-devel
yum -y install openssl openssl--devel
yum install -y pcre-devel
```
+ 2.5 C语言环境安装好后，执行
```
./configure --prefix=/usr/local/nginx
make && make install 
```
+ 2.6 等待上一步安装成功，建立软连接
```
ln –s /usr/local/nginx/sbin/nginx /usr/local/bin/nginx
//查看版本 nginx -v 有就说明成功了
```
+ 2.7 启动nginx
```
cd /usr/local/nginx/sbin/
ls
./nginx
//如果建立了软连接。就直接 nginx，此时的nginx是全局的
```
+ 2.8 浏览器查看是否代理成功，以我的公网IP为例

```
122.152.192或者122.152.192:80
//默认80端口，如果出现了nginx的欢迎界面，说明环境配置成功。
//服务器一定要关闭防火墙
```
+ 2.9 服务器防火墙
```
systemctl status firewalld
//查看状态
systemctl stop firewalld
//关闭
systemctl start firewalld
//启动
systemctl disable firewalld
//开机禁用
systemctl enable firewalld
//开机启用
//防火墙关闭了就可以访问IP了，有条件可以把域名解析到服务器下
```
#### 3.0 安装php
+ 3.1 下载PHP包到 /usr/local/src/下
```
weget php-7.4.0.tar.gz
```
+ 3.2 解压PHP包到 /usr/local/src/下
```
tar -zxvf php-7.4.0.tar.gz
cd php-7.4.0
```
+ 3.3  编译安装php，需要提前在/usr/local/下创建文件夹php
```
./configure --prefix=/usr/local/php --enable-opcache --with-config-file-path=/usr/local/php/etc --with-curl --enable-fpm  --enable-gd --with-iconv --enable-mbstring --with-mysqli=mysqlnd --with-openssl --enable-static --enable-sockets --enable-inline-optimization --with-zlib --disable-ipv6 --disable-fileinfo --disable-debug
```
+ 3.4 编译错误 Package requirements (sqlite3 > 3.7.4) were not met No package 'sqlite3' found

```
yum install libsqlite3x-devel -y
```
+ 3.5 编译错误 error: Package requirements (oniguruma) were not metNo package 'oniguruma' found
```
yum install oniguruma-devel -y
```
+ 3.6 其他编译错误，复制错误百度即可解决，然后执行
```
./configure --prefix=/usr/local/php --enable-opcache --with-config-file-path=/usr/local/php/etc --with-curl --enable-fpm  --enable-gd --with-iconv --enable-mbstring --with-mysqli=mysqlnd --with-openssl --enable-static --enable-sockets --enable-inline-optimization --with-zlib --disable-ipv6 --disable-fileinfo --disable-debug
make && make install 
```
+ 3.7 等待安装完毕，然后配置php
```
cd /usr/local/php/etc/php-fpm.d
ls  //显示www.conf.default文件，用xftp将其复制到/usr/local/php/etc/下，重命名为php-fpm.conf
```
+ 3.8 PHP建立软连接
```
ln -s /usr/local/php/sbin/php-fpm /usr/local/bin/php-fpm
```
+ 3.9 php 启动
```
cd /usr/local/php/sbin
ls
./php-fpm
```
::: tip 测试php
在nginx的html下建立index.php，
:::
```
<?php echo phpinfo();?>
//访问IP/index.php，比如我的122.152.192.48/index.phh，看是否弹出php的界面，没有界面肯定是失败了
```

#### 4.0 安装MySQL
+ 4.1 检测系统是否自带安装 MySQL
```
rpm -qa | grep mysql
```
+ 4.0 如果你系统有安装，那可以选择进行卸载
```
rpm -e mysql　　// 普通删除模式
rpm -e --nodeps mysql　　// 强力删除模式，如果使用上面命令删除时，提示有依赖的其它文件，则用该命令可以对其进行强力删除
```
+ 4.3 下载安装
```
wget http://repo.mysql.com/mysql-community-release-el7-5.noarch.rpm
rpm -ivh mysql-community-release-el7-5.noarch.rpm
yum update
yum install mysql-server
```
+ 4.4 权限设置
```
chown mysql:mysql -R /var/lib/mysql
```
+ 4.5 初始化 MySQL
```
mysqld --initialize
```
+ 4.6 启动MySQL
```
systemctl start mysqld
```
+ 4.6 查看 MySQL 运行状态
```
systemctl status mysqld
```
+ 4.7 验证 MySQL 安装
```
 mysqladmin --version
 //mysqladmin  Ver 8.23 Distrib 5.0.9-0, for redhat-linux-gnu on i386
```
+ 4.8 进入MySQL数据库
```
mysql
show databases; //查看所有的库
Ctrl+c //退出
```
+ 4.9 Mysql安装成功后，默认的root用户密码为空，你可以使用以下命令来创建root用户的密码
```
mysqladmin -u root password "password";
```
+ 4.10 账户密码 连接到Mysql服务器
```
mysql -u root -p
Enter password:password //这里的密码是不显示的
```
+ 4.11 MySQL 启动 关闭 重启命令
```
service mysqld start //启动
service mysqld stop //停止
service mysqld restart //重启
```
+ 5.1 下载dedecms到本地桌面
::: tip
下载dedecms(utf-8)到本地桌面，清空nginx目录下html里的所有文件，然后把刚刚dedecms网站下载的源
码解压找到uploads内的所有内容通过xftp上传到服务器nginx的html目录下,等待上传完毕，然后访问IP/install/index.php或者IP+80/install/index.php端口
:::
```
122.152.192.48/install/index.php或者122.152.192.48:80/install/index.php
// 进入安装界面
```
+ 5.2 用xftp放开服务器nginx下html目录里所有文件的读写权限

+ 5.3 剩下的可以百度安装了,附上百度地址
::: tip
[dedecma安装教程](https://jingyan.baidu.com/article/3aed632eaf125e30108091ec.html)
:::

+ 5.4 说下线上数据库连接吧 ，locahost连接不上就用127.0.0.1连接就OK了

+ 5.5 其他问题，自行百度吧，本人第一份工作是做dedecms网站的，然后就从头到尾部署了一套，
又因为dedecms停更，也不是很中意这个东西，然后希望大家喜欢！

+ 下期介绍doracms，后台基于node.js+vue.js+egg.js+mongodb
