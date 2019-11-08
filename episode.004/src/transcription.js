export default function transcription(dna) {
    const dnaTorna = {
        A: "U",
        C: "G",
        G: "C",
        T: "A"
    }
    if(checkDna(dna, dnaTorna) !== true){
        throw `Nucleotide ${checkDna(dna, dnaTorna)} does not exist`
    }

    return dna.replace(/A|C|G|T/gi, function (matched) {
            return dnaTorna[matched]
    })

    function checkDna(dna, dnaTorna){
        for (const nuc of dna){
            if(!dnaTorna.hasOwnProperty(nuc))
                return nuc
        }
        return true
    }



}