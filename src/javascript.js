
// api url
const api_url =
    "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/MmmmmmTacos?api_key=RGAPI-2a2fe529-accb-4cd9-a70a-281e9eb39b2f";

// Defining async function
async function getapi(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);

    show(data);
}
// Calling that async function
getapi(api_url);

// Function to define innerHTML for HTML table
function show(data) {
    let tab = "  <tr>  <th>id</th> <th>Name</th> <th>Level</th></tr>";


    tab += "<tr>   <td>"+ data.id + "</td > <td>${data.name}</td> <td>${data.level}</td>   </tr > ";
    
    // Setting innerHTML as tab variable
    document.getElementById("employees").innerHTML = tab;
}