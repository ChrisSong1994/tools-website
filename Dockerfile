# 拷贝build 资源到镜像，并启动
FROM  node:20-alpine  AS tools-builder

# 创建工作目录
WORKDIR /usr/src/app

# 设置 npm 镜像源
RUN npm config set registry https://registry.npmmirror.com/

# 安装 pnpm 并设置 pnpm 镜像源
RUN npm install -g pnpm \
    && pnpm config set registry https://registry.npmmirror.com/

# 复制包管理文件
COPY package.json  pnpm-lock.yaml ./

# 安装依赖包
RUN pnpm install 

# 复制源代码
COPY . .

# 构建
RUN npm run build

# 启动
EXPOSE 3000

CMD [ "npm", "start" ]
