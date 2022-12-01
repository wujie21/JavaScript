var db=require('./mysql');
// 查询实例
db.query('select * from employees limit 0,1', [],function(results,fields){
    console.log('查询结果：');
    console.log(results);
});