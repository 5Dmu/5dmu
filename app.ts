let count = parseInt(localStorage.getItem("count") || '0');
const element = document.getElementById("counter");
if (element !== null) {
    element.innerHTML = count.toString();
}

const add = () => {
    count++;
    if (element !== null) {
        element.innerHTML = count.toString();
    }
    localStorage.setItem("count", count.toString());
}


