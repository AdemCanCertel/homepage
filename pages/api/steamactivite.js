export const getSteamactivite = () => {
  const steamactivite_endpoint = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=379AD253C07EDEFD7680DD972E7DDEBE&steamids=76561199025391940`;
  return fetch(steamactivite_endpoint, {
      method: "GET",
  });
};
export default async function handler(req, res) {
  const response = await getSteamactivite();
  if (response.status != 200) {
      return res.status(200).json({
          steam: {
              personastate: "Online Now",
          },
      });
  }
  const steam = await response.json();
  if (steam.item === null) {
      return res.status(200).json({
          steam: {
              personastate: "Offline",
          },
      });
  }
  const getPersonName = steam.response.players[0].personaname;
  const getAvatar = steam.response.players[0].avatarfull;
  const getStatus = steam.response.players[0].personastate === 1
          ? "Online "
          : steam.response.players[0].personastate === 2
          ? "Busy "
          : steam.response.players[0].personastate === 3
          ? "Away"
          : "Offline";
  const getGames = !steam.response.players[0].gameextrainfo
          ? false
          : `Playing - ${steam.response.players[0].gameextrainfo}`;
  const getprofileUrl = steam.response.players[0].profileurl;
  return res.status(200).json({
      steam: {
          getPersonName,
          getAvatar,
          getStatus,
          getGames,
          getprofileUrl,
      },
  });
}