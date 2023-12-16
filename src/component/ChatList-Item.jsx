import React from "react";
import user from "/src/assets/Frame 10.svg"

 const ChatItem = (props) => {
     let className = 'message-component';
     if(props.isActive){
        className += ' active';
     }
    return(<>
        <div className={className}>
            <img
                className="message-component-child"
                alt={props.conversation.ImageAlt}
                src={props.conversation.ImageUrl}
            />
            <div className="frame-parent3">
                <div className="header">
                    <div className="full-name-here-parent">
                        <div className="full-name-here">{props.conversation.title}</div>
                        <div className="m6">{props.conversation.createdAt}</div>
                    </div>
                    <div className="job">{props.conversation.latestMessage}</div>
                </div>

            </div>
        </div>
    </>)
}
export default ChatItem;