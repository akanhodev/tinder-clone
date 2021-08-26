import React , {useState  , useEffect } from 'react' ;
import TinderCard from 'react-tinder-card';
import database from './firebase'
import './TinderCards.css' ;


function TinderCards() {
    const [people , setPeople] = useState([
        {
        //     name : "Dine INOUSSA" ,
        //     url : "https://pbs.twimg.com/profile_images/1383754626915201033/CPWrkrhI.jpg"
        // }, 
        // {
        //     name : "Bill Gates" ,
        //     url : "https://upload.wikimedia.org/wikipedia/commons/a/af/Bill_Gates_-_Nov._8%2C_2019.jpg"

        // } ,
        // {
        //     name : "Pr Alain CAPO-CHICHI" ,
        //     url : "https://lechasseur.info/wp-content/uploads/2019/08/alain-capo-chichi.jpg"

        // } ,
        // {
        //     name : "M. BARRY ABDOULAYE " ,
        //     url : "https://avatars.githubusercontent.com/u/32708170?v=4"

        // } ,
        // {
        //     name : "M. Viranson HOUNOUVI " ,
        //     url : "https://pbs.twimg.com/profile_images/1337315652474957827/chng7ZYL_400x400.jpg"

        // } ,
        // {
        //     name : "Steave Jobs " ,
        //     url : "https://bitblogger.org/wp-content/uploads/2021/07/Steve-Jobs-first-job-app-auctioned-with-NFT-on-offer.jpg" ,

        // } ,
        // {
        //     name : "Mark zuckeberg" ,
        //     url : "https://i.insider.com/60c1df2b23393a00188e25da?width=1136&format=jpeg"

        } ,
    ]) ;
    // Piece of code which runs based on a condition
    useEffect(() => {
        // c'est ici que le code s'execute ...
        
        //this will run ONCE when the component loads , and never again  
        database.collection('people').onSnapshot(snapshot => (
            snapshot.docs.map(doc => doc.data)

        ))

    }, []) ;
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
