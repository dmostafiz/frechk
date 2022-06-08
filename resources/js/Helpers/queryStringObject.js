export default function queryStringObject(url) {
    const stringArr = url.split('?')[1]?.split('&')

    console.log('stringArr', stringArr)

    var queryString = {}

    stringArr && stringArr.forEach(str => {
        const key = str.split('=')
        queryString[key[0]] = decodeURIComponent(key[1]);
        // queryString = {...queryString, key[1] }
    })

    return queryString

}
