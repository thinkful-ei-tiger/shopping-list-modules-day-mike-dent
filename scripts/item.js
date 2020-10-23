const validateName = function(name){
    if (!name){
        throw new Error("Name must not be blank")
    }
}

const create = function(itemName){
    let item = {id: cuid(), name: itemName, checked: false};
    return item
}


export default {validateName, create};