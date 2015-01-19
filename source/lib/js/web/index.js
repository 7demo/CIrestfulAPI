//注册
$('#registerA').click(function(){
    $('.registerWrapperBg').show();
    $('#registerDiv').show().animate({
        'top':'50%'
    },500);
    return false;
});
//    关闭注册
$('#registerDiv .registerClose').click(function(){
    $('#registerDiv').animate({
        'top':'-420px'
    },500,function(){
        $(this).hide();
    });
    $('.registerWrapperBg').hide();
    return false;
});
//    用户登陆
$('#loginA').click(function(){
    $('.registerWrapperBg').show();
    $('#loginDiv').show().animate({
        'top':'50%'
    },500);
    $('#studentVerify img').click();
    return false;
});

function loginShow(){
    $('.registerWrapperBg').show();
    $('#loginDiv').show().animate({
        'top':'50%'
    },500);
    $('#studentVerify img').click();
    return false;
}
//教师入口-切换到交大账号登录
$('#yousiTeacherLoginSjtu').click(function(){
    $('#sjtuTeacherLogin').show();
    $('#yousiTeacherLogin').hide();
    $('#teacherLoginDiv h1').text('交大教员登录')
});
//教师入口-切换到优思账号登录
$('#yousiTeacherLoginYousi').click(function(){
    $('#sjtuTeacherLogin').hide();
    $('#yousiTeacherLogin').show();
    $('#teacherLoginDiv h1').text('优思教员登录')
});
//教师入口-注册
$('#gotoRegisterTeacher').click(function(){

    $('.registerWrapperBg').show();
    $('#registerDivTeacher').show().animate({
        'top':'50%'
    },500,function(){
        $('#teacherLoginDiv').hide();
    });
    return false;
});
//教师注册--切换到登录
$('#gotoLoginTeacher').click(function(){

    $('.registerWrapperBg').show();
    $('#teacherLoginDiv').show();
    $('#registerDivTeacher').show().animate({
        'top':'-420px'
    },500,function(){
        $(this).hide();

    });
    return false;
});
//关闭用户登录
//    关闭注册
$('#loginDiv .registerClose').click(function(){
    $('#loginDiv').animate({
        'top':'-420px'
    },500,function(){
        $(this).hide();
    });
    $('.registerWrapperBg').hide();
    return false;
});

//教师登录关闭
$('#teacherLoginDiv .registerClose').click(function(){
    $('#teacherLoginDiv').animate({
        'top':'-420px'
    },500,function(){
        $(this).hide();
    });
    $('.registerWrapperBg').hide();
    return false;
});

//教师注册关闭
$('#registerDivTeacher .registerClose').click(function(){
    $('#registerDivTeacher').animate({
        'top':'-420px'
    },500,function(){
        $(this).hide();
    });
    $('.registerWrapperBg').hide();
    return false;
});




//    教师登陆
//$('#teacherLogin').click(function(){
//    $('#teacherLoginDiv').show();
//        return false;
//})

// 学校列表关闭出现
$('#schoolClose').click(function(){
    $('.schoolchoseWrap').animate({
        'marginLeft':'-400px'
    },500,function(){
        $('#registerDiv').animate({
            'marginLeft':'-200px'
        },500)
        $('.schoolchoseWrap').hide();
    });

});

$('#schoolInput').click(function(){
    $('#registerDiv').animate({
        'marginLeft':'-400px'
    },500,function(){
        $('.schoolchoseWrap').show().animate({
            'marginLeft':'0'
        },500)
    })
});
//光标在学校栏，弹出选项
$('#schoolInput').blur(function(){
    $('#schoolClose').click();
})
$('#schoolInput').focus(function(){
    $(this).click();
})


//    高中 初中 切换
$('.schoolCondition span').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
})



$('.registerCtnCtn2Pic span').click(function(){
    $('input[name=picture]').click();
})

