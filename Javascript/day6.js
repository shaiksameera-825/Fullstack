function check(){
//     let strings="this is string example";
//     let hi=strings.indexOf("string");
//     let slicing=strings.slice(hi,14);
//     // alert(strings)
//     // alert(hi)
//     console.log(slicing);
    let inventori="mobile,smartwatch,printer,tablet,monitor,desktop,camera";
    let valuez=document.getElementById("search").value;
    // document.writeln(valuez)
    if(inventori.includes(valuez)){
        // document.writeln("found");
        let finialSize=valuez.length;
        let initialSize=inventori.indexOf(valuez);
        // let slicing=inventori.slice(initialSize,initialSize+finialSize);
        let string=inventori.substring(initialSize,initialSize+finialSize);
        let st=inventori.substr(initialSize,initialSize+finialSize);
        // document.writeln(slicing);
        document.writeln(string);
        // document.writeln(st);
}
}