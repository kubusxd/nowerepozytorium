function czasDoWydarzenia(rok,miesiac,dzien,godzina,minuta,sekunda,milisekunda)
{var aktualnyCzas=new Date();var dataWydarzenia=new Date();var pozostalyCzas=dataWydarzenia-aktualnyCzas;if(pozostalyCzas>0)
{var s=pozostalyCzas/1000;var min=s/60;var h=min/60;var sLeft=Math.floor(s%60);var minLeft=Math.floor(min%60);var hLeft=Math.floor(h);if(minLeft<10)
minLeft="0"+minLeft;if(sLeft<10)
sLeft="0"+sLeft;return hLeft+" : "+minLeft+" : "+sLeft;}
else{return "end!";}}
window.onload=function()
{idElement="time";document.getElementById(idElement).innerHTML=czasDoWydarzenia(2020,3,21,22,0,0,0);setInterval("document.getElementById(idElement).innerHTML = czasDoWydarzenia(2020, 3, 21, 22, 0, 0, 0)",1000);clearInterval();};