let count = 0;
let countEl = document.getElementById("count-el");
let previousEl = document.getElementById("previous-el")
function increment()
{
    count = count+1;
    countEl.innerText = count
}

function save()
{
    previousEl.innerText += (count + " - ")
    count = 0;
    countEl.innerText = 0
}