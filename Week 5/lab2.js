function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

let buttons = document.querySelectorAll(".colorbtn ");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        setBackgroundColor(button.dataset.color);
    });
});

let colorPicker = document.getElementById("colorPicker");

    colorPicker.addEventListener("input", (event) => {
        let color = event.target.value;
        document.body.style.backgroundColor = color;
    });
