var count = parseInt(localStorage.getItem("count") || '0');
var element = document.getElementById("counter");
if (element !== null) {
    element.innerHTML = count.toString();
}
var add = function () {
    count++;
    if (element !== null) {
        element.innerHTML = count.toString();
    }
    localStorage.setItem("count", count.toString());
};
