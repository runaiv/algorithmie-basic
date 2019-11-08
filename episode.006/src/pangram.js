export default function spaceAge(string) {

    let letters = "abcdefghijklmnopqrstuvwxyz"
    string = string.toLowerCase().replace(/[^a-z]/g,'')

    for (const letter of letters){
        if(string.indexOf(letter) < 0)
            return false
        else
            return true
   }
} 