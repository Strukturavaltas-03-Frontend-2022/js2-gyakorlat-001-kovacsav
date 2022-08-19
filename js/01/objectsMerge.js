const objectsMerge = (...objects) => {
  return { ...objects };
};

const johnDoe = {
  firstName: "John",
  lastName: "Doe",
};

const janeDoe = {
  firstName: "Jane",
  lastName: "Doe",
};

//console.log(objectsMerge(johnDoe, janeDoe));

export default objectsMerge;
