var arr = [{fn: 'anita', id: '7777'}, {fn: 'anita', id: '34'},{fn: 'mina', id: '3'},{fn: 'simon', id: '76433647343'}, {fn: 'mina', id: '76473447343'},{fn: 'anita', id: '72473647343'}, {fn: 'anita', id: '887'}];

var obj = arr.reduce(function (results, elem, index) {
    
    if (!results.hasOwnProperty(elem.fn)) {
        results[elem.fn] = [elem.id];  
    } else {
        results[elem.fn].push(elem.id);
    }
            
   return results;
    
}, {});


var a = Object.keys(obj).filter(function(value) {
    return obj[value].length > 1;
}).map(function(el, i) {
    var r = {}
    r[el] = obj[el]
    return r;
});

console.log(a);