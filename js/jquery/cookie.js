function setCookie(name, value, iDay) { //����cookie����ʱ�䣬(����=name,ֵ=value,��������=iDay)
    var oDate = new Date();//��ȡ��ǰʱ��
    oDate.setDate(oDate.getDate() + iDay);//���ù���ʱ��
    document.cookie = name + '=' + value + ';expires=' + oDate;//����cookie��������
}

function getCookie(name) {//��ȡcookie(����=name)
    var arr = document.cookie.split('; ');//��ȡcookie���鲢���á�; ���ָ�
    for (var i = 0; i < arr.length; i++) {//ѭ������
        var arr2 = arr[i].split('=');//����arr�ָ=��
        if (arr2[0] == name) {//�ж������Ƿ���ڴ����������ƣ����򵯳�ֵ��
            return arr2[1];
        }
    }
    return '';//��һ�ν����򵯳���
}

function removeCookid(name) {//���cookie
    setCookie(name, 1, -1);//-1��֮�����cookie
}