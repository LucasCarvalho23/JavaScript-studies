(function() {

    let str = 'Today is 26/09/2022 and tomorrow will be 27/09/22. My birthday is 3/07.'
    let months = ['jan','feb','mar','apr','may','jun','jul','ago','sep','oct','nov','dec']

    function formatdata(str) {
        
        let day = ''
        let regex = /(\d{1,2})\/(\d{1,2})(?:\/(\d{2,4}))?/g
        return str = str.replace(regex, function(a, b, c, d, e, f){
            day = b + ' de ' + months[parseInt(c)-1]
            day += (d) ? ' de ' + d : ''
            return day
        })
    }

    str = formatdata(str)
    console.log (str)

})()