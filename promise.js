const getData = new Promise((resolve, reject) => {
  const num = Math.random() * 10;
  console.log(num);
  if (num < 5) {
    resolve(num);
  } else {
    reject(num);
  }
});

getData
  .then((data) => console.log(data ))
  .catch((err) => console.error("ERROR", err));
