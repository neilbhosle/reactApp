export default function Clubs() {

    const clubs=[
        {name: "Arsenal", location: "London", stadium: "Emirates Stadium", fans : 100000, tickets: false},
        {name: "Chelsea", location: "London", stadium: "Stamford Bridge", fans:5000, tickets: true},
        {name: "Liverpool", location: "Liverpool", stadium: "Anfield", fans: 11000, tickets: true},
        {name: "Manchester City", location: "Manchester", stadium: "Etihad Stadium", fans: 20000, tickets: false},
        {name: "Barcelona", location: "Barcelona", stadium: "Camp Nou", fans: 30000, tickets: true},
        {name: "Real Madrid", location: "Madrid", stadium: "Santiago Bernabeu", fans: 8000, tickets: true},
        {name: "FC Pune City", location: "Pune", stadium: "Shree Shiv Chhatrapati Sports Complex", fans: 12000, tickets: true},
    ];

    return(
        <div>
            <h1>
                Clubs
            </h1>
            <ul>
                {clubs.map((club)=>
                    <li key={club.name} >
                        <b> {club.name}</b>
                        <i> {club.location}</i>
                        <u> {club.stadium} </u>
                        {club.tickets ? <span style={{ color: 'blue' }}> Tickets Available</span> : <span style={{ color: 'pink' }}> Tickets Not Available</span>}
                    </li>
                )}
            </ul>
        </div>
    )
    
}