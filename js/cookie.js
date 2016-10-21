function setCookie(name, value, iDay) { //设置cookie过期时间，(名称=name,值=value,过期天数=iDay)
    var oDate = new Date();//获取当前时间
    oDate.setDate(oDate.getDate() + iDay);//设置过期时间
    document.cookie = name + '=' + value + ';expires=' + oDate;//设置cookie过期日期
}

function getCookie(name) {//读取cookie(名称=name)
    var arr = document.cookie.split('; ');//获取cookie数组并且用‘; ’分割
    for (var i = 0; i < arr.length; i++) {//循环数组
        var arr2 = arr[i].split('=');//设置arr分割‘=’
        if (arr2[0] == name) {//判断名称是否等于传进来的名称，是则弹出值，
            return arr2[1];
        }
    }
    return '';//第一次进入则弹出空
}

function removeCookid(name) {//清除cookie
    setCookie(name, 1, -1);//-1天之后清除cookie
}