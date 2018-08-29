//It does work, but I'll rework it later sometime because this obviously isn't the optimal solution by any means.

const constructRectangle = function(area) {
    let arr = [];
    if(area==1) return [1,1]
    for(let i=1;i<area;i++){
        if(area%i==0){
            arr.push([area/i, i])
        }
    }
    let diffArr = arr.map(el=>el[0] - el[1]).filter(el=>el>-1)
    return arr[diffArr.indexOf(Math.min(...diffArr))]
};

console.log(constructRectangle(4))