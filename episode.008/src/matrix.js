export default function strToMatrix(value = '') {
    return{
        "columns" : getcolumn(value),
        "rows" : getrow(value) 
    }
    function getcolumn(){
        let table = value.split('\n').map(r => r.split(' ').map(Number))
        let res = [table.length]
        for (let i = 0; i < table.length; i++){
            res[i] = [];
            for (let j = 0; j < table.length; j++){
                res[i].push(table[j][i])
            }
        }
        return res;
    }
    function getrow(value){
        return value.split('\n').map(r => r.split(' ').map(Number))
    }
}
