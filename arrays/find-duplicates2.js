var arr = [{fn: 'anita', id: '7777'}, {fn: 'anita', id: '34'},{fn: 'mina', id: '3'},{fn: 'simon', id: '76433647343'}, {fn: 'mina', id: '76473447343'},{fn: 'anita', id: '72473647343'}, {fn: 'anita', id: '887'}];


var obj = arr.reduce(function (results, elem, index) {
    
    if (!results.hasOwnProperty(elem.fn)) {
        results[elem.fn] = [elem.id];  
    } else {
        results[elem.fn].push(elem.id);
    }
            
   return results;
    
}, {});

console.log(obj);


var duplicates = [];


for (var prop in obj) {
    if (obj[prop].length > 1) {
     
        var o = {};
        o[prop] = obj[prop]
        duplicates.push(o);
    }
}

console.log(duplicates);