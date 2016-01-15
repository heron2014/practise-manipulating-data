var arr = [{fn: 'anita', id: '7777'}, {fn: 'anita', id: '34'},{fn: 'mina', id: '3'},{fn: 'simon', id: '76433647343'}, {fn: 'mina', id: '76473447343'},{fn: 'anita', id: '72473647343'}, {fn: 'anita', id: '887'}];


//my results object should look like this : {anita: ['67676', '787878','67878'], mina: ['4354354', '323232']}
var results = {};
var checked = [];
for (var i = 0; i < arr.length; i++) {
    var current = arr[i];
    for (var j = 0; j <arr.length; j++) {
        var currentInner = arr[j];
        if (checked.indexOf(current.fn) === -1) {
        
        if (current.fn === currentInner.fn && i !== j) {

                if (results[current.fn] === undefined ) {
                    results[current.fn] = [current.id]; 
                    results[current.fn].push(currentInner.id)
        
                } else {
                    results[current.fn].push(currentInner.id);
                }
            }
            
        }
        
    }
    checked.push(current.fn);
}

console.log(results);