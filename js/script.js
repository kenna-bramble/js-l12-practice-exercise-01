const randomFolks = document.querySelector(".random-peeps"); //selects the random-peeps class.

const getData = async function () {
    const usersRequest = await fetch (
        "https://randomuser.me/api?results=5"); //userRequest now holds the specific API info(data) that we want.
    const data = await usersRequest.json(); //this turns the info that userRequest holds into an object (called 'data') so we can use it in our code.
    const userResults = data.results; // selects the 'results' array from the info that we just took from the API.
    displayUsers(userResults); //
};
getData();


const displayUsers = function (userResults) { //userResults is the array! 
    randomFolks.innerHTML = ""; // this empties the 'randomFolks' element contents to make sure we don't duplicate any DOM elements.
    for (const user of userResults) { // this loops over the userResults array. 'user' represents an element in the userResults array 
        const country = user.location.country; // for each user, access the country -->
        const name = user.name.first; // name -->
        const imageUrl = user.picture.medium; // and picture.

        const userDiv = document.createElement("div"); // creating a new div element
        userDiv.innerHTML = ` 
            <h3>${name}</h3>
            <p>${country}</p>
            <img src=${imageUrl} alt="User avatar" />
            `;                                        // this div element will display the user's name, country, and imageURL that we just accessed.
        randomFolks.append(userDiv); // the new div will now be located in the random-peeps class
    }
};