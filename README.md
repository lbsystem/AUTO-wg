# AUTO-wg for Mikrotik
这是一个自动化处理wireguard端口出现故障的程序<br />

## 使用方法
* 把 ros_wg.rsc 保存到RouterOS 的脚本里面 可以复制粘贴
* * 重命名后记得在netwatch 上设置对应的脚本名字
 * 两个文件其中server_wg是运行在linux上基于http与ros保持通讯
 * confing.ini 里面设置通讯密码和服务端口
 * 这个ros_wg.rsc脚本文件
 * * remoteinterface "xxxx" 这个为linux wg接口名字
 * * localinterface "xxxx" 这个为ROS wg接口名字
 * *  passwd 这个为通讯密码 需要和config password设置一致
 * * 注意修改ROS脚本里的url 对应为你的ip:port
 * 设置一个netwatch
 *  * host=<对端wg接口IP> <br />
     type=icmp interval=10s timeout=100ms start-delay=10s <br />
      down-script=:delay 4s<br />
     /system script run <ROS脚本名字><br />
     :delay 5s<br />
     /tool/netwatch/disable [find comment=wg]<br />
     /tool/netwatch/enable [find comment=wg] <br />
     test-script="" packet-interval=100ms packet-count=6 http-codes="" <br />
     status=up<br />
     
##### 更换这个URL 为你的ip:port /tool/fetch url="`http://xxxx:xxxx/ros`?passwd=$passwd&port=$port&interface=$remoteinterface" as-value output=user
 
### 如是7.7以后版本的ROS 脚本里面必须勾选 Don't Require Permissions 选项
## 如没有Node 运行环境可直接下载release 里发布编译好的可执行文件
