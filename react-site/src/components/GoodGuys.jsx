import '../components/GoodGuys.css'

export default function Card ({ character }){
    return(
        <div classList="card">
            <h1 classList='title'>Heros</h1>

            <h2 classList='name'>{character.name}</h2>

            <img classList='character-img' src={character.image} alt={character.name} />
            <p classList='region'>{character.region}</p>

            <p classList='stats'>{character.stats}</p>

            <ul classList='details'>
                {character.details.map((item) =>(
                    <li>{item}</li>
                ))}
            </ul>

            <img classList="map" src={character.map} alt="Character Maps" />

            <ul classList='facts'>
                {character.facts.map((fact)=>(
                    <li>{fact}</li>
                ))}
            </ul>

        </div>
    )
}