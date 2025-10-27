function getDialog01Template() {
    return `
    <form method="dialog">
            <p>Dies ist ein einfacher Dialog.</p>
            <button onclick="openDialog02()" id="next-btn02">next</button>
            <button id="close-btn">close</button>
        </form>
    `
}

function getDialog02Template() {
    return `
    <form method="dialog">
            <p>Dies ist der zweite Dialog.</p>
            <button onclick="openDialog01()" id="back-btn01">back</button>
            <button id="close-btn">close</button>
            <button onclick="openDialog03()" id="next-btn03">next</button>

        </form>
    `
}

function getDialog03Template() {
    return `
    <form method="dialog">
            <p>Dies ist der dritte Dialog.</p>
            <button onclick="openDialog02()" id="back-btn01">back</button>
            <button id="close-btn">close</button>

        </form>
    `
}