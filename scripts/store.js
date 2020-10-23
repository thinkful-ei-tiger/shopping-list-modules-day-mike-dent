import item from './item.js';

const items = [];
const hideCheckedItems = false;

const findById = function(id){
  return items.find(item => {
    return item.id == id;
  })
}

const addItem = function(name){
  try{
    item.validateName(name);
    items.push(item.create(name));
  }
  catch{
    console.log(`Cannot add item: ${Error.message}`)
  }
}

const findAndToggleChecked = function(id){
  this.findById(id).checked = !this.findById(id).checked;
}

const findAndUpdateName = function(id, newName){
  try {
    item.validateName(newName);
    this.findById(id).name = newName;
  }
  catch{
    console.log(`Cannot add item: ${Error.message}`)
  }
}

const findAndDelete = function(id){
  items.splice(items.findIndex(el => el.id == id),1)
}

const toggleCheckedFilter = function(){
  this.hideCheckedItems = !this.hideCheckedItems;
}

export default {
    items,
    hideCheckedItems,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter
  };
