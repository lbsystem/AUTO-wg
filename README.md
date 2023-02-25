# AUTO-wg for Mikrotik
这是一个自动化处理wireguard端口出现故障的程序<br />

## 使用方法
 * 三个文件其实wg_server是运行在linux上基于http作为和ros的通讯
 * confing.ini 里面设置通讯密码和服务端口
 * 一个ros脚本文件
 * * remoteinterface "xxxx" 这个为linux wg接口名字
 * * localinterface "xxxx" 这个为ROS wg接口名字
 * *  passwd 这个为通讯密码 需要和config password设置一致
 * 设置一个netwatch
 *  * host=<对端wg接口IP> type=icmp interval=10s timeout=100ms start-delay=10s 
     up-script="" down-script=:delay 4s
     /system script run <wg脚本名字>
     :delay 5s
     /tool/netwatch/disable [find comment=wg]
     /tool/netwatch/enable [find comment=wg] 
     test-script="" packet-interval=100ms packet-count=6 http-codes="" 
     status=up
 

