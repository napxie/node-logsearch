#!/bin/bash
rm -rf sql.log
item=`cat 1.log`
for i in $item
do
sn=`echo ${i##*/}`
path=`echo ${i%/*}`

echo "db.col.insert({name:'$sn',path:'$path'})" >> sql.log
#sql="show dbs"
#echo $sql | mongo log  --shell
done
