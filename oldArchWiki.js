let currentUrl = new URL(window.location.href);
if (!currentUrl.searchParams.has("useskinversion")) {
    currentUrl.searchParams.set("useskinversion", "1")
    window.location.href = currentUrl.toString()
}
