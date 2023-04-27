let count = document.getElementById('counting').innerText;
let counters = document.getElementById('counting');
let like = document.getElementById('like-icon');
let unLike = document.getElementById('unlike-icon');
count = parseInt(count);


like.addEventListener("click", function () {
    // console.log("rajiii");
    unLike.style.display = "block";
    like.style.display = "none";
    count++;
    console.log(count);
    counters.innerText = `${count}`;
});

unLike.addEventListener("click", function () {
    // console.log("rajiii");
    like.style.display = "block";
    unLike.style.display = "none";
    count--;
    console.log(count);
    counters.innerText = `${count}`;
});