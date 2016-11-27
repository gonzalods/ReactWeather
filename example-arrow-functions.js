var names = ['Gonzalo','Elena','Ana'];

names.forEach(function(name){
  console.log('forEach', name);
});

names.forEach((name) => {
  console.log('arrowFunc',name);
});