$('.registerSex span').click(function(){
    var x = $(this).css('left');
    if(x=="-1px"){
        $(this).attr('style','right:-1px');
        $('input[name=sex]').val("0");
    }else{
        $(this).attr('style','left:-1px');
        $('input[name=sex]').val("1");
    }
})

$('#loginform').ajaxForm({ 
    url: '/Account/login?action=login',
    dataType: 'json',
    success: function(data) {  
        if(data.code==200){
            $('#loginDiv .loading').find('img').attr("src","/Public"+data.data.picture)
            $('#loginDiv .loading').find('p').text(data.data.name);
            $('#loginDiv .loading').animate({
                'top':'0'
            });
            $('#loginError').text('');
            $('#loginError').siblings('img').hide();
            // setTimeout(function(){
            //     location.href = data.desc;
            // },2000)
            location.href = data.desc
        }else{
            $('#studentVerify img').click();
            $('#loginError').text(data.desc);
            $('#loginError').siblings('img').show();
            loginCheckColor(data.desc)
        }
    },
    error: function(arg1, arg2, ex) {  
    }         
});


$('#teacherLoginform').ajaxForm({ 
    url: '/Account/teacherlogin?action=teacherlogin',
    dataType: 'json',
    success: function(data) {  
        if(data.code==200){
            $('#teacherLoginDiv .loading').find('img').attr("src","/Public"+data.data.picture)
            $('#teacherLoginDiv .loading').find('p').text(data.data.name);
            $('#teacherLoginDiv .loading').animate({
                'top':'0'
            });
            $('#teacherLoadError').text('');
            $('#teacherLoadError').siblings('img').hide();
            // setTimeout(function(){
            location.href = data.desc;
        // },2000) 
        }else{
            $('#teacherVerify img').click();
            $('#teacherLoadError').text(data.desc);
            $('#teacherLoadError').siblings('img').show();
            loginCheckColor(data.desc);
        }
    },
    error: function(arg1, arg2, ex) {  
    }         
});


