let title = document.getElementById('title');
let addbtn = document.getElementById('addbtn');
let display = document.getElementById('display');

        
        addbtn.addEventListener('click',function(){
          var paragraph = document.createElement('p');
          
          paragraph.innerText=title.value;
          
          display.appendChild(paragraph);
         
          title.value="";
          

          

        paragraph.addEventListener('click',function(){
          paragraph.style.textDecoration = "line-through";
        })

        paragraph.addEventListener('dblclick',function(){
          display.removeChild(paragraph);
        })
        })       