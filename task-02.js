const inventory = {
  items: ['Knife', 'Gas mask'],
  add(itemName) {
    this.items.push(itemName);
    console.log(`Adding ${itemName} to inventory`); 
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);

    this.items = this.items.filter(item => item !== itemName);
  },
};

const invokeInventoryAction = function(itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  action.call(inventory, itemName);
};