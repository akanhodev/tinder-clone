import React , { useState } from 'react' ;

import { Avatar } from '@material-ui/core' ;
import './ChatScreen.css'


function ChatScreen() {
    const [input , setInput] = useState()
    const [messages , setMessages] = useState([
        {
            name : "Ellen",
            image : "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1179869779%2F0x0.jpg",
            message: "whats up men"
        } ,
        {
            name : "Djamal",
            image : "data:image/jpeg;base64,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",
            message: "how's it going"
        } , 
        {
            // name : "bill Gates",
            // image : "...",
            message: "Nice to meet you"
        }
    ])
    const handleSend = e => {
        e.preventDefault() ; 
        setMessages([...messages , {message : input}]) ;
        setInput('') ; 
    }
    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">You MATCHED WITH ELLEN ON 10/08/21</p>
            {messages.map(message =>(
                message.name ? (
                    <div className="chatScreen__message">
                    <Avatar 
                    className="chat__image" 
                    alt ={message.name} 
                    src={message.image}/>
                    <p className="chatScreen__text">{message.message}</p>
                </div>

                ) : (
                    <div className="chatScreen__message"> 
                        <p className="chatScreen__user">{message.message}</p>
                    </div>

                    

                )
                
            ))}
            <div className="chatScreen__input">
                <form>
                    <input 
                    value = {input}
                    onChange={(e ) =>setInput(e.target.value)}
                    className="chatScreen__inputfield"
                    placeholder="Veillez saisir votre message"
                    type="text" />
                    <button type="submit" onClick={handleSend} className="chatScreen__inputbutton">SEND</button>
                </form>
            </div>
            
        </div>
    )
}

export default ChatScreen
