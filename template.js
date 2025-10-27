function getDialog01Template() {
    return `
    <form method="dialog">
            <img src="./img/IMG_1213.jpeg" alt="a picture">
            <button onclick="openDialog02()" id="next-btn02">next</button>
            <button id="close-btn">close</button>
        </form>
    `
}

function getDialog02Template() {
    return `
    <form method="dialog">
            <img src="./img/IMG_1221.jpeg" alt="a picture">
            <button onclick="openDialog01()" id="back-btn01">back</button>
            <button id="close-btn">close</button>
            <button onclick="openDialog03()" id="next-btn03">next</button>

        </form>
    `
}

function getDialog03Template() {
    return `
    <form method="dialog">
            <img src="./img/IMG_1224.jpeg" alt="a picture">
            <button onclick="openDialog02()" id="back-btn01">back</button>
            <button id="close-btn">close</button>

        </form>
    `
}