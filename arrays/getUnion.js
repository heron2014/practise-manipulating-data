var searchSkills = ['java', 'something'];

var contactObj = [{level: 1, skill: 'python'}, {level: 1, skill: 'java'}, {level: 1, skill: 'css'},{level: 1, skill: 'javascript'}];

function intersection(searched, obj) {
    var result = [];
    
    searched.forEach(function (skillString) {
        obj.forEach(function(o) {
            if (skillString === o.skill ) {
                result.push(o)
            }
        })
    })
    
    return result;
}

var intersectionArr = intersection(searchSkills, contactObj);
// console.log(intersectionArr)

var arr1 = intersectionArr.map(function(item) {
    return item.skill;
})


function notIn(obj, arr) {
    
    var res = false;
    arr.forEach(function (item) {
        if (item.skill.toLowerCase() === obj.skill.toLowerCase() ){
            res = true;
        }
    });
    return res;
}

// console.log(notIn({level: 1, skill: 'whatever'}, contactObj))

function union(searched, candidateObj) {
   
    var result = searched;
    
    candidateObj.forEach(function(obj) {
       
        if (!notIn(obj, searched)) {
           
            result.push(obj);
        }
    })
    
    return result;
}
console.log(union(intersectionArr, contactObj));