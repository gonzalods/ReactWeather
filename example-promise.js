function getTempCallback(location, callback){
  callback(undefined, 78);
  callback('City not found');
}

getTempCallback('Madrid', function(err, temp){
  if(err){
    console.log('error', err);
  }else{
    console.log('success', temp);
  }
});

function getTempPromise(location){
  return new Promise(function(resolve, reject){
    resolve(25);
    reject('City not found');
  });
}

getTempPromise('Madrid').then(function(temp){
  console.log('primise success', temp);
}, function(err){
  console.log('primise err', err);
})
