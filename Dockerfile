# 拷贝build 资源到镜像，并启动
FROM  node:20

# 创建工作目录
WORKDIR /usr/src/app

# copy file
COPY public ./public
COPY src ./src
COPY next.config.mjs .
COPY tsconfig.json .
COPY index.d.ts .
COPY package.json  .
# 安装依赖
RUN npm install --resistry=https://registry.npmmirror.com/

# 构建
RUN npm run build

# 启动
EXPOSE 3000:3000
CMD [ "npm", "start" ]
