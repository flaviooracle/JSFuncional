// somar(2)(3)(4)

function somar(vl1){
    return function(vl2){
        return function(vl3){
            return vl1+vl2+vl3
        }
    }
}

console.log(somar(2)(3)(4))

