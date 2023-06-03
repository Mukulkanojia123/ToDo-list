function addMore(){
    let givenName = document.getElementById('tboxName').value;
    let box = document.getElementById('box');
//  console.log(givenName);
    let li = document.createElement('li');
    li.textContent = givenName;

        const delbtn = document.createElement('button');
        delbtn.textContent = "X";
        delbtn.style.background = 'red';
        delbtn.style.border = 'none';
        delbtn.style.color = 'white';

        li.appendChild(delbtn);
        let pos = box.firstElementChild;
        if(pos==null){
            box.appendChild(li);
        }else{
            box.insertBefore(li,pos);
        }
            document.getElementById("tboxName").value = "";
            document.getElementById("tboxName").focus();
            document.getElementById('count').innerHTML = box.childElementCount;
    box.appendChild(li);

}
let btn = document.querySelector("ul");
btn.addEventListener('click' , function(e){
    let box = document.getElementById("box");
    let li = e.target.parentNode;
    box.removeChild(li);
    document.getElementById("count").innerHTML = box.childElementCount;
})
