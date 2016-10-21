/**
 * Created with IntelliJ IDEA.
 * User: Administrator
 * Date: 15-6-4
 * Time: 下午4:18
 * To change this template use File | Settings | File Templates.
 */
var mongo = require('mongodb');
var host = 'localhost';
var port = 27017;

var server = new mongo.Server(host,port,{auto_reconnect:true});
var db = new mongo.Db('log',server,{salf:true});

db.open(function(err,db){
    if(err){
        throw err;
    }else {
        console.log('成功连接数据库');

        db.close();
    }
});
db.findOne({"name" : "HSY63300059.log"}, function (err, doc){
});

db.on('close',function(err,db){
    if(err){
        throw err;
    }else{
        console.log("成功关闭数据库");
    }
});
