// load local config of dynamic dialog text
const TEXT_CONFIG = loadJSON("../../json/text.json")

// constants
const text = document.getElementById("text")
const fgTop = document.getElementById("fg-top")
const fgBottom = document.getElementById("fg-bottom")

// onClick: Info
function clickInfo() {
    // change dialog text
    text.innerText = TEXT_CONFIG.info.text1
    
    // add discord link to text
    let link = document.createElement("a")
    link.classList.add("link")
    link.innerText = TEXT_CONFIG.info.link
    link.href = "https://discord.me/GA1"
    text.appendChild(link)

    // add text after discord link
    let text2 = document.createElement("label")
    text2.innerText = TEXT_CONFIG.info.text2
    text.appendChild(text2)
}

// onClick: Refresh official server status
function clickOfficialRefresh() {
    // ws client route to connect, ws server host = express server host, difference is that we should replace http on ws
    var HOST = location.origin.replace(/^http/, 'ws')
    var ws = new WebSocket(HOST)

    // ws client sending request to ws server on connect
    ws.onopen = () => {
        // ws client sends request to ws server about refreshing GA server status
        ws.send("official")
    }

    // ws client receives response from ws server about GA server status
    ws.onmessage = (event) => {
        // change dialog text
        text.innerText = event.data
    }
}

// onClick: Private servers
function clickPrivate() {
    // change dialog text
    text.innerText = TEXT_CONFIG.private.text
}

// Flow
function initialText() {
    // set initial dialog text
    text.innerText = TEXT_CONFIG.initial.text
}

function animateForeground() {
    fgTop.style.animation = "fgTop 1s forwards"
    fgBottom.style.animation = "fgBottom 1s forwards"
}

function main() {
    initialText()
    setTimeout(() => {
        animateForeground()
    }, 1000)
}

main()