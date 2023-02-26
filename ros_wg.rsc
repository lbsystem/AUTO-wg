local port [rndnum from=10000 to=60000]
local passwd "xxxxxx"    
local remoteinterface "xxxx"
local localinterface "xxxx"
log info $localinterface
/tool/netwatch/enable [find comment=wg]
/tool/fetch url="http://xxxx:xxxx/ros?passwd=$passwd&port=$port&interface=$remoteinterface" as-value output=user
/interface/wireguard/peers/set endpoint-port=$port [find interface=$localinterface]
/interface/wireguard/peers/disable [find interface=$localinterface]
/interface/wireguard/peers/enable [find interface=$localinterface]
