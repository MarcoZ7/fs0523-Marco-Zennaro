 let bottone = document.getElementById("addBtn");
        
        bottone.addEventListener("click",function(){
            
            let target = document.getElementById('addEl');
            
            let input = document.getElementById('elenco');

            if(!input.value) return;

            let li = document.createElement("li");
            li.classList.add('list-item');
            li.innerText = input.value;

            li.addEventListener('click',function(){
                li.classList.add('fatto');
                targetDone.append(li);
            })

            target.append(li);

            input.value = '';

        });


