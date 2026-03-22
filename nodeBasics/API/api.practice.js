// export default async function apiClient () {
// const response = await fetch("/api/use");

// if (response.ok) {
//     let json = await response.json();
//     console.log(json);
// } else {
//     console.log("res error", response.status);
// }
// }


// export default async function apiClient () {
//     try {
//         const response = await fetch('/api/use');
        
//         if (!response.ok) {
//             throw new Error('Responce status:', response.status);
//         }

//         const result = await response.json();
//         console.log(result); 

//     } catch (error) {
//         console.log(error);
//     } finally {
//         console.log('API connected', result);
//     }


//     try {

//         const response = await fetch('api/use', {
//             method: 'POST',
//             // body: {

//             // }
//             body: JSON.stringify({
//                 title: 'foo',
//                 body: 'lskjf',
//                 userId: 1,
//             }),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         })
        
//         if (!response.ok) {
//             throw new Error(response.status);
//         }

//         const result = response.json();

//     } catch (err) {
//         console.log(err)
//     }
// }

// const promise = new Promise((resolve, reject) => {
//     const success = Math.random() > 0.5;
//     if (success) {
//         resolve('succes');
//     } else {
//         reject('failed');
//     }
// })

// promise.then(response => console.log(response));

// try {
//     const response = await promise;
//     console.log(response);
// } catch (err) {
//     console.log(err);
// }


// //3
// function preLoadImg(url) {
//     return new Promise((resolve, reject) => {
//         const image = new Image()
//         image.alt('alskd');
//         image.src(url);
//         image.addEventListener('load', () => resolve('load'));
//         image.addEventListener('error', () => reject('error'));
//     });
// /*
// Challenge:
// 1. Return a new promise. The promise should:
//     - create a new image and assign the incoming url
//       to its src attribute. (Use the Image constructor
//       for this!)
//     - listen out for a load event. If a load event is
//       detected, the promise should resolve, providing the
//       image element.
//     - listen out for an "error" event. If an error
//       event is detected, the promise should reject giving
//       the message "img has NOT loaded".
// */
// }

// try {
//     const results = await preLoadImg('https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/courses/gadvancedjs/scenic1.jpg')
//     console.log(results)
//     document.getElementById('img-container').appendChild(results)
// } catch (error) {
//     console.error(error)
// }



// 4 завдання promise try catch

function uploadFile() {
    return new Promise((resolve, reject) => {
        console.log('Step 1: Uploading file...')
        setTimeout(() => {
            resolve() // Call the next step after 1 second
        }, 1000)
    })
}

function processFile(callback) {
    return new Promise((resolve, reject) => {
        console.log('Step 2: Processing file...')
        setTimeout(() => {
            resolve() // Call the next step after 1 second
        }, 1000)
    })
}

function notifyUser(callback) {
    return new Promise((resolve, reject) => {
        console.log('Step 2: Processing file...')
        setTimeout(() => {
            resolve() // Call the next step after 1 second
        }, 1000)
    })
}

/*
Challenge:
1. Await these promises in order in a try/catch block and
   when they are done, log 'All steps completed!'.
*/
try {
    await uploadFile();
    await processFile();
    await notifyUser();
} catch (err) {
    console.error(err);
} finally {
    console.log("All steps completed!")
}

// expected output:

// Step 1: Uploading file...
// Step 2: Processing file...
// Step 3: Notifying user...
// All steps completed!