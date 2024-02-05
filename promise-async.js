const cookies = [{ name: 'Chocolate Cookies' }, { name: 'Macaron Cookies' }];
const newCookie = { name: 'Biscotti Cookies' };

// Progression 1: create a function to get all the cookies
// Progression 2: using setTimeout() -- use 1000 units for time parameter
function getCookies() {
  setTimeout(() => {
    let output = '';
    for (let i = 0; i < cookies.length; i++) {
      output += cookies[i].name + '\n';
    }
    document.body.innerHTML = output;
  }, 1000);
}

// Progression 3: Create a function to create cookies and create an object of Promise.
// Progression 4: adding two parameters and using setTimeout() -- use 2000 units for time parameter
function createCookie(newCookie) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cookies.push(newCookie);
      resolve();
    }, 2000);
  });
}

// Progression 5: handling errors and adding new cookie to the list
createCookie(newCookie)
  .then(() => {
    getCookies();
  })
  .catch((error) => {
    console.log('Promise rejected.');
    console.log(error.message);
  });

// Progression 7: creating a new async function
async function init() {
  await createCookie(newCookie);
  getCookies();
}

// calling the new async function
init();
