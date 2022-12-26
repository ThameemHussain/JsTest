let myArray=[];

function myFunc(){

    let IDArray=['Artist','Title','ReleaseYear'], eleArr=[], i=0;
    for(i; i<IDArray.length; i++){
       eleArr.push(String(document.getElementById(IDArray[i]).value));}

    let format=document.getElementById("Formats");
    let casette=document.getElementById("Casette");
    let lp=document.getElementById("LP");
    let a=[];
    if(eleArr[0]=="" || eleArr[1]=="" || eleArr[2]==""){
        alert("All Fields are Required");
    }else {

    if(format.checked){
        a.push("CD");
    }
    if(casette.checked){
        a.push("Casette");
    }
    if(lp.checked){
        a.push("LP");
    }

    let gold=document.getElementById("rad").value;

    const ourMusic={
    }
    ourMusic["Artist"]=eleArr[0];
    ourMusic["Title"]=eleArr[1];
    ourMusic["Release Year"]=eleArr[2];
    ourMusic["Formats"]=a;
    ourMusic["Gold"]=gold;

    myArray.push(ourMusic);
    console.log(myArray);
    let data ="",tableData;

//    myArray.forEach(element => {
//        for(let key in element ){
//            console.log(key);
//             data +=` ${key} : ${element[key]} `
//            let display=document.getElementById("Printer");
//            display.innerHTML=data;
//            let incre=0;
//            localStorage.setItem(incre,element[key]);
//            incre++;
//        }
       
      
//    });
   let storageArr=[];
   for(let incre=0; incre<myArray.length; incre++){
    storageArr=[];
    for(let key in myArray[incre]){
        storageArr.push(myArray[incre][key]);
    }
    localStorage.setItem(incre,storageArr);
   }


   let storagelen=JSON.parse(localStorage.length);
   console.log(storagelen);
   for(let abc=0;abc<storagelen;abc++){
    tableData += "<tr>"+"<td>"+`${abc}`+"</td>";
    let retrieve=localStorage.getItem(abc).split(',');
    console.log("Retriebed Dta!! " +retrieve + retrieve.length);
    for(let value=0; value<retrieve.length; value++){
        tableData += '<td>' + retrieve[value] + "</td>";       
    }
    document.getElementById("tableBody").innerHTML=tableData +"</tr>"
    }
    document.getElementById("form").reset();
    
    }
}