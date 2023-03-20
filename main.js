let a = 5;

for (i=1;i<=a;i++){
    let b = " ";
    for (j=1;j<=a-i;j++){
       b += " ";
    }
    for (z=1;z<=2*i-1;z++) {
        b += "*";
    }
    console.log(b);
}