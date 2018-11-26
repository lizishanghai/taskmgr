# 第一阶段：构建 Angular 应用 ###

# 编译这个阶段需要的是 node 镜像，所以我们以 'node:9-alpine' 为基础
# 另外给这一阶段起个友好名称叫 builder，以便于后面第二阶段可以方便的引用第一阶段的成果
FROM node:9-alpine as builder

# 单独拷贝 'package.json'，在下一层安装相关依赖
COPY package.json ./

# 把 node_modules 保存在单独的一层以避免以后每次构建时都重复做 npm install
# 由于 npm 的访问速度实在感人，所以我们采用阿里团队提供的镜像
# RUN npm config set registry https://registry.npm.taobao.org 
RUN npm i 
RUN mkdir /ng-app 
RUN cp -R ./node_modules ./ng-app
# RUN npm i && mkdir /ng-app && cp -R ./node_modules ./ng-app

# 指定工作目录
WORKDIR /ng-app

COPY . .

# 在生产模式下编译 Angular 应用
ARG env=production
RUN npm run build -- --prod --configuration $env

# 第二阶段：设置 Nginx 服务器 ###

FROM nginx:1.13.8-alpine

# 将我们的 nginx 配置文件拷贝到镜像中的 /etc/nginx/conf.d/ 目录
COPY ./docker/nginx/conf.d/default.conf /etc/nginx/conf.d/

# 删除默认站点
RUN rm -rf /usr/share/nginx/html/*

# 从 'builder' 阶段将编译后的文件拷贝到 nginx 默认的站点目录 ‘/usr/share/nginx/html’
COPY --from=builder /ng-app/dist /usr/share/nginx/html

# 执行命令启动 Nginx
CMD ["nginx", "-g", "daemon off;"]
