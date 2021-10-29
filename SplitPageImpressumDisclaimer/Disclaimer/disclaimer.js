const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

function checkBoxes() {

    /* where shall they come in? */
    /* mit console.log(window.innerHeight) können wir die Höhe herausbekommen*/
    /* der Triggerpoint soll etwas weniger als die innerHight sein daher sagen wir 4/%*/
    const triggerBottom = window.innerHeight / 5 *4;
    /* getBoundingClientRect() gibt ein DOM Rect zurück, also ein Rechteckt relative zum viewport*/

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom){
            box.classList.add("show");
        }else {
            box.classList.remove("show");
        }
    });
}