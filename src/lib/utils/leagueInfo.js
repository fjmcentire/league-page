/*   STEP 1   */
export const leagueID = "1250354502515568640"; // your league ID
export const leagueName = "Fap Fap Fap"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = true; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p><img src="/logo.png"></p>
  <p><b>Welcome to the Fap Fap Fap League</b></p>
  <p>Trash talk, heartbreak, and J.C. forgetting to set his lineup since 2011.</p>
  <p>Welcome back, degenerates.</p>
  <p>This league has outlived most of our favorite players’ knees, several relationships, as well as Joe’s championship hopes and dreams. As always, we gather not just to crown a champion, but to mock each other mercilessly for our poor draft choices, waiver wire desperation, and general life decisions.</p>
  <p>Good luck this season, assholes.</p>
<p>For the mobile version <a href="https://league-page-six-tau.vercel.app/" target="_blank">click here</a></p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null
/*
Copy and paste into bio for NFL awards and custom Awards. Everything has to be on one line though.
<p><h3 class=\"svelte-106z4mu\">NFL League Awards</h3>
<p><img src=\"/awards/champion.png\"></p><p>League Champion: </p>
<p><img src=\"/awards/second.png\"></p><p>Second Place: </p>
<p><img src=\"/awards/third.png\"></p><p>Third Place: </p>
<p><img src=\"/awards/record-1.png\"></p><p>Regular Season Champ: </p>
<p><img src=\"/awards/generic.png\"></p><p>League Scoring Leader: </p>
<p><img src=\"/awards/sacko.png\"></p><p>The Sacko (last place): </p>
<p><img src=\"/awards/toilet.png\"></p><p>The Sucko (lowest scoring team): </p>


*/

