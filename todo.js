
let  todo=[];
let req=prompt("please enter  tour  request");

while(true){
    if(req=="quit"){
        console.log("Quiting App")
        break;
    }


    if(req=="list"){
        console.log("_______________");
        for(i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("________________");
    }

    else if(req=="add"){
        let  task=prompt("please enter the task you want to add");
        todo.push( task);
        console.log("task added");
    }

    else if(req=="delete"){
        let idx=prompt("please enter the index  to  delete");
        todo.splice(idx,1);
        console.log("task  deleted");
    }

    req=prompt("please enter your  request");
}