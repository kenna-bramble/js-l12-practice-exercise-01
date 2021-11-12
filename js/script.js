const randomFolks = document.querySelector(".random-peeps"); //selects the random-peeps class.
const selectUserNumber = document.querySelector("select"); // captures the 'select' element (in the html file, <select><option value="1">1</option></select>)

const getData = async function (numUsers) {
    const usersRequest = await fetch (
        `https://randomuser.me/api?results=${numUsers}`); //userRequest now holds the specific API info(data) that we want.
    const data = await usersRequest.json(); //this turns the info that userRequest holds into an object (called 'data') so we can use it in our code.
    const userResults = data.results; // selects the 'results' array from the info that we just took from the API.
    displayUsers(userResults); //
};
getData(1);


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


selectUserNumber.addEventListener("change", function (e) { // targets the select option value so when user clicks on it, the value of getData changes to numUsers value.
    const numUsers = e.target.value; // numUsers captures targeted data
    getData(numUsers);
})