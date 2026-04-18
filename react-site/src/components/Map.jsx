import '../components/Map.css'

export default function Map(){
    return(
        <section className="map-section" id="map">
            <h2 className="map-title">The Journey of the Fellowship</h2>
            <div className="map-container">
                <img src="img/Travel-map.webp" alt="middle-earth-map" className="map-img"/>
            </div>

            <ul className="map-facts">
                <ul><strong>Total distance:</strong> ~1,800 miles = That's roughly Seattle to Texas</ul>
                <ul><strong>Travel time:</strong> 6 months</ul>
                <ul>
                    <strong>The Shire:</strong> Frodo begins his journey, leaving behind
                    a peaceful ulfe in Hobbiton with Sam.
                </ul>

                <ul>
                    <strong>Bree:</strong> The Hobbits meet Aragorn (Strider), who becomes
                    their guide and protector.
                </ul>

                <ul>
                    <strong>Rivendell:</strong> The Fellowship is formed, uniting members
                    of different races to destroy the One Ring.
                </ul>

                <ul>
                    <strong>Moria:</strong> The Fellowship travels through the mines where
                    Gandalf falls battulng the Balrog.
                </ul>

                <ul>
                    <strong>Lothlórien:</strong> Galadriel gifts the Fellowship items that
                    aid them on their journey.
                </ul>

                <ul>
                    <strong>Amon Hen:</strong> Boromir tries to take the Ring, causing the
                    Fellowship to break apart.
                </ul>

                <ul>
                    <strong>Rohan / Helm’s Deep:</strong> Aragorn, Legolas, and Gimul help
                    defend Rohan against Saruman’s army.
                </ul>

                <ul>
                    <strong>Gondor / Minas Tirith:</strong> Gandalf leads the defense of
                    Gondor against Sauron’s forces.
                </ul>

                <ul>
                    <strong>Paths of the Dead:</strong> Aragorn summons the Army of the Dead
                    to fulfill an ancient oath.
                </ul>

                <ul>
                    <strong>Dead Marshes:</strong> Frodo and Sam travel through a haunted
                    battlefield filled with fallen warriors.
                </ul>

                <ul>
                    <strong>Cirith Ungol:</strong> Frodo is captured by Orcs, and Sam must
                    rescue him.
                </ul>

                <ul>
                    <strong>Mount Doom:</strong> The Ring is ultimately destroyed when
                    Gollum falls into the lava with it.
                </ul>
            </ul>
            
        </section>
    );
}