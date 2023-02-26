var request= new XMLHttpRequest();
request.open("Get","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
    //1.question Ans:
    for(var i=0 ;i<result.length;i++){
        console.log( result[i].flags);
        //2.question Ans:
        console.log(result[i].name,result[i].region,result[i].subregion,result[i].population)
    }
}