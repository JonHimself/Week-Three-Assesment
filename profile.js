let btns = document.querySelectorAll('.btns');


for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
        if(btns[i].id === "color") {
            alert('Purple is my favorite color!');
        } else if(btns[i].id === "place") {
            alert(`I like places where I can't be seen on the attack`);
        } else if(btns[i].id === "ritual") {
            alert('My favorite ritual is rubbing on ankles');
        }
    });
}