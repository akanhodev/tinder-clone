import React from 'react' ;
import "./Chats.css" ;
import Chat from "./Chat"

function Chats() {
    return (
        <div className="chats">
            <Chat 
                name="Melkior"
                message="Tu m'as acheté le truc de la derniere fois"
                timestamp="35 minutes ago"
                profilePic="data:image/jpeg;base64,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"
            
            
            />

            <Chat 
                name="Dine Inoussa"
                message="slt frere"
                timestamp="35 minutes ago"
                profilePic="https://pbs.twimg.com/profile_images/1383754626915201033/CPWrkrhI.jpg"
            
            
            />

            <Chat 
                name="Auxil Pandza"
                message="Yo bro"
                timestamp="35 minutes ago"
                profilePic="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202105/Andrea_Jeremiah_Covid-19_posit_1200x768.jpeg?1n33VjzRNwrNNdC2By3.gOrwGWDdlXux&size=770:433"
            
            
            />

            <Chat 
                name="Esperos The rich"
                message="salut Esperos"
                timestamp="35 minutes ago"
                profilePic="https://cdn.parkrecord.com/wp-content/uploads/sites/11/2020/07/missingboy-tpr-070420-1.jpg"
            
            
            />

            <Chat 
                name="Boy Stand"
                message="Cc cmt cv"
                timestamp="35 minutes ago"
                profilePic="https://www.koimoi.com/wp-content/new-galleries/2020/07/a-joke-should-be-taken-as-a-joke-anubhav-singh-bassi-0001.jpg"
            
            
            />
            
        </div>
    )
}

export default Chats
