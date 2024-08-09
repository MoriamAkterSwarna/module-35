const getData1 = new Promise((resolve, reject) => {
  const num = Math.random() * 10;
 console.log("getData1:", num);
  if (num < 5) {
    resolve(num);
  } else {
    reject(" Get Rejected getData1");
  }
});

const getData2 = new Promise((resolve, reject) => {
  const num = Math.random() * 10;
 console.log("getData2:", num);
  if (num < 5) {
    resolve(num);
  } else {
    reject("Get Rejected getData2");
  }
});

const getData3 = new Promise((resolve, reject) => {
  const num = Math.random() * 10;
 console.log("getData3:", num);
  if (num < 5) {
    resolve(num);
  } else {
    reject("Get Rejected getData3");
  }
});
Promise.all([getData1, getData2, getData3])
  .then((results) => {
   
    console.log(results);
    
  })
  .catch((err) => {
    console.error("ERR:", err);
  });
