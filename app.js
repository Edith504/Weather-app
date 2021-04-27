//Ajax XML
var btn=document.querySelector("button");
var txt=document.querySelector("input");
btn.onclick=function() {
    var val=txt.value;

    //显示box
    var box=document.querySelector("div");
    box.removeAttribute("style");
    
    //发送Ajax
    var xhr= new XMLHttpRequest(); //创建XMLHttpRequest对象
    xhr.open('get','http://wthrcdn.etouch.cn/WeatherApi?city='+ val); //规定请求的类型、URL、以及异步处理请求。
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
            console.log(xhr.responseXML); //获得document
        
            var resp=xhr.responseXML.querySelector("resp"); //获得<resp>...</resp>
            console.log(resp);

            var city=resp.querySelector("city").innerHTML; //获得<city>...</city>内容
            var time=resp.querySelector("updatetime").innerHTML;
            var wendu=resp.querySelector("wendu").innerHTML;

            var forecast=resp.querySelector("forecast");
            var weather=forecast.querySelector("weather");
            var high=weather.querySelector("high").innerHTML;
            console.log(high);
            var low=weather.querySelector("low").innerHTML;

            document.querySelector("#city").innerHTML="查询城市 " + city;
            document.querySelector("#time").innerHTML="更新时间 " + time;
            document.querySelector("#temp").innerHTML="即时温度 " + wendu +"℃";
            document.querySelector("#maxtemp").innerHTML=high;
            document.querySelector("#mintemp").innerHTML=low;
        }
    }
    xhr.send();
}