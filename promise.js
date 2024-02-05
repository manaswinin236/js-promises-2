const cookies = [{ name: "Chocolate Cookies" }, { name: "Macaron Cookies" }];
const newCookie = { name: "Biscotti Cookies" };

// Progression 1: create a function to get all the cookies
function getCookies() {
  // Progression 2: using setTimeout() - use 1000 units for time parameter
  setTimeout(() => {
    let output = "";
    for (let i = 0; i < cookies.length; i++) {
      output += cookies[i].name + "\n";
    }
    document.body.innerHTML = output;
  }, 1000);
}

// Progression 3: Create a function to create cookies and create an object of Promise.
function createCookie(newCookie) {
  return new Promise((resolve, reject) => {
    // Progression 4: adding two parameters and using setTimeout() - use 2000 units for time parameter
    setTimeout(() => {
      cookies.push(newCookie);
      resolve();
    }, 2000);
  });
}

// Progression 5: handling errors and adding a new cookie to the list
createCookie(newCookie)
  .then(() => {
    getCookies(); // Progression 6: call function using `.then`
  })
  .catch(error => {
    console.log('Promise rejected.');
    console.log(error.message);
  });
