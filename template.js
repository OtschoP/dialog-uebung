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
            <button id="close-btn">close</button>
        </form>
    `
}