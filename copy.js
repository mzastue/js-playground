const objectToCopy = {
  a: 1,
};

const cleanObject = Object.create(null);
const coppied1 = { ...objectToCopy };
const coppied2 = Object.assign({}, objectToCopy);
const coppied3 = objectToCopy;
const coppied4 = Object.keys(objectToCopy).map(key => ({
  key: objectToCopy[key],
}))[0]
const coppied5 = Object.entries(objectToCopy).map(entry => ({
  [entry[0]]: entry[1],
})).shift();


console.log(coppied5);