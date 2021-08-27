import React , {useState  , useEffect } from 'react' ;
import TinderCard from 'react-tinder-card';
import db from './firebase'
import { getDocs, collection } from "firebase/firestore"; 
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import './TinderCards.css' ;
//import db from './test'


function TinderCards() {
    const [people , setPeople] = useState([]) ;
    // Piece of code which runs based on a condition
    
    const getData = async () => {
        const querySnapshot = await getDocs(collection(db, "people"));
        let data = [];
        querySnapshot.forEach((doc) => {
            data.push(doc.data())
        });
        console.log(data)
        setPeople(data);
    }

    useEffect(() => {
        // c'est ici que le code s'execute ...
        
        //this will run ONCE when the component loads , and never again  
        getData();
    }, []) ;

        console.log(db)
    // normally javascript and BAD react
    // const people = []
    // people.push("shgf" , "dine")
    // GOOD in react (Push to in array in react)
    // setPeople(.[..people, "dine" , "eyty"])
    return (
        <div className="TinderCards">
            <h1>Tinder cards</h1>
            <div className="tinderCards__cardContainer">
            {people.map((person) => (
                <TinderCard
                className="swipe"
                // always give keys in react :
                // Allows react to efficiently re-render a list ; Makes ur app super fast 
                // (Faites ça toujours dans votre code mais souvent vous ne pouvez voir l'avantage immediatement) 
                key={person.name}
                preventSwipe = {['up' , 'down']}
                >
                    <div
                    style={{ backgroundImage : `url(${person.url})`}} 
                    className="card">
                        <h3>{person.name}</h3>

                    </div>
                </TinderCard>
            ))}

            </div>
            
        </div>
    )
}

export default TinderCards
