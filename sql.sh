#!/bin/bash
item=`cat sql.log`
for i in $item
do
echo $i | mongo log  --shell
done
