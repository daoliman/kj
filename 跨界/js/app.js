/**
 * Created by Administrator on 2017/10/26.
 */
    //<!-------插入导航------>
    //    var m1='<div class="m1"> <div class="m2"> <img src="kj.jpg">' +
    //            ' </div> <header id="header" class="am-topbar"> <img src="kj.jpg"> ' +
    //            '<button style="float: left;background: #f8f8f8;border-style: none"' +
    //            ' class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only"' +
    //            'data-am-collapse="{target: "#doc-topbar-collapse"}"><span  class="am-sr-only">导航切换</span> ' +
    //    '<span style="color:#000"  class="am-icon-bars"></span></button> <div class="am-collapse am-topbar-collapse" ' +
    //    'id="doc-topbar-collapse"> <ul id="ul001" class="am-nav am-nav-pills am-topbar-nav"> ' +
    //    '<li class="am-active"><a href="#">首页</a></li> <li><a href="#">关于我们</a></li> <li><a href="#">新闻资讯</a>' +
    //            '</li> <li><a href="#">经营方向</a></li> <li><a href="#">合作伙伴</a></li> <li><a href="#">联系我们</a></li> ' +
    //            '</ul> </div> </header> </div>';
    //    $(document).ready(function(){
    //            $("#m").append(m1);
    //    });


//动态插入顶部导航栏
        window.onload=insert();

    function  insert(){
        var m=document.getElementById('m');
        var m1=document.createElement('div');//创建类m1
        m1.className='m1';
        m.append(m1);
        //创建m2
        var m2=document.createElement('div');
        var a =document.createElement('a');
        m2.className='m2';
        a.href='#';
        m1.append(m2);
        m2.append(a);
        //创建img
        var img=document.createElement('img')
        img.src='img/kj.jpg';
        a.append(img);
        //插入header
        var insertText =' <header id="header" class="am-topbar"> <img src="img/kj.jpg"> ' +
            '<button id="butns" style="float: left;background: #f8f8f8;border-style: none"' +
            ' class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only"' +
            'data-am-collapse="{target: "#doc-topbar-collapse"}"><span  class="am-sr-only">导航切换</span> ' +
            '<span  class="am-icon-bars"></span></button> </header> ';
        $(".m1").append(insertText);
        // 创建div
        var div1=document.createElement('div');
        div1.className='am-collapse am-topbar-collapse';
        div1.id='doc-topbar-collapse';
        header.append(div1);
        //创建ul
        var ul=document.createElement('ul');
        ul.className='am-nav am-nav-pills am-topbar-nav';
        ul.id='ul001';
        div1.append(ul);
        //循环创建导航
        var as=['首页','关于我们','新闻资讯','经营方向','合作伙伴'];
        for(var i=0;i<as.length;i++){
            var li=document.createElement('li');
            li.style.zIndex='2';
            ul.append(li);
            var a=document.createElement('a');
            a.innerHTML=as[i];
            li.append(a);
        }

//插入导航下拉图标
    var li=document.createElement('li');
    var i =document.createElement('i');
    var a=document.createElement('a');
    li.id='li1';
    i.className='iconfont icon-sanjiaoxingzhankai';
    i.style.fontSize='20px';
    i.style.color='#c8c8c8';
    i.style.marginLeft='2px';
    a.innerHTML='联系我们';
    ul.append(li);
    li.append(a);
    a.append(i);
    //联系我们下拉菜单
    $("#li1").mouseover(function(){
        $("#pcxiala").css("display","block");
    })
    $("#li1").mouseout(function(){
        $("#pcxiala").css("display","none");
    })
    $("#pcxiala").mouseover(function(){
        $(this).css("display","block");
    })
    $("#pcxiala").mouseout(function(){
        $(this).css("display","none");
    })
    //点击切换导航
    $("#butns").click(function(){
        $("#doc-topbar-collapse").toggle();
    });

}

