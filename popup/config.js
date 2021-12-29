function onGet(item) {
    document.querySelector("#minWidth").value = item.minWidth || defaultMinWidth;
    document.querySelector("#maxWidth").value = item.maxWidth || defaultMaxWidth;
    document.querySelector("#minWidthCheck").checked = item.minCheck || defaultCheckState;
    document.querySelector("#maxWidthCheck").checked = item.maxCheck || defaultCheckState;

}

document.querySelector("#submitButton").addEventListener('click', function() {
    const minWidth = document.querySelector("#minWidth").value || defaultMinWidth;
    const minCheck = document.querySelector("#minWidthCheck").checked || defaultCheckState;
    const maxWidth = document.querySelector("#maxWidth").value || defaultMaxWidth;
    const maxCheck = document.querySelector("#maxWidthCheck").checked || defaultCheckState;
    browser.storage.sync.set({minWidth, maxWidth, minCheck, maxCheck});
});

let defaultMinWidth = 960;
let defaultMaxWidth = 3840;
let defaultCheckState = false;

let testGet = browser.storage.sync.get(["minWidth", "maxWidth", "minCheck", "maxCheck"]);
testGet.then(onGet);