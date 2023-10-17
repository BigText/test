
// api url

// Defining async function
async function getapi(summonerName) {

   const url = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+summonerName+"?api_key=RGAPI-2a2fe529-accb-4cd9-a70a-281e9eb39b2f";

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);

    show(data)
}

// Function to define innerHTML for HTML table
function show(data) {
    let tab = "  <tr>  <th>Name</th> <th>Level</th></tr>";


    tab += "<tr>  <td> " + data.name + "</td> <td> " + data.summonerLevel + "  </td>   </tr > ";
    
    // Setting innerHTML as tab variable
    document.getElementById("employees").innerHTML = tab;
}