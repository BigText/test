
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
async function getMatchHistory(puuid)
{
    const url = "https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/" + puuid + "/ids?start=0&count=20&api_key=RGAPI-2a2fe529-accb-4cd9-a70a-281e9eb39b2f";
    const response = await fetch(url);

    var data = await response.json();
    console.log(data);
    showMH(data);
}
function show(data) {
    getMatchHistory(data.puuid)
    // Setting innerHTML as tab variable
    document.getElementById("employees").innerHTML += "<tr>  <td> " + data.name + "</td> <td> " + data.summonerLevel + "  </td>   </tr > "
}
function showMH(data)
{
    data.foreach(match => getMatchInfo(Match))

}
function getMatchInfo(MatchID)
{

}