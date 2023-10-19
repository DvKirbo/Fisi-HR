let current_map = document.getElementById("mapa");

let button_3d = document.getElementById("button_3d");
let button_2d = document.getElementById("button_2d");

function dimension_trigger(enabled_button, disabled_button) {
    enabled_button.disabled = true;
    disabled_button.disabled = false;
}

button_3d.addEventListener("click", () => {
    current_map.setAttribute("style","transform:rotateX(40deg); transition: all 1s")
    dimension_trigger(button_3d, button_2d);
});

button_2d.addEventListener("click", () => {
    current_map.setAttribute("style","transform: rotateX(0deg); transition: all 1s")
    dimension_trigger(button_2d, button_3d);
});