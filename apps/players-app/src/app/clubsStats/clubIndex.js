import Clubs from "./clubList";
import { pierwszaLiga, Bundesliga, ekstraklasa} from "./clubsIdData";

export function ClubIndex(){
    return(
        <div>
            <h3> Wyszukaj klub </h3>
            {/* <h4> Bundesliga </h4>
                <Clubs clubID="nVp0wiqd" clubName="Bayern Monachium" />
                <Clubs clubID="nP1i5US1" clubName="Borussia Dortmund" />
                <Clubs clubID="4jcj2zMd" clubName="Bayer Leverkusen" />
                <Clubs clubID="KbS1suSm" clubName="RB Lipsk" />
                <Clubs clubID="fiEQZ7C7" clubName="SC Freiburg" />
                <Clubs clubID="hQAtP9Sl" clubName="TSC Hoffenheim" />
                <Clubs clubID="pzHW4oaE" clubName="Union Berlin" />
                <Clubs clubID="WG9pOTse" clubName="FC Koln" />
                <Clubs clubID="8vndvXTk" clubName="Eintracht Frankfurt" />
                <Clubs clubID="EuakNmc1" clubName="FSV Mainz" />
                <Clubs clubID="88HSzjDr" clubName="Borussia Mochengladbach" />
                <Clubs clubID="8Y2m6ADe" clubName="Bochum" />
                <Clubs clubID="nwkTahLL" clubName="VfL Wolfsburg" />
                <Clubs clubID="fTVNku3I" clubName="FC Ausburg" />
                <Clubs clubID="nJQmYp1B" clubName="VfB Stuttgart" />
                <Clubs clubID="pp38UXK8" clubName="Arminia Bielefeld" />
                <Clubs clubID="2y0u8Wrq" clubName="Hertha Berlin" />
                <Clubs clubID="CCQGbik8" clubName="Furth" /> */}
            <h4> Ekstrakalsa</h4>
            {ekstraklasa.map((team) => (
                <Clubs clubID={team.clubID} clubName={team.clubName} />
            ))}
            <h4> 1 liga Polska</h4>
            {pierwszaLiga.map((team) => (
                <Clubs clubID={team.clubID} clubName={team.clubName} />
            ))}
        </div>
    )
}

export default ClubIndex