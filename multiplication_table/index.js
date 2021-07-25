var output = 0;
for (var i=1; i<10; i++){
    document.write("<br>");
    for (var j=1;j<=i;j++){
        output = i*j;
        document.write(j+"*"+i + "="+output+"&nbsp;&nbsp;&nbsp");
    }
}