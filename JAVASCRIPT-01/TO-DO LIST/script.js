document.querySelector('#add').onclick = function() {
    if(document.querySelector('input').value.length == 0){
        alert("Please Enter a Task!")
    }
    else{
        document.querySelector('#tasks').innerHTML
        += `
        <div class="task">
            <span id="taskname">
                ${document.querySelector('input').value}
            </span>
            <button class="delete_btn">
        <i class="fa-solid fa-trash"></i>
            </button>
        </div>
        `;
        var delete_btns = document.querySelectorAll('.delete_btn')
        for (var i = 0; i < delete_btns.length; i++) {
            delete_btns[i].onclick = function(){
                this.parentNode.remove()
            }
            
        }

        var tasks = document.querySelectorAll('.task');
        for (let index = 0; index < tasks.length; index++) {
            tasks[index].onclick = function(){
                this.classList.toggle('completed')
            }
            
        }
        document.querySelector('input').value = "";
    }
}

