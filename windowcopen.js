/*

WindowCOpen 1.1
http://github.com/xozen/windowcopen

*/

function windowcopen(url, title, options) {

    var option_others = ''
    options_arr = options.split(',')

    for (i = 0; (i + 1) <= options_arr.length; i++) {

        option = options_arr[i].trim()
        option_arr = option.split('=')

        var fld = option_arr[0]
        var val = option_arr[1]
        if (fld == 'width') var ww = val
        else if (fld == 'height') var wh = val
        else if (fld == 'top') continue
        else if (fld == 'left') continue
        else option_others += ',' + fld + '=' + val

    }

    var left = (screen.width / 2) - (ww / 2)
    var top = (screen.height / 2) - (wh / 2) - 50
    return window.open(url, title, 'width=' + ww + ', height=' + wh + ', top=' + top + ', left=' + left + option_others)

}