export const managers = [
    {//0
       "managerID": "76787428618551296",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Zac",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
	   "bio": "Question: This man required microscopic medical intervention to confirm the prescence of a vestigial reproductive organ that he refers to as his penis.<p>Answer: Who is Joe?</p><p><h3 class=\"svelte-106z4mu\">NFL League Awards</h3></p><p><img src=\"/awards/champion.png\"><img src=\"/awards/champion.png\"></p><p>League Champion: 2x (2015, 2020)</p><p><img src=\"/awards/third.png\"><img src=\"/awards/third.png\"></p><p>Third Place: 2x (2016, 2024)</p><p><img src=\"/awards/generic.png\"><img src=\"/awards/generic.png\"><img src=\"/awards/generic.png\"></p><p>League Scoring Leader: 3x (2015, 2017, 2020)</p>",
       "photo": "/managers/zac.png", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2011, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "sea", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
          name: "Bump", // Can be anything (usu lly your rival's name)
         link: 5, // manager array number within this array, or null to link back to all managers page
         image: "/managers/question.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 745, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "FB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "I approach fantasy football like I approach sucking dick. Full send.",
      "tradingScale": 6.9, // 1 - 10
      "preferredContact": "Carrier Pigeon", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {//1
      "managerID": "607276984422191104",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Bryn",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
      "bio": "This page intentionally left to the forevermore winner of all fantasy football leagues until the end of all things. Here to vanquish and devour the desperation of his foes, fear must be engrossed upon all lucky enough to escape him that week. But watch, as their time approaches that inescapable convergence of all truth; nobody beats Off Daily!<p><h3 class=\"svelte-106z4mu\">NFL League Awards</h3><p><img src=\"/awards/champion.png\"></p><p>League Champion: 2023</p><p><img src=\"/awards/second.png\"><img src=\"/awards/second.png\"></p><p>Second Place: 2x (2016, 2017)</p><p><img src=\"/awards/third.png\"></p><p>Third Place: 2019</p><p><img src=\"/awards/record-1.png\"><img src=\"/awards/record-1.png\"><img src=\"/awards/record-1.png\"></p><p>Regular Season Champ: 3x(2017, 2019, 2020)</p><p><img src=\"/awards/generic.png\"></p><p>League Scoring Leader: 2014</p>",
      "photo": "/managers/bryn.png", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2011, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "lar", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Joe", // Can be anything (usually your rival's name)
        link: 3, // manager array number within this array, or null to link back to all managers page
        image: "/managers/joe.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Cobra Kai!",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {//2
      "managerID": "607686851460919296",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Jay",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
      "bio": "Until Jay tells me something else to put for his bio, I'll just say he's a soulless ginger fuck.<p><h3 class=\"svelte-106z4mu\">NFL League Awards</h3><p><img src=\"/awards/second.png\"></p><p>Second Place: 2024</p><p><img src=\"/awards/record-1.png\"></p><p>Regular Season Champ: 2023</p><p><img src=\"/awards/generic.png\"></p><p>League Scoring Leader: 2024</p>",
      "photo": "/managers/jay.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "cle", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Rival", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/question.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Suckin dicks is great",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {//3
       "managerID": "607692785553854464",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Joe",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
       "bio": "Until Joe tells me something else to put for his bio, I'll just say he's a huge die hard eagles fan.<p><h3 class=\"svelte-106z4mu\">NFL League Awards</h3><p><img src=\"/awards/second.png\"><img src=\"/awards/second.png\"></p><p>Second Place: 2x(2011, 2021)</p><p><img src=\"/awards/third.png\"><img src=\"/awards/third.png\"><img src=\"/awards/third.png\"></p><p>Third Place: 3x(2014, 2015, 2023)</p><p><img src=\"/awards/record-1.png\"></p><p>Regular Season Champ: 2018</p><p><img src=\"/awards/generic.png\"></p><p>League Scoring Leader: 2023</p>",
       "photo": "/managers/joe.png", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2011, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
          name: "Rival", // Can be anything (usu lly your rival's name)
         link: null, // manager array number within this array, or null to link back to all managers page
         image: "/managers/question.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Suckin dicks is great",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {//4
      "managerID": "732634223986462720",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Robby",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
      "bio": "Until Robby tells me something else to put for his bio, I'll just say he's a dog shit chef and Bo Nix is the next Brock Osweiler.<p><h3 class=\"svelte-106z4mu\">NFL League Awards</h3><p><img src=\"/awards/champion.png\"><img src=\"/awards/champion.png\"></p><p>League Champion: 2x(2016, 2021)</p><p><img src=\"/awards/second.png\"><img src=\"/awards/second.png\"></p><p>Second Place: 2x(2020, 2022)</p><p><img src=\"/awards/third.png\"><img src=\"/awards/third.png\"></p><p>Third Place: 2x(2017, 2018)</p><p><img src=\"/awards/record-1.png\"><img src=\"/awards/record-1.png\"></p><p>Regular Season Champ: 2x(2016, 2021)</p><p><img src=\"/awards/generic.png\"></p><p>League Scoring Leader: 2018</p>",
      "photo": "/managers/robby.png", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2016, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "den", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Rival", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/question.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Suckin dicks is great",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {//5
      "managerID": "867234977723691008",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Bump",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Marina, CA", // (optional)
      "bio": "I play in six leagues but am somehow still not good at this shit.<p><h3 class=\"svelte-106z4mu\">NFL League Awards</h3><p><img src=\"/awards/champion.png\"></p><p>League Champion: 2011</p><p><img src=\"/awards/third.png\"></p><p>Third Place: 2022</p><p><img src=\"/awards/generic.png\"><img src=\"/awards/generic.png\"></p><p>League Scoring Leader: 2x(2011, 2016)</p><p><img src=\"/awards/sacko.png\"></p><p>The Sacko (last place): 2019</p>",
      "photo": "/managers/bump.png", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2011, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "sf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Zac", // Can be anything (usually your rival's name)
        link: 0, // manager array number within this array, or null to link back to all managers page
        image: "/managers/zac.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4217, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "K", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      //"philosophy": "Suckin dicks is great",
      "tradingScale": 7, // 1 - 10
      "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {//6
       "managerID": "1000266034005245952",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Frank",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "California", // (optional)
       "bio": "I'm the best there's ever been. I wake up in the morning and I piss excellence. I enjoy beer, long walks on the beach and watching the Rams beat the Niners in the NFC championship every night.<p><h3 class=\"svelte-106z4mu\">NFL League Awards</h3><p><img src=\"/awards/champion.png\"><img src=\"/awards/champion.png\"></p><p>League Champion: 2x(2017, 2018)</p><p><img src=\"/awards/second.png\"></p><p>Second Place: 2023</p><p><img src=\"/awards/third.png\"></p><p>Third Place: 2013</p><p><img src=\"/awards/record-1.png\"></p><p>Regular Season Champ: 2012</p><p><img src=\"/awards/generic.png\"></p><p>League Scoring Leader: 2013</p><p><img src=\"/awards/sacko.png\"></p><p>The Sacko (last place): 2016</p>",
       "photo": "/managers/frank.png", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2011, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "lar", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
          name: "Blake", // Can be anything (usu lly your rival's name)
         link: 7, // manager array number within this array, or null to link back to all managers page
         image: "/managers/question.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
      "favoritePlayer": 2227, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "All my life I've been over the top, I don't know what I'm doing all I know is I don't want to stop.",
      "tradingScale": 8, // 1 - 10
      "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {//7
      "managerID": "1250354078941192192",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Blake",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
      "bio": "Until Blake tells me something else to put for his bio, I'll just say he's been dog shit in fantasy football since Sydney left the league and quit helping him with his team.<p><h3 class=\"svelte-106z4mu\">NFL League Awards</h3><p><img src=\"/awards/champion.png\"><img src=\"/awards/champion.png\"><img src=\"/awards/champion.png\"><img src=\"/awards/champion.png\"></p><p>League Champion: 4x(2012, 2013, 2014, 2019)</p><p><img src=\"/awards/second.png\"></p><p>Second Place: 2018</p><p><img src=\"/awards/generic.png\"></p><p>League Scoring Leader: 2012</p><p><img src=\"/awards/sacko.png\"></p><p>The Sacko (last place): 2023</p><p><img src=\"/awards/toilet.png\"></p><p>The Sucko (lowest scoring team): 2017</p>",
      "photo": "/managers/question.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2011, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "chi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Joe", // Can be anything (usually your rival's name)
        link: 3, // manager array number within this array, or null to link back to all managers page
        image: "/managers/joe.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Suckin dicks is great",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {//8
      "managerID": "1250941195194998784",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Jacob",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
      "bio": "Until Jacob tells me something else to put for his bio, I'll just say he's a degen and I still have a ton of those fuckin plastic cups you gave me.<p><h3 class=\"svelte-106z4mu\">NFL League Awards</h3><p><img src=\"/awards/champion.png\"></p><p>League Champion: 2024</p><p><img src=\"/awards/second.png\"></p><p>Second Place: 2019</p><p><img src=\"/awards/record-1.png\"></p><p>Regular Season Champ: 2022</p><p><img src=\"/awards/sacko.png\"><img src=\"/awards/sacko.png\"></p><p>The Sacko (last place): 2x(2020, 2021)</p><p><img src=\"/awards/toilet.png\"></p><p>The Sucko (lowest scoring team): 2018</p>",
      "photo": "/managers/question.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2020, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "lar", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Rival", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/question.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Suckin dicks is great",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  {//9
       "managerID": "1250948308420014080",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "John",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
       "location": "Alexandria, VA", // (optional)
       "bio": "Alwasy competitive, always losing. I will always lose one game a year because I'm not paying attention to the byes for a Thursday night game.<p><h3 class=\"svelte-106z4mu\">NFL League Awards</h3><p><img src=\"/awards/second.png\"></p><p>Second Place: 2013</p><p><img src=\"/awards/third.png\"></p><p>Third Place: 2012</p><p><img src=\"/awards/toilet.png\"></p><p>The Sucko (lowest scoring team): 2015</p>",
       "photo": "/managers/johnr.png", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2012, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "sf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
          name: "Blake and Frank", // Can be anything (usu lly your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 4217, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Fuckin pay attention!",
      "tradingScale": 4, // 1 - 10
      "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {//10
      "managerID": "1251001821967683584",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Travis",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
      "bio": "Until Travis tells me something else to put for his bio, I'll just say he's about as good at golf as the niner's are at winning superbowls.<p><h3 class=\"svelte-106z4mu\">NFL League Awards</h3><p><img src=\"/awards/champion.png\"></p><p>League Champion: 2022</p><p><img src=\"/awards/second.png\"></p><p>Second Place: 2015</p><p><img src=\"/awards/third.png\"><img src=\"/awards/third.png\"></p><p>Third Place: 2x(2020, 2021)</p><p><img src=\"/awards/record-1.png\"></p><p>Regular Season Champ: 2015</p><p><img src=\"/awards/generic.png\"></p><p>League Scoring Leader: 2022</p><p><img src=\"/awards/sacko.png\"></p><p>The Sacko (last place): 2018</p>",
      "photo": "/managers/question.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2013, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "sf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Rival", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/question.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Suckin dicks is great",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {//11
      "managerID": "1251037227786436608",  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "J.C.",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
      "bio": "Until JC tells me something else to put for his bio, I'll just say he's the biggest, goofiest mother fucker I've ever met.<p><h3 class=\"svelte-106z4mu\">NFL League Awards</h3><p><img src=\"/awards/record-1.png\"></p><p>Regular Season Champ: 2014</p><p><img src=\"/awards/sacko.png\"><img src=\"/awards/sacko.png\"><img src=\"/awards/sacko.png\"></p><p>The Sacko (last place): 3x(2015, 2022, 2024)</p><p><img src=\"/awards/toilet.png\"><img src=\"/awards/toilet.png\"><img src=\"/awards/toilet.png\"><img src=\"/awards/toilet.png\"><img src=\"/awards/toilet.png\"><img src=\"/awards/toilet.png\"></p><p>The Sucko (lowest scoring team): 6x(2013, 2019, 2020, 2022, 2023, 2024)</p>",
      "photo": "/managers/question.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2015, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "lar", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Rival", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/question.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Suckin dicks is great",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
