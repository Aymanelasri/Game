import { useState } from "react";
export default function App() {
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState("");
    const select=["trier par points","trier par GD","Buts manques (GF)","Buts marqués (GA)"];
const standings = [
  {
    country: "Morocco",
    flag: "https://flagcdn.com/w40/ma.png",
    played: 3,
    wins: 2,
    draws: 1,
    losses: 0,
    goals_for: 4,
    goals_against: 1,
    goal_diff: 3,
    points: 7,
    form: ["W", "W", "D"]
  },
  {
    country: "Saudi Arabia",
    flag: "https://flagcdn.com/w40/sa.png",
    played: 3,
    wins: 2,
    draws: 0,
    losses: 1,
    goals_for: 5,
    goals_against: 3,
    goal_diff: 2,
    points: 6,
    form: ["W", "W", "L"]
  },
  {
    country: "Oman",
    flag: "https://flagcdn.com/w40/om.png",
    played: 3,
    wins: 1,
    draws: 1,
    losses: 1,
    goals_for: 3,
    goals_against: 3,
    goal_diff: 0,
    points: 4,
    form: ["D", "W", "L"]
  },
  {
    country: "Comoros",
    flag: "https://flagcdn.com/w40/km.png",
    played: 3,
    wins: 0,
    draws: 0,
    losses: 3,
    goals_for: 3,
    goals_against: 8,
    goal_diff: -5,
    points: 0,
    form: ["L", "L", "L"]
  }
];

let filter = standings.filter((team) =>
  team.country.toLowerCase().includes(search.toLowerCase())
);

if (sortBy === "trier par points") {
  filter = filter.sort((a, b) => b.points - a.points);
} else if (sortBy === "trier par GD") {
  filter = filter.sort((a, b) => b.goal_diff - a.goal_diff);
} else if (sortBy === "Buts manques (GF)") {
  filter = filter.sort((a, b) => b.goals_for - a.goals_for);
} else if (sortBy === "Buts marqués (GA)") {
  filter = filter.sort((a, b) => a.goals_against - b.goals_against);
}

  return (<>
    <div className="App">
      <h1>Group B Standings</h1>
        <input className="form-control mb-2 w-50"
          type="search"
          placeholder="Search for a team"
          value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        <select className="form-control mb-2 w-50" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="" >Choisir ... </option>
            {select.map((option, index) => (
                <option key={index} value={option}>{option}</option>
            ))}
        </select>
        

        <table class="table table-striped table-bordered table-responsive">
            <thead class="thead-inverse">
                <tr>
                    <th>#</th>
                    <th>Equipe</th>
                    <th>MP</th>
                    <th>W</th>
                    <th>D</th>
                    <th>L</th>
                    <th>GF</th>
                    <th>GA</th>
                    <th>GD</th>
                    <th>Pts</th>
                    <th>Last 5</th>
                </tr>
                </thead>
                <tbody>
                    {filter.map((team, index) => (
                        <tr key={team.country}>
                            <td>{index + 1}</td>
                            <td><img src={team.flag} alt={team.country} style={{width: '20px', marginRight: '8px'}} />{team.country}</td>
                            <td>{team.played}</td>
                            <td>{team.wins}</td>
                            <td>{team.draws}</td>
                            <td>{team.losses}</td>
                            <td>{team.goals_for}</td>
                            <td>{team.goals_against}</td>
                            <td>{team.goal_diff}</td>
                            <td style={{color:"blue"}}>{team.points}</td>
                            <td>
                                {team.form.map((result, i) => (
                                    <span key={i} style={{
                                        display: 'inline-block',
                                        width: '15px',
                                        height: '15px',
                                        borderRadius: '50%',
                                        backgroundColor: result === 'L' ? 'red' : result === 'W' ? 'green' : 'gray',
                                        margin: '0 3px'
                                    }}></span>
                                ))}
                            </td>
                        </tr>
                    ))}
                  
                </tbody>
        </table>

    </div>
    </>
  );
}