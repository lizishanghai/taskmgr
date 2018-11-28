## Frontend  
     front end of task manager. 这是一个Docker的练习项目. 可以从docker直接运行本项目
     $ docker run —rm -d -p 80:80 sjtuzhangli/frontend:v1

## 创建Docker镜像的三种方式
	1. 预先编译好，把dist内容放入nginx   //ok  link 
	  /* 用nginx image,  拷贝dist中所有 进image中 nginx的 html目录，run nginx   */
		  cd dist 
		  docker build -t angular5 .
	 	  docker run -d --name demo1 -p 8082:80 angular5
		// 每次运行命令复杂 
		 
	2. 先用node编译angular，再放入nginx  //ok  link (推荐用这种方式)
		 /* image1-用node image, 拷贝所有文件， run npm install 和 build */
		 /* image2-用nginx image,  拷贝image1 中的所有文件到 image2中nginx的html目录，*/ 
		  docker build —rm -f frontend/Dockerfile -t frontend:v1 frontend
	    docker run —rm -d -p 80:80 frontend:v1 
	    docker tag frontend:v1 sjtuzhangli/frontend:v1 
		  docker login
	    docker push sjtuzhangli/frontend:v1

	3. 直接用node编译运行 //ok  link （生成的image太大）
		/* 用node image， npm install & angular-cli，拷贝文件，ng serve */
	  /* change the version of node and angular/cli */
	  docker run -it -v ${PWD}:/usr/src/app -p 4200:4200 angular-docker-image
	  //进程要开着 
  
## 启动Docker容器：
	启动这个容器再简单不过，做好端口映射， -p <本地端口>:<容器端口> 用于指定本地和容器的端口映射，
	注意前面的端口是本地端口。
	docker run --rm -d -p 443:443 -p 80:80 gtm:dev
	
？？  hwo to 使用 docker-compose 组织复杂的环境配置?
