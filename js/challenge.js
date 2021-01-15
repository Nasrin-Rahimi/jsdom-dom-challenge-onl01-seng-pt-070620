document.addEventListener('DOMContentLoaded', function(){
    let timer = setInterval(myTimer, 1000),
    counter = document.getElementById('counter'),
    plus = document.getElementById('plus'),
    minus = document.getElementById('minus'),
    heart = document.getElementById('heart'),
    pause = document.getElementById('pause'),
    form = document.getElementById('comment-form');

    function myTimer(){
        counter.innerText = parseInt(counter.innerText)+1;
    }

    plus.addEventListener('click', function(){
        counter.innerText = parseInt(counter.innerText)+1;
    });

    minus.addEventListener('click', function(){
        counter.innerText = parseInt(counter.innerText)-1;
    });

    pause.addEventListener('click', function(){
        if ( pause.innerText == 'pause'){
            plus.disabled = true;
            minus.disabled = true;
            heart.disabled = true;
            pause.innerText = 'resume';
            clearInterval(timer);
        } else {
            plus.disabled = false;
            minus.disabled = false;
            heart.disabled = false;
            pause.innerText = 'pause';
            timer = setInterval(myTimer, 1000);
        }
    });

    form.addEventListener('submit', function(e){
        e.preventDefault();
        let comment = document.getElementById('comment-input');
        let commentList = document.getElementById('list');
        commentList.innerText  += comment.value + "\n";
        comment.value = "";
    });
});