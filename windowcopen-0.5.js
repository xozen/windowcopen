function windowcopen(url, title, w, h, options) {
    var left = (screen.width / 2) - (w / 2)
    var top = (screen.height / 2) - (h / 2) - 50
    return window.open(url, title, 'width=' + w + ', height=' + h + ', top=' + top + ', left=' + left + options)
}