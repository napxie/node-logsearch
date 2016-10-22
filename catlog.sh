#!/bin/bash

store_path="file_120.txt"
if [ -f $store_path ]; then
    rm -r $store_path
fi

date_start=$(date +%s)
echo $date_start > a.log
#设置查找目录
dir="/store/120/"
<<EOF
#获取查找的文件名
if [ 'x' == 'x'$1 ]; then
    echo "Usage $0 search_file"
    exit
fi
EOF
#变量定义
dir_arr=$(find  $dir -type d -print;)


#获取所有的文件
for dir in ${dir_arr[*]}
do
    find $dir -type f | grep ".log$" >>$store_path
done
date_end=$(date +%s)
echo $date_end >> a.log
date_sum=$(date_end-date_start)
echo $date_sum >> a.log

