2-4
# 文档
> [vue手脚架](http://cli.vuejs.org/zh/guide`)
> [vite](http://cn.vitejs.dev)
> [element(适配vue3)](http://element-plus.org`)

* * *

# 全局安装

>安装 nodejs （版本要求 > 12.0）

>安装 nodejs源 
```
    npm config set registry http://registry.npm.taobao.org
```

>安装 yarn
```
    npm install yarn -g
```

>安装 nodejs源
```
    yarn config set registry http://registry.npm.taobao.org/
```
>设置npm下载位置
```
    npm config set prefix "C:\node_package\npm\npm_global"
    npm config set cache "C:\node_package\npm\npm_cache"
    
    > 查看
    npm config list 
```

>设置yarn下载位置
```
    yarn config set global-folder "C:\node_package\yarn\yarn_global"
    yarn config set cache-folder "C:\node_package\yarn\yarn_cache"
    
    > 查看
    yarn global bin
    yarn global dir
```

>安装vue手脚架 
```
    yarn global add @vue/cli
    
    > 删除vue手脚架（如果版本低）
    yarn global remove vue-cli   
    > 升级vue手脚架 
    yarn global upgrade --latest @vue/cli
```
>安装VSCode插件
```
    Eslint
    Vetur
    typescript
    Prettier (可不装)
```
* * *

# 创建项目：
>（不推荐）~~vue create 项目名称~~

>（推荐） 
```
    yarn create @vitejs/app 项目名称
    >（进入项目） cd 项目名称
    >（初 始 化） yarn
    >（启动程序） yarn dev
```


> 安装项目插件
```
    > 项目依赖，生产环境用，打包时候会加进去 
    yarn add vue-router@next vuex@next element-plus axios -S
    > 开发依赖，开发环境用，打包不加进去 
    yarn add sass -D
```

