
// api url
const hehe = "RGAPI-8b1526e3-0ba7-4aef-8f94-a68317e8cb6c"
// Defining async function
async function getapi(summonerName) {

   const url = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+summonerName+"?api_key=" + hehe;

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
    const url = "https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/" + puuid + "/ids?start=0&count=20&api_key=" + hehe;
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
    data.forEach(Match => getMatchInfo(Match))

}
async function getMatchInfo(MatchID)
{
    const url = "https://americas.api.riotgames.com/lol/match/v5/matches/" + Match + "?api_key=" + hehe;
    const response = await fetch(url);
    var data = await response.json();

}