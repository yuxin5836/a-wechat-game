create database rjgc;
use rjgc;
create table user_prop(
id            char(10)   NOT NULL COMMENT'用户账号',
code       char(12) NOT NULL COMMENT'密码',
acc_prop int(5)     NOT NULL COMMENT'加速道具',
re_prop   int(5)     NOT NULL COMMENT'复活道具',
cash        int(10)   NOT NULL COMMENT'货币',
PRIMARY KEY(id)
)Engine=INNODB DEFAULT CHARSET=UTF8;

INSERT INTO user_prop(id,code,acc_prop,re_prop,cash) VALUES('test','123456',5,5,100);