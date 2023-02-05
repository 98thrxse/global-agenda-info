// load json file using path
function loadJSON(path) {   
    var request = new XMLHttpRequest()
    request.overrideMimeType("application/json")
    request.open('GET', path, false)
    request.send(null)
    var json = JSON.parse(request.responseText)
    return json
}