//    
function checkout(key,val,ele){
    var info = {
        phone:{
            0:"手机号码格式不正确",
            1:"请输入手机号码"
        },
        name:{
            0:"请输入6~20位字母或数字"
        },
        email:{
            0:"请输入邮箱",
            1:"邮箱格式不正确"
        },
        pwd:{
            0:"请输入密码",
            1:"密码不能包含特殊字符",
            2:"确认密码与密码不一致，请重新输入",
            3:'请输入6~20位字母或数字'
        },
        realname:{
            0:" 真实姓名不能为空",
            1:"请输入中文"
        },
        safe_code:{
            0:"请输入安全码",
            1:"请输入6位数字",
            2:"安全码不能与密码一致"
        },
        empty:"验证码不能为空"
    }
    var regEx = {
        phone:/^((\(\d{2,3}\))|(\d{3}\-))?1[358]\d{9}$/,
        name: /^[A-Za-z0-9]{6,20}$/,
        safe_code:/^[0-9]{6}$/,
        realname: /^[\u4e00-\u9fa5]+$/,
        idcard: /(^[0-9]{17}[0-9xX]$)|(^[0-9]{15}$)/,
        email: /^[a-z0-9]([a-z0-9]*[-_\.]?[a-z0-9]+)*@([a-z0-9]+(-?[a-z0-9]+)?)(\.[a-z0-9]+(-?[a-z0-9]+))*[\.][a-z]{2,4}$/i,
        password: /[\\.(!@#$%&`:;'")]/           
    }
    var messageout = function(desc,index){
        // $('#registerVerify').siblings('img').click();
        if(ele){
            $(ele+' .registerInfor img').css('display','inline');
            $(ele+' .registerInfor p').text(desc);
        }else{
            $(index+' .registerInfor img').css('display','inline');
            $(index+' .registerInfor p').text(desc);
        }
        
    //        $('#setpwddiv .registerInfor img').css('display','inline')
    //        $('#setpwddiv .registerInfor p').text(desc);
    // $('#registerInforError').siblings('img').show();
    //        $('#registerform .registerInput').eq(index).css('border-color','#AF0202');
    }
    if(key==""){
        return "检验失败";
    }
    switch(key){
        // case "realname":
        //     if(val[0]==""){
        //         messageout(info[key][0],3);
        //         return false;
        //     }else if(regEx.name.test(val[0])){
        //         messageout(info[key][1],3);      
        //         return false;
        //     }else{
        //         return true;
        //     }
        //     break;
        // case "email":
        //     if(val[0]==""){
        //         messageout(info[key][0],0);
        //         return false;
        //     }else if(!regEx.email.test(val[0])){
        //         messageout(info[key][1],0);
        //         return false;
        //     }else{
        //         return true;
        //     }
        //     break;
        case "pwd":
            if(val[0]==""){
                messageout(info[key][0],'#setpwddiv');
                return false;
            }else if(regEx.password.test(val[0])){
                messageout(info[key][1],'#setpwddiv');
                return false;
            }else if(!regEx.name.test(val[0])){
                messageout(info[key][3],'#setpwddiv');      
                return false;
            }else{
                return true;
            }
            break;
        case "verify":
            if(val[0]==""){
                messageout(info['empty'],'#restWrap');
                return false;
            }else{
                return true;
            }
            break;
        case "phone":
            if(val[0]==""){
                messageout(info[key][1],'#restWrap');
                return false;
            }else if(!regEx.phone.test(val[0])){
                messageout(info[key][0],'#restWrap');      
                return false;
            }else{
                return true;
            }
            break;
        case "safe_code":
            if(val[0]==""){
                messageout(info[key][0],'#setpwddiv');
                return false;
            }else if(!regEx.safe_code.test(val[0])){
                messageout(info[key][1],'#setpwddiv');      
                return false;
            }else{
                return true;
            }
            break;
                    
    }
}

//phone number register
$('#getverify').click(function(){

    if($(this).attr('class')=='registerGetNoAfter') return;

    var phone = $('input[name=phone]').val();
    if(!checkout('phone',[phone])) return false;

    //改变按钮样式并清空错误信息
    $('#getverify').addClass('registerGetNoAfter').removeClass('registerGetNoBefore');
    $('#getVerifyVoice').addClass('getVerifyVoice');
    $('#restWrap .registerInfor p').text('')
    
    $.post("/Account/sendverify?action=sendverify", {
        "phone": phone
    },
    function(data){
        if(data.code==200){
            $('#restWrap .registerInfor img').css('display','none');

            //开始计时
            $('#getverify').text('60s后再次获取');
            // $('#getVerifyVoice').siblings('span').text('(60s后再次获取)');
            var expirationTime = (new Date()).getTime()+60000;
            document.cookie = 'expirationTime='+expirationTime;
            document.cookie = 'phoneNo=' + $('input[name=phone]').val()
            setTimer(expirationTime,$('#getverify'));

        }else{

            $('#restWrap .registerInfor img').css('display','inline')
            $('#restWrap .registerInfor p').text(data.desc)

            //清楚按钮状态，变为可点
            $('#getverify').addClass('registerGetNoBefore').removeClass('registerGetNoAfter').text('获取验证码');
        // $('#getVerifyVoice').removeClass('getVerifyVoice').siblings('span').text('');

        }
    }, "json");
    return false;
})

//$('#getVerifyVoice').click(function(){
//    
//    if($(this).attr('class')=='getVerifyVoice') return;
//    var phone = $('input[name=phone]').val();
//    if(!checkout('phone',[phone])) return false;
//
//    //改变按钮样式并清空错误信息
//    $('#getverify').addClass('registerGetNoAfter').removeClass('registerGetNoBefore');
//    $('#getVerifyVoice').addClass('getVerifyVoice');
//    $('#restWrap .registerInfor p').text('')
//    $('#restWrap .registerInfor img').css('display','none');
//    
//    $.post("/sendVoiceVerify", {
//        "phone": phone
//    },
//    function(data){
//        if(data.code==200){
//
//            $('#getverify').text('60s后再次获取');
//            $('#getVerifyVoice').siblings('span').text('(60s后再次获取)');
//            var expirationTime = (new Date()).getTime()+60000;
//            document.cookie = 'expirationTime='+expirationTime;
//            document.cookie = 'phoneNo=' + $('input[name=phone]').val()
//            setTimer(expirationTime);
//
//        }else{
//
//            $('#restWrap .registerInfor img').css('display','inline')
//            $('#restWrap .registerInfor p').text(data.desc)
//            //清楚按钮状态，变为可点
//            $('#getverify').addClass('registerGetNoBefore').removeClass('registerGetNoAfter').text('获取验证码');
//            $('#getVerifyVoice').removeClass('getVerifyVoice').siblings('span').text('');
//
//        }
//            
//    }, "json"
//    );
//    return false;
//})

$('#rest').ajaxForm({ 
    url: '/Account/checkRegister?action=checkRegister',
    dataType: 'json',
    beforeSubmit:function(){
        if(!checkout('phone',[$('input[name=phone]').val()])) return false;
        if(!checkout('verify',[$('input[name=verify]').val()])) return false;
    },
    success: function(data) {  
        if(data.code==200){
            $('#setpwddiv').show();
            $('#restWrap .registerInfor img').css('display','none')
            $('#restWrap .registerInfor p').text('')
            $('#restWrap').hide();
            $('#setpwddiv input[name=phone]').val(data.data.phone);
        }else{
            $('#restWrap .registerInfor img').css('display','inline')
            $('#restWrap .registerInfor p').text(data.desc)
        }
    }    
});

$('#setpwd').ajaxForm({ 
    url: '/Account/register?action=register',
    dataType: 'json',
    beforeSubmit:function(){
        if(!checkout('pwd',[$('#setpwddiv input[name=pwd]').val()])){
            return false;
        }
        // else if(!checkout('safe_code',[$('#setpwddiv input[name=safe_code]').val()])){
        //     return false;
        // }
    },
    success: function(data) {  
        if(data.code==200){
            $('#setpwddiv .registerInfor img').css('display','none')
            $('#setpwddiv .registerInfor p').text('')
            location.href = "/release"
        }else{
            $('#setpwddiv .registerInfor img').css('display','inline')
            $('#setpwddiv .registerInfor p').text(data.desc);
        }
    }    
});


//教师获取验证码
/*
 * 添加验证
 */
$('#teachergetverify').click(function(){
    if($(this).attr('class')=='registerGetNoAfter') return;
    var phone = $('#teacherRegForm input[name=phone]').val()||'';
    if(!checkout('phone',[phone],'#teacherRegForm')) return false;

    //改变按钮样式并清空错误信息
    $('#teachergetverify').addClass('registerGetNoAfter').removeClass('registerGetNoBefore');
    $('#teacherRegForm .registerInfor p').text('');
    
    $.post("/Account/teacherSendverify?action=teacherSendverify", {
        "phone": phone
    },
    function(data){
        if(data.code==200){
            $('#teacherRegForm .registerInfor img').css('display','none');

            //开始计时
            $('#teachergetverify').text('60s后再次获取');
            // $('#getVerifyVoice').siblings('span').text('(60s后再次获取)');
            var expirationTime = (new Date()).getTime()+60000;
            document.cookie = 'expirationTime='+expirationTime;
            document.cookie = 'phoneNo=' + $('input[name=phone]').val()
            setTimer(expirationTime,$('#teachergetverify'));

        }else{

            $('#teacherRegForm .registerInfor img').css('display','inline')
            $('#teacherRegForm .registerInfor p').text(data.desc)

            //清楚按钮状态，变为可点
            $('#teachergetverify').addClass('registerGetNoBefore').removeClass('registerGetNoAfter').text('获取验证码');
        // $('#getVerifyVoice').removeClass('getVerifyVoice').siblings('span').text('');
        }
    }, "json");
    return false;
})



//教师注册
$('#teacherRegForm').ajaxForm({ 
    url: '/Account/teacherRegister?action=teacherRegister',
    dataType: 'json',
    beforeSubmit:function(){
        if(!checkout('phone',[$('#teacherRegForm input[name=phone]').val()],'#teacherRegForm')){
            return false;
        }else if(!checkout('pwd',[$('#teacherRegForm input[name=pwd]').val()],'#teacherRegForm')){
            return false;
        }else if(!checkout('verify',[$('#teacherRegForm input[name=verify]').val()],'#teacherRegForm')){
            return false;
        }
        return true;
    },
    success: function(data) {  
        if(data.code==200){
            $('#teacherRegForm .registerInfor img').css('display','none')
            $('#teacherRegForm .registerInfor p').text('')
            location.href = "/Teacher/myset?action=myset"
        }else{
            $('#teacherRegForm .registerInfor img').css('display','inline')
            $('#teacherRegForm .registerInfor p').text(data.desc);
        }
    }    
});







//获取焦点时候，注册登陆框变色
$('.registerInput input').focus(function(){
    $(this).parent().css('border-color','#3CB950');
    $(this).css('color','#313131');
});
$('.registerInput input').blur(function(){
    $(this).parent().css('border-color','#CFD0D1');
    if($(this).val()==''){
        $(this).css('color','#A9A9A9');
    }else{
        $(this).css('color','#313131');
    }
});

//修改输入框文字颜色


//隐藏域显示密码
$('#registerPwTxtBtn').click(function(){
    $('.registerPwWrap .registerInput').eq(0).hide().siblings().show()
})
$('#registerPwBtn').click(function(){
    $('.registerPwWrap .registerInput').eq(1).hide().siblings().show()
})
$('#registerPwTxt').keyup(function(){
    if($(this).val()!=''){
        $(this).css('color','#313131');
    }else{
        $(this).css('color','#A9A9A9');
    }
    $('#registerPw').val($(this).val());
})

//注册验证表单并改变颜色
function checkInputColor(data){
    switch(data){
        case '帐号已经存在！':
        case '请使用邮箱！':
            $('#registerform .registerInput').eq(0).css('border-color','#AF0202');
            break;
        case '密码必须！':
            $('#registerform .registerInput').eq(1).css('border-color','#AF0202'); 
            $('#registerform .registerInput').eq(2).css('border-color','#AF0202');   
            break;
        case '姓名必须填写！':
            $('#registerform .registerInput').eq(3).css('border-color','#AF0202');  
            break;
        case '验证码必须！':
        case '验证码不正确':
            $('#registerform .registerInput').eq(4).css('border-color','#AF0202');  
            break;
    }
}
//学生登录表单验证
function loginCheckColor(data){
    switch(data){
        case '用户名或密码错误':
        case '密码必须！':
            $('#loginform .registerInput').eq(1).css('border-color','#AF0202');
            break;
        case '用户名必须！':
        case '请使用邮箱！':
            $('#loginform .registerInput').eq(0).css('border-color','#AF0202');
            break;

    }
}
//教师登录表单验证
function loginCheckColor(data){
    switch(data){
        case '用户名或密码错误':
        case '密码必须！':
            $('#teacherLoginform .registerInput').eq(1).css('border-color','#AF0202');
            break;
        case '用户名必须！':
        case '请使用邮箱！':
            $('#teacherLoginform .registerInput').eq(0).css('border-color','#AF0202');
            break;
    }
}

//登录注册切换
$('#gotoRegister').click(function(){
    $('#loginDiv').css('top','-420px').hide();
    $('#registerDiv').show().css('top','50%');
    return false;
})
$('#gotoLogin').click(function(){
    $('#loginDiv').show().css('top','50%');
    $('#registerDiv').css('top','-420px').hide();
    return false;
})



//学生个人设置切换
$('#studentInfo li').click(function(){
    $(this).addClass('active').siblings('li').removeClass('active');
});


//为每个页面nav设置 active
function navActive(){
    var curURL = window.location.pathname;
    if(curURL=='/'){
        addActive(-1) 
        return
    }
    var reg = [/(\/(Answer))/,/(\/(Tutor))/,/(\/(Question))/];
    for(var i=0;i<reg.length;i++){
        if(curURL.search(reg[i])!=-1) addActive(i)
    }
    // reg.forEach(function(val,index){
    //     switch(index){
    //         case 0:
    //             if(curURL.search(val)!=-1) addActive(index)
    //             break;
    //         case 1:
    //             if(curURL.search(val)!=-1) addActive(index)
    //             break;
    //         case 2:
    //             if(curURL.search(val)!=-1) addActive(index)
    //             break;
    //     }
    // });
    function addActive(index){
        index++;
        $('.nav li').eq(index).addClass('active').siblings().removeClass('active')
    }
}
navActive();


//返回提示信息
function message(id,message,type,displaytype){
    switch(type){
        case "success":
            $('#'+id+' div').removeClass("submitTipsError");
            $('#'+id+' div').addClass("submitTipsSuc");
            $('#'+id+' span').text(message)
            if(displaytype=="inline-block"){
                $('#'+id).css("display","inline-block");
            }else{
                $('#'+id).show();
            }
            break;
        case "error":
            $('#'+id+' div').removeClass("submitTipsSuc");
            $('#'+id+' div').addClass("submitTipsError");
            $('#'+id+' span').text(message)
            if(displaytype=="inline-block"){
                $('#'+id).css("display","inline-block");
            }else{
                $('#'+id).show();
            }
            break;
    }
}


//判断是否登陆
function jumpUrl(s,u,t){
    if(s!=""){
        if(t=="_blank"){
            window.open(u)
        }else{
            location.href = u;
            return false;
        }
    }else{
        loginShow();
    }
}

//定时器 ,time 为过期时间
function setTimer(time,ele){
    ele.addClass('registerGetNoAfter').removeClass('registerGetNoBefore');
    // $('#getVerifyVoice').addClass('getVerifyVoice');
    var flag = setInterval(function(){
        var nowTime = (new Date()).getTime();
        if(time-nowTime>0){
            var milSeconds = time-nowTime;
            var second,minute;
            var minute = Math.floor(milSeconds/1000/60);
            var second = Math.floor(milSeconds/1000%60)<10?'0'+Math.floor(milSeconds/1000%60):Math.floor(milSeconds/1000%60);
            ele.text(second+'s后再次获取');
        // $('#getVerifyVoice').siblings('span').text('('+second+'s后再次获取)');
        }else{
            clearInterval(flag);
            ele.addClass('registerGetNoBefore').removeClass('registerGetNoAfter').text('获取验证码');
        // $('#getVerifyVoice').removeClass('getVerifyVoice').siblings('span').text('');
        }
    },1000);
}


//进行浏览器检测，如果为ie9前的版本则提醒用户进行升级(jquery静态插件)
//version:为检测到的版本号number:9,如果为检测到的低版本ie则返回true,否则返回false
// $.extend({
//     browerCheck:function(version){
//         var browerName = navigator.appName;
//         if(browerName!=="Microsoft Internet Explorer") return false; //不是ie
//         var _version = navigator.appVersion .split(";")[1].replace(/[ ]/g,"");
//         for(var i=6;i<=version;i++){
//             if(_version==='MSIE'+i+'.0') return true;
//         }
//         return false;
//     }
// });

$(function(){
    var checkResult = function(version){
        var browerName = navigator.appName;
        if(browerName!=="Microsoft Internet Explorer") return false; //不是ie
        var _version = navigator.appVersion .split(";")[1].replace(/[ ]/g,"");
        for(var i=6;i<=version;i++){
            if(_version==='MSIE'+i+'.0') return true;
        }
        return false;
    }
    if(checkResult(10) || navigator.userAgent.indexOf("Firefox")>0){
        $('.select').children('label').hide();
    }
})
//获取url参数
function getURLParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}