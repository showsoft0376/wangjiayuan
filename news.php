<?php
$url1='http://temp.163.com/special/00804KVA/cm_yaowen.js?callback=data_callback';//首页
$url2='http://temp.163.com/special/00804KVA/cm_guonei.js?callback=data_callback';//国内新闻
$url3='http://temp.163.com/special/00804KVA/cm_guoji.js?callback=data_callback';//国内新闻
$retData = file_get_contents($url1);
if($_GET['type']==1)
	$retData = file_get_contents($url2);
else if($_GET['type']==2)
	$retData = file_get_contents($url3);
$retData=str_replace('data_callback(','',$retData);
$retData=substr($retData,0,strlen($retData)-1);
$retData=str_replace('\'','\"',$retData);
$retData=iconv("GB2312","UTF-8//IGNORE",$retData);
$obj=json_decode($retData,true);
$JsonCount=count($obj);
$ArrJson=array();
for($n=0;$n<$JsonCount;$n++)
{
	$arr = array('tlastid'=>strip_tags($obj[$n]["tlastid"]), 'title'=>$obj[$n]["title"], 'time'=>date("Y-m-d H:i:s",strtotime($obj[$n]["time"])));
	array_push($ArrJson,$arr);
	//echo strip_tags($obj[$n]["tlastid"])."   ".$obj[$n]["title"]."   ".date("Y-m-d H:i:s",strtotime($obj[$n]["time"]))."<br>";
}
echo json_encode($ArrJson);
//print_r($obj);
?>