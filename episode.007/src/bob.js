export default function bob(string) {
    if (string) {
    if(string.includes('?'))
        return `Sure`
    else if(string.includes('!'))
        return `Whoa, chill out!`
    else if(string.length > 2)
        return `Fine. Be that way!`
    }
    return `Whatever`

}