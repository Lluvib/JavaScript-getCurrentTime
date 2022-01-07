// assign the values 
const displaytime= document.querySelector('.first displaytime')
var today = new Date();
var day = today.getDay();
var daylist = ['Sunday','Monday','Tuesday','Wednesday','Thurday','Friday','Saturday'];
document.getElementById('displayday').innerText =('Today is : '+ daylist[ day] +'.');

var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

if(hour<12){
    document.getElementById('displaytime').innerText=('The time now is: '+ hour +' AM ' +minute+':'+second);
    }
    else{
        var noonhour = hour-12;
        document.getElementById('displaytime').innerText=('The time now is :'+ noonhour+' PM '+minute+':'+second);
}

var monthYear=new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
if(dd<0){
    dd='0'+dd;
}
if(mm<10){
    mm='0'+mm;
}
monthYear= mm +'-'+ dd +'-'+ yyyy;
document.getElementById('displayyear').innerText =('Current year and month is : '+ monthYear +'.');

function print_current_page()
{
window.print();
}