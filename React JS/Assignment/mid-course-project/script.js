document.addEventListener("DOMContentLoaded", () => {
    let draggedElement = null;

    document.querySelectorAll(".draggable").forEach(div => {
        div.addEventListener("dragstart", (e) => {
            draggedElement = e.target;
            setTimeout(() => {
                e.target.classList.add('selected');
            }, 0);
        });

        div.addEventListener("dragend", () => {
            setTimeout(() => {
                draggedElement.classList.remove('selected');
                draggedElement = null;
            }, 0);
        });

        div.addEventListener("dragover", (e) => {
            e.preventDefault();
        });

        div.addEventListener("drop", (e) => {
            e.preventDefault();
            if (draggedElement !== e.target) {
                const draggedBackground = draggedElement.style.backgroundImage;
                draggedElement.style.backgroundImage = e.target.style.backgroundImage;
                e.target.style.backgroundImage = draggedBackground;
            }
        });
    });
});
