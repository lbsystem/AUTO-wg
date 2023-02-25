# AUTO-wg for Mikrotik
这是一个自动化处理wireguard端口出现故障的程序<br />

## 使用方法
 * 三个文件其实wg_server是运行在linux上基于http作为和ros的通讯
 * confing.ini 里面设置通讯密码和服务端口
 * 两个ros脚本文件
 
 * * remoteinterface "xxxx" 这个为linux wg接口名字
 * * localinterface "xxxx" 这个为ROS wg接口名字
 * *  passwd 这个为通讯密码 需要和config password设置一致
 

