import '/Users/snehajature/Chatify/src/style/Chatlist.css'
import search1 from "/src/assets/search (1).svg"
import ChatItem from './chatList-Item'

const Chatlist = (props) => {

    const conversationItem = props.conversations.map((conversation, index) => {
        const selectedConversationIndex = 0;
        return <ChatItem 
        key={index} 
        isActive = {index === selectedConversationIndex}
        conversation={conversation} />;
    });
    return (
        <>
            <div className="chatList-parent">
                <div className="global-list-inner">
                    <div className="search-parent">
                        <div className="paperclip"><img src={search1} alt="error" /></div>
                        <input className="search-messages" type='search' placeholder='Search messages' /></div>

                </div>
                    <div className='message-listData'>
                <div className="message-list1">
                    {conversationItem}

                    </div>
                </div>
            </div>


        </>
    )
}
export default Chatlist;