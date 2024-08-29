/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function locationDropdownOnClick() {
    document.getElementById("locationDropdown").classList.toggle("show");
}

function filterFunction() {
    const input = document.getElementById("locationDropdownInput");
    const filter = input.value.toUpperCase();
    const div = document.getElementById("locationDropdown");
    const a = div.getElementsByTagName("a");
    for (let i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
    } else {
        a[i].style.display = "none";
    }
    }
}

function locationHashChanged(){
    var hash = window.location.hash.substring(1);
    document.getElementById("MapImage").src="../maps/".concat(hash,".png");
}

window.onhashchange = locationHashChanged;