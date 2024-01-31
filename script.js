let division = document.createElement ('div')
division.innerHTML=`<lable for='txt'> Book Title/Author Name </lable>
<span>
<input type ="text" ClassName="txt" placeholder='TYPE HERE'> 
<button type="button" onClick="show()">SEARCH</button>
</span>`
document.body.append(division)

show=()=>{ 
    let type = document.getElementsByClassName("txt").value
    console.log(type);

let prom = new Promise( (resolve,reject)=>{
    var request = new XMLHttpRequest();
    request.open(`GET`,`https://anapioficeandfire.com/api/books`);

    request.send();

    request.onload = function() { 
        
        if(request.status == 200) {
            var data=JSON.parse(request.response)
         resolve(data)   
        }
        else{
            reject("Errors are occured!!")
        }    
    }       
 } )
        prom.then((data)=>(console.log(data))).catch((err)=>(console.log(err)))

        let para=document.getElementsByClassName("res").innerTex="Book list!!..."
        console.log(para);
}        
        

