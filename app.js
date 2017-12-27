var init = require('./models/init');

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var api = require('./route.api.js');
var page = require('./route.page.js')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', page);
app.use('/api',api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


//思考一下，一个blog需要哪些功能？
/* 文章：
 *    1.创建  => 创建页面
 *    2.保存  => 保存成功反馈
 *    3.修改 => 修改页面
 *    4.用户系统 => 注册页面，数据库注册(后台)，
 *    5.评论 => HTML上添加comment区域 + 数据库的互动
 * API: 提供文章和用户的数据
 *    1.文章
 *    2.用户数据
 * 展示：
 *    1.良好的页面设计
 *    2.良好的排版
 *    3.充实的内容
*/

//ejs 封装的关于渲染引擎方面的事情，我们需要关注的只有两件事情：1.用哪个模板？2.给什么数据？


//windows 快捷键
/* 
Ctrl Shift系列
 * CS + N 创建一个新文件夹
 * 
 * win + D 显示/隐藏桌面
 * win + home 最小化活动桌面窗口之外的所有应用
 * win + tab 打开任务视图
 * win + shift + ↑ 上下拉伸
 * win + T 浏览任务栏上的应用
 * win + S 打开搜索
 * 
 * 
*/

/*
 * 服务端渲染 : 整个页面的构建都在服务端完成 => 效率低，多请求时服务器容易宕机
 * 客户端渲染 : 给出页面模板，再发起数据请求，拿到数据浏览器再进行渲染。
 * 
 * Note1:服务器响应的瓶颈可能有几个方面:
 *          1. 页面构建
 *          2. 数据库抓数据
 * 从某种意义上讲，数据库的处理时间不管是采用服务器渲染还是客户端渲染都没办法改变它的性能。
 * 这是一个专门的知识点。
 * 但至少客户端显然能减轻WebApp的一部分压力。甚至如果把页面模板部署到cdn节点上，服务器返回页面模板的处理压力就变成了0。
 * 
 * Note2:现在的发送请求的方式是socket或者socket.io这类能够保持长连接的方式
 *      这样的实现，不需要多次开启TCP发送request。
 * 
 * 
*/