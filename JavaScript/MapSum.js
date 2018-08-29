/**
 * Initialize your data structure here.
 */
var MapSum = function(obj={}) {
    this.obj = obj;
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    this.obj[key] = val;
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    let count = 0;
    for(let el in this.obj){
        console.log(el.slice(0, prefix), prefix)
        if(el.slice(0, prefix.length) == prefix) count+= this.obj[el]
    }
    return count;
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = Object.create(MapSum).createNew()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */

let mapSum = new MapSum();


mapSum.insert('apple', 3)
mapSum.insert('applosini', 4)
mapSum.insert('application', 3)
console.log(mapSum.sum('app'))