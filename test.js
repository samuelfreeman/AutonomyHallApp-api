const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, 'data.json');

async function fetchData() {
  const url = 'http://localhost:3000/student';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Http request returned a response of ${response.status}`);
    }

    const data = await response.json();
    fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData();

// async function postData() {
//   const url = 'http://localhost:3000/student/register';

//   const postData = {
//     studentId: '5221040871',
//     profile: 'image',
//     fullName: 'Sampson Akoto Boateng',
//     email: 'sampsonmanueljnr@gmail.com',
//     password: 'Pass123@',
//     gender: 'Male',
//     level: 300,
//     telephone: '+233541040876',
//   };
//   try {
//     const request1 = new Request(url, {
//       method: 'POST',
//       body: JSON.stringify(postData),
//     });
//     const request2 = request1.clone();

//     const response = await fetch(request2);

//     if (!response.ok) {
//       console.log(response)
//       throw new Error(
//         `Http request returned a response of ${(response.status)}`,
//       );
//     }
//     const response2 = await fetch(request2);
//     const data = response2.json();
//     fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));
//   } catch (error) {
//     console.log(error);
//   }
// }

// postData();
