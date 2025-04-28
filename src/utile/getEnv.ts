

//加载Env配置文件的的函数 
export function warppEnv(envConf: Recordable): ViteEnv {
    const ret: any = {};
    for (const envName of Object.keys(envConf)) {
        //Object.keys是JS内置的静态方法，接受一个对象
        //返回一个数组，成员是参数对象自身的所有属性的键名


        let realName = envConf[envName].replace(/\\n/g, '\n');
        //envConf[envName]是JS中访问对象属性的一种方式
        //可以像是数组一样，通过索引访问对象的属性值
        //此处是获取对象中符合数组中的键名的键值

        //replace接受两个参数，第一个参数是被替换的模式（正则表达式）
        //第二个参数是一个函数，返回替换后的新字符串
        //这样就会把所有的\n替换成真正的换行符，返回一个新的字符串

        //所以，此时realName是一个字符串

        realName = realName === 'true' ? true : realName === 'false' ? false : realName;
        //三元运算符嵌套，如果realName等于true，那么返回true
        //如果realName等于false，那么返回false
        //如果realName既不是true也不是false，那么返回realName

        //需要把bool从字符串单独抽出来，因为JSON.parse只能解析字符串


        if (envName === 'VITE_PORT') {
            realName = Number(realName);
        }
        //单独处理VITE_PORT，因为它是一个数字

        if (envName === 'VITE_PROXY') {
            try {
                realName = JSON.parse(realName.replace(/'/g, '"'));
            } catch (error) {
                console.log(error);
            }
        }
        //单独处理VITE_PROXY，配置代理的环境变量
        //把单引号替换成双引号，然后解析成JSON对象

        ret[envName] = realName;
        //把realName赋值给ret[envName]，键名是envName，键值是realName

        process.env[envName] = realName;
        //将处理后的环境变量同步到Node.js的全局环境对象中
        //保证环境变量在整个Node.js进程中都可用，避免不一致性
    }

    return ret;
    //返回处理后的环境变量对象
}