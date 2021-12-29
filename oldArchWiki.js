function onGet(data) {
    const minWidth = data.minWidth || defaultMinWidth;
    const maxWidth = data.maxWidth || defaultMaxWidth;
    const minCheck = data.minCheck || defaultCheckState;
    const maxCheck = data.maxCheck || defaultCheckState;

    const currWidth = document.documentElement.clientWidth;

    let skinVersion = 1;
    if ((minCheck && currWidth <= minWidth) || (maxCheck && currWidth >= maxWidth)) {
        skinVersion = 2;
    }

    let currentUrl = new URL(window.location.href);
    const currentSkinVersion = currentUrl.searchParams.get("useskinversion");
    if (skinVersion !== parseInt(currentSkinVersion)) {
        currentUrl.searchParams.set("useskinversion", String(skinVersion))
        window.location.href = currentUrl.toString()
    }

    console.log()

}

let defaultMinWidth = 960;
let defaultMaxWidth = 3840;
let defaultCheckState = false;

const data = browser.storage.sync.get(["minWidth", "minCheck", "maxWidth", "maxCheck"]);
data.then(onGet)
