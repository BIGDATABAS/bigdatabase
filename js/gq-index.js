
function fire(list) {
    for (let i = 0; i < list.length; i++) {
        list[i].onclick = function () {
            for (let j = 0; j < list.length; j++) {
                list[j].classList.remove("wpc_fire");

            }
            list[i].classList.add("wpc_fire");
        }
    }
}