//-------------动态插入电脑端底部----------
    window.onload=function(){
        //创建pcfoot1
        var div1=document.createElement('div');
        div1.id='pcfoot1';
        $("#pcfoot").append(div1);
        //创建img
        var div2=document.createElement('div');
        var img=document.createElement('img');
        div1.append(div2);
        img.src='img/kj.png';
        div2.append(img);
        //创建div
        var div =document.createElement('div');
        var h3=document.createElement('h3');
        var a=document.createElement('a');
        var a1=document.createElement('a');
        var a2=document.createElement('a');
        var p1=document.createElement('p');
        var p2=document.createElement('p');
        a.href='#';
        h3.innerHTML='新闻动态';
        h3.style.fontSize='1.2vw';
        p1.innerHTML='公司新闻';
        a1.href='#';
        p2.innerHTML='行业新闻';
        a2.href='#';
        div1.append(div);
        div.append(a)
        a.append(h3);
        div.append(a1);
        a1.append(p1);
        div.append(a2);
        a2.append(p2);
        //创建div
        var div =document.createElement('div');
        var h3=document.createElement('h3');
        var a=document.createElement('a');
        var a1=document.createElement('a');
        var a2=document.createElement('a');
        var p1=document.createElement('p');
        var p2=document.createElement('p');
        a.href='#';
        h3.innerHTML='合作商户';
        h3.style.fontSize='1.2vw';
        p1.innerHTML='中德新能源与环保科技研究院';
        a1.href='#';
        p2.innerHTML='青岛跨界商城';
        a2.href='#';
        div1.append(div);
        div.append(a)
        a.append(h3);
        div.append(a1);
        a1.append(p1);
        div.append(a2);
        a2.append(p2);
        //创建div
        var div =document.createElement('div');
        var h3=document.createElement('h3');
        var a=document.createElement('a');
        var a1=document.createElement('a');
        var a2=document.createElement('a');
        var p1=document.createElement('p');
        var p2=document.createElement('p');
        var a3=document.createElement('a');
        var p3=document.createElement('p');
        a.href='#';
        h3.innerHTML='服务中心';
        h3.style.fontSize='1.2vw';
        p1.innerHTML='人才招聘';
        a1.href='#';
        p2.innerHTML='联系我们';
        a2.href='#';
        p3.innerHTML='7*24小时服务';
        a3.href='#';
        div1.append(div);
        div.append(a)
        a.append(h3);
        div.append(a1);
        a1.append(p1);
        div.append(a2);
        a2.append(p2);
        //创建div
        var div =document.createElement('div');
        var h3=document.createElement('h3');
        var a=document.createElement('a');
        var a1=document.createElement('a');
        var a2=document.createElement('a');
        var p1=document.createElement('p');
        var p2=document.createElement('p');
        a.href='#';
        h3.innerHTML='关于我们';
        h3.style.fontSize='1.2vw';
        p1.innerHTML='公司简介';
        a1.href='#';
        p2.innerHTML='部门简介';
        a2.href='#';
        div1.append(div);
        div.append(a)
        a.append(h3);
        div.append(a1);
        a1.append(p1);
        div.append(a2);
        a2.append(p2);
        //创建div
        var div=document.createElement('div');
        div.id='pcfoot2';
        div.innerHTML='Copyright © 2017-2020,www.qdkuajie.com,All rights reserved 版权所有';
        div1.append(div);

        //       ----插入电脑底部JQuery方法----
        //var footer='<div id="pcfoot1"> <div><img src="kj.png"></div>' +
        //    ' <div> <h3>新闻动态</h3> <p>公司新闻</p> <p>行业新闻</p> </div> ' +
        //    '<div> <h3>合作商户</h3> <p>中德新能源与环保科技研究院</p> <p>青岛跨界商城</p> </div> ' +
        //    '<div> <h3>服务中心</h3> <p>人才招聘</p> <p>联系我们</p> <p>7*24小时服务</p> </div> ' +
        //    '<div> <h3>关于我们</h3> <p>公司简介</p> <p>部门简介</p> </div> ' +
        //    '<div id="pcfoot2">Copyright © 2017-2020,www.qdkuajie.com,All rights reserved 版权所有</div> ' +
        //    '</div>';
        //$(document).ready(function(){
        //    $("#pcfoot").append(footer);
        //});
//---------------动态插入手机底部--------------

        //创建div
        var div=document.createElement('div');
        $("#sjfoot").append(div);
        //创建img
        var img=document.createElement('img');
        img.src='img/kj.png';
        div.append(img);
        //创建div
        var div =document.createElement('div');
        var h3=document.createElement('h3');
        var a=document.createElement('a');
        var a1=document.createElement('a');
        var a2=document.createElement('a');
        a.href='#';
        h3.innerHTML='新闻动态';
        h3.style.fontSize='15px';
        a1.innerHTML='公司新闻';
        a1.href='#';
        a1.style.marginRight='30px';
        a2.innerHTML='行业新闻';
        a2.href='#';
        $("#sjfoot").append(div);
        div.append(a);
        a.append(h3);
        div.append(a1);
        div.append(a2);
        //创建div
        var div =document.createElement('div');
        var h3=document.createElement('h3');
        var a=document.createElement('a');
        var a1=document.createElement('a');
        var a2=document.createElement('a');
        a.href='#';
        h3.innerHTML='合作商户';
        h3.style.fontSize='15px';
        a1.innerHTML='中德新能源与环保科技研究院';
        a1.href='#';
        a1.style.marginRight='30px';
        a2.innerHTML='青岛跨界商城';
        a2.href='#';
        $("#sjfoot").append(div);
        div.append(a);
        a.append(h3);
        div.append(a1);
        div.append(a2);
        //创建div
        var div =document.createElement('div');
        var h3=document.createElement('h3');
        var a=document.createElement('a');
        var a1=document.createElement('a');
        var a2=document.createElement('a');
        var a3=document.createElement('a');
        a.href='#';
        h3.innerHTML='服务中心';
        h3.style.fontSize='15px';
        a1.innerHTML='人才招聘';
        a1.href='#';
        a1.style.marginRight='30px';
        a2.innerHTML='联系我们';
        a2.href='#';
        a2.style.marginRight='30px';
        a3.innerHTML='7*24小时服务';
        a3.href='#';
        $("#sjfoot").append(div);
        div.append(a)
        a.append(h3);
        div.append(a1);
        div.append(a2);
        div.append(a3);
        //创建div
        var div =document.createElement('div');
        var h3=document.createElement('h3');
        var a=document.createElement('a');
        var a1=document.createElement('a');
        a.href='#';
        h3.innerHTML='关于我们';
        h3.style.fontSize='15px';
        a1.innerHTML='公司简介';
        a1.href='#';
        $("#sjfoot").append(div);
        div.append(a);
        a.append(h3);
        div.append(a1);
        //创建div
        var div=document.createElement('div');
        var p=document.createElement('p');
        var p1=document.createElement('p');
        $("#sjfoot").append(div);
        p.style.lineHeight='2px';
        p.innerHTML='Copyright © 2017-2020,www.qdkuajie.com,';
        p1.style.lineHeight='2px';
        p1.innerHTML='All rights reserved 版权所有';
        div.append(p);
        div.append(p1);
        $AD.set("img/aboutUs/wrpaboutus.jpg");
    }