# dcos ui

dcos-ui需要的具体环境配置

node 版本4.4.x  
npm 版本3.9.x

然后

cd dcos-ui  
npm install  
npm start

主页面被托管在localhost:4200

# login authentication

cd loginAuthentication   
npm install  
npm start

需要注意的是，可能需要配置loginAuthentication/config.js文件  
如果不是本地机器访问，需要将localhost换成机器的IP地址

DCOSUI_URL: 'http://localhost:4200'  dcos托管的地址和端口  
LOGINAUTH_URL: 'http://localhost:8080'  登陆认证的地址和端口  
LOGINAUTH_PORT: 8080  登陆认证的端口  

如果修改LOGINAUTH的地址，同时需要修改loginAuthentication/index.html文件中的一些URL数据