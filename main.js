/**
 * Bài tập 1:
 * Mô hình 3 khối:
 * + Đầu vào:
 * Nhập 3 số nguyên: number_1, number_2, number_3
 * + Xử lí:
 * Tìm số lớn nhất và tìm số nhỏ nhất. Số còn lại sẽ là số lớn hơn hoặc bằng số nhỏ nhất và nhỏ hơn hoặc bằng số lớn nhất.
 * + Đầu ra:
 * Xuất ra màn hình lần lượt số nhỏ nhất, số giữa và số lớn nhất
 */


document.getElementById("btnArrange").onclick=function(){
    var number_1=document.getElementById("number_1").value*1;
    var number_2=document.getElementById("number_2").value*1;
    var number_3=document.getElementById("number_3").value*1;
   // Gọi 3 biến a,b,c lần lượt là số theo theo thử tự nhỏ đến lớn
    var a=number_1;
    var b=number_2;
    var c=number_3;
    var resultArrange="";
    if (a>b){
       
       var temp=a;
       a=b;
       b=temp;
       
    }    
    console.log(a,b,c);
    if(a>c){
        var temp=a;
        a=c;
        c=temp;
        
    }
    if(b>c){
        var temp=b;
        b=c;
        c=temp;
        
    }
    resultArrange+="<p> Thứ tự tăng dần là: "+ a+ " " + b+" "+ c+ "</p>";
    document.getElementById("resultArrange").innerHTML=resultArrange;
}

/**
 * Bài tập 2:
 * Mô hình 3 khối:
 * + Đầu vào:
 * Nhập người sử dụng máy:
 * + Xử lí:
 * Tìm số lớn nhất và tìm số nhỏ nhất. Số còn lại sẽ là số lớn hơn hoặc bằng số nhỏ nhất và nhỏ hơn hoặc bằng số lớn nhất.
 * + Đầu ra:
 * Xuất ra màn hình lần lượt số nhỏ nhất, số giữa và số lớn nhất
 */
 document.getElementById("btnHello").onclick=function(){
    var username=document.getElementById("username").value;
    var result="";
    if (username=="B"){
            result="Chào ông bố khó tính";
    }
    else if(username=="M"){
            result="Chào bà mẹ đảm đang";
    }
    else if(username=="A"){
        result="Chào thằng anh đẹp trai";
    }
    else{
        result="Chào em gái lười biếng";
    }
   
   document.getElementById("resultHello").innerHTML=result;
}

/**
 * Bài tập 3:
 * Mô hình 3 khối:
 * + Đầu vào:
 * Nhập 3 số nguyên: number_4, number_5, number_6
 * + Xử lí:
 * Nếu chia hết cho 2 là số chẵn-> Đếm số chẵn
 * Nếu ko chia hết cho 2 là số lẻ -> Đếm số lẻ
 * + Đầu ra:
 * Xuất ra màn hình lần lượt số lượng số chẵn và số lượng số lẻ
 */


 document.getElementById("btnCount").onclick=function(){
    var number_4=document.getElementById("number_4").value*1;
    var number_5=document.getElementById("number_5").value*1;
    var number_6=document.getElementById("number_6").value*1;
   
    var evenCount=0;
    var oddCount=0;
    var resultCount="";
    if (number_4%2==00){
        evenCount++;
    }
    if (number_4%2!==0){
        oddCount++;
    }
    if (number_5%2==0){
        evenCount++;
    }
    if (number_5%2!==0){
        oddCount++;
    }
    if (number_6%2==0){
        evenCount++;
    }
    if (number_6%2!==0){
        oddCount++;
    }
    resultCount+="<p> Số con số chẵn: "+ evenCount+ "</p>";
    resultCount+="<p> Số con số lẻ: "+ oddCount+ "</p>";
    document.getElementById("resultCount").innerHTML=resultCount;
}

document.getElementById("btnTriangle").onclick=function(){
    var a=document.getElementById("number_7").value*1;
    var b=document.getElementById("number_8").value*1;
    var c=document.getElementById("number_9").value*1;
    var ab=Math.sqrt(a*a+b*b);
    var ac=Math.sqrt(a*a+c*c);
    var bc=Math.sqrt(b*b+c*c);
    var resultTriangle="";
   
    if( a===b||a===c||b===c)
    {
        if(a+b===c||a+c===b||b+c===a){
            resultTriangle="Không tạo thành tam giác";            
            
        }
        else if (a===b && a===c)
        {
            resultTriangle="Là tam giác đều";
        
        }
        else{
            resultTriangle="Là tam giác cân";
        }
    }
    
    if(a!==b && a!==c){
        if(a+b===c||a+c===b||b+c===a){
            resultTriangle="Không tạo thành tam giác";
        }
        if (a===bc||b===ac||c===ab){
            resultTriangle="Là tam giác vuông";
        }        
        else{
            resultTriangle="Tam giác bình thường";
        }
    }
    document.getElementById("resultTriangle").innerHTML=resultTriangle;
}