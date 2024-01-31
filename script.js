let division = document.createElement ('div')
division.innerHTML=`<lable for='txt'> Name of the Area </lable>
<span>
<input type ="text" ClassName="txt" placeholder='ENTER HERE'> 
<button type="button" onClick="show()">SEARCH</button>
</span>`
document.body.append(division)

show=()=>{ 
    let type = document.getElementsByClassName("txt").value
    console.log(type);

let prom = new Promise( (resolve,reject)=>{
    var request = new XMLHttpRequest();
    request.open(`GET`,`https://data.covid19india.org/v4/min/data.min.json`);

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

        document.getElementsByClassName("res").innerTex="Your results are here!!..."
}        
        

