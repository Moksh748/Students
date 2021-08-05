var names=[]
function submit(){
    var name1=document.getElementById("Student1").value;
    var name2=document.getElementById("Student2").value;
    var name3=document.getElementById("Student3").value;
    var name4=document.getElementById("Student4").value;
    names.push(name1);
    names.push(name2);
    names.push(name3);
    names.push(name4);
    console.log(names);
    document.getElementById("display").innerHTML=names
    document.getElementById("sort_button").style.display="inline-block"
    document.getElementById("sumbit").style.display="none"
}
function sorting(){
    names.sort();
    document.getElementById("display").innerHTML=names;
    console.log(names);
}


