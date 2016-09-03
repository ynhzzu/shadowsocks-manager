app.controller("AdminServerController",function(e,r,n,i){e.setTitle("服务器管理"),e.setFabButtonClick(function(){n.go("admin.addServer")}),e.init=function(){e.publicInfo.servers&&(e.serverList=e.publicInfo.servers)},e.init(),e.serverPage=function(e){n.go("admin.serverPage",{serverName:e})},e.$on("initPublicInfo",function(r,n){"server"===n&&e.init()})}).controller("AdminAddServerController",function(e,r,n,i){e.setTitle("添加服务器"),e.setMenuButton("admin.server"),e.server={},e.addServer=function(){e.loading(!0),n.post("/api/admin/server",{name:e.server.name,ip:e.server.ip,port:e.server.port,method:e.server.method}).then(function(r){e.loading(!1),e.publicInfo.servers.push(r.data),i.go("admin.server")},function(r){e.loadingMessage({message:"添加服务器失败",right:function(){e.loading(!1)}})})},e.cancel=function(){i.go("admin.server")}}).controller("AdminEditServerController",function(e,r,n,i,t){e.setTitle("编辑服务器"),e.setMenuButton("admin.server"),e.init=function(){if(e.publicInfo.servers)return e.server=e.publicInfo.servers.filter(function(e){return e.name===t.serverName})[0],e.server?void 0:i.go("admin.server")},e.init(),e.$on("initPublicInfo",function(r,n){"server"===n&&e.init()}),e.addServer=function(){e.loading(!0),n.put("/api/admin/server",{name:e.server.name,ip:e.server.ip,port:e.server.port,method:e.server.method}).then(function(r){e.loading(!1),i.go("admin.serverPage",{serverName:t.serverName})},function(r){e.loadingMessage({message:"编辑服务器失败",right:function(){e.initPublicInfo({loading:!1}),i.go("admin.serverPage",{serverName:t.serverName})}})})},e.cancel=function(){i.go("admin.serverPage",{serverName:t.serverName})}}).controller("AdminServerPageController",function(e,r,n,i,t,o){e.setTitle("服务器设置"),e.setMenuButton("admin.server"),e.setFabButtonClick(function(){i.go("admin.addAccount",{serverName:t.serverName})}),e.init=function(){if(e.publicInfo.servers)return e.server=e.publicInfo.servers.filter(function(e){return e.name===t.serverName})[0],e.server?void 0:i.go("admin.server")},e.init(),e.$on("initPublicInfo",function(r,n){"server"===n&&e.init()}),e.editServer=function(e){i.go("admin.editServer",{serverName:e})},e.deleteServer=function(r){var a=o.confirm().title("").textContent("真的要删除服务器["+r+"]吗？").ariaLabel("delete").ok("确定").cancel("取消");o.show(a).then(function(){return e.loading(!0),n["delete"]("/api/admin/server",{params:{name:r}})}).then(function(){e.publicInfo.servers=e.publicInfo.servers.filter(function(e){return e.name!==t.serverName}),i.go("admin.server")})["catch"](function(e){o.cancel(a),i.go("admin.server")})},e.deleteAccount=function(r){var i=o.confirm().title("").textContent("真的要删除帐号["+r+"]吗？").ariaLabel("delete").ok("确定").cancel("取消");o.show(i).then(function(){o.cancel(i),e.loading(!0),n["delete"]("/api/admin/account",{params:{name:t.serverName,port:r}}).then(function(r){e.server.account=r.data.account,e.loading(!1)},function(r){e.loadingMessage({message:"删除账号失败",right:function(){e.loading(!1)}})})},function(){o.cancel(i)})},e.editAccount=function(e){i.go("admin.editAccount",{serverName:t.serverName,accountPort:e.port})},e.onSwipeLeft=function(){if(!(e.publicInfo.servers.length<=1)){var r;if(e.publicInfo.servers.forEach(function(e,n){e.name===t.serverName&&(r=n)}),r||0===r){var n=0;r<e.publicInfo.servers.length-1&&(n=r+1);var o=e.publicInfo.servers[n].name;i.go("admin.serverPage",{serverName:o})}}},e.onSwipeRight=function(){if(!(e.publicInfo.servers.length<=1)){var r;if(e.publicInfo.servers.forEach(function(e,n){e.name===t.serverName&&(r=n)}),r||0===r){var n=e.publicInfo.servers.length-1;0!==r&&(n=r-1);var o=e.publicInfo.servers[n].name;i.go("admin.serverPage",{serverName:o})}}}}).controller("AdminAddAccountController",function(e,r,n,i,t){e.setTitle("添加帐号"),e.setMenuButton("admin.serverPage",{serverName:t.serverName}),e.account={},e.addAccount=function(){e.loading(!0),n.post("/api/admin/account",{name:t.serverName,port:e.account.port,password:e.account.password,userName:e.account.userName}).then(function(r){var n=e.publicInfo.servers.filter(function(e){return e.name===t.serverName})[0];r.data.users=[],e.account.userName&&r.data.users.push(e.account.userName),n.account.push(r.data),i.go("admin.serverPage",{serverName:t.serverName})},function(r){e.loadingMessage({message:"添加账号失败",right:function(){i.go("admin.serverPage",{serverName:t.serverName})}})})},e.cancel=function(){i.go("admin.serverPage",{serverName:t.serverName})}});