import '/Users/snehajature/Chatify/src/style/Chat.css'
import user from "/src/assets/Frame 10.svg"
import paperclip from "/src/assets/paperclip.svg"
import paperPlane from "/src/assets/paper-plane.svg"

export default function Chat() {
    return (
        <>
            <div className="top-content">

                <div className="message-list">
                    <div className="frame-parent">
                        <img className="frame-item" alt="" src={user} />
                        <div className="message-item-parent">
                            <div className="message-item">
                                <div className="message-content-goes">
                                    omg, this is amazing
                                </div>
                            </div>
                            <div className="message-item">
                                <div className="message-content-goes">perfect! ✅</div>
                            </div>
                            <div className="message-item">
                                <div className="message-content-goes">
                                    Wow, this is really epic
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="frame-group">
                        <div className="top-content">
                            <div className="message-item3">
                                <div className="message-content-goes">How are you?</div>
                            </div>
                        </div>
                        <img className="frame-item" alt="" src={user} />
                    </div>
                    <div className="frame-parent">
                        <img className="frame-item" alt="" src={user} />
                        <div className="message-item-parent">
                            <div className="message-item">
                                <div className="message-content-goes">
                                    just ideas for next time
                                </div>
                            </div>
                            <div className="message-item">
                                <div className="message-content-goes">
                                    I'll be there in 2 mins ⏰
                                </div>
                            </div>
                            <div className="message-item6">
                                <div className="message-content-goes">
                                    Message content goes here
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="frame-group">
                        <div className="message-item-container">
                            <div className="message-item3">
                                <div className="message-content-goes">woohoooo</div>
                            </div>
                            <div className="message-item3">
                                <div className="message-content-goes">Haha oh man</div>
                            </div>
                            <div className="message-item3">
                                <div className="message-content-goes">
                                    Haha that's terrifying 😂
                                </div>
                            </div>
                        </div>
                        <img className="frame-item" alt="" src={user} />
                    </div>
                    <div className="frame-parent">
                        <img className="frame-item" alt="" src={user} />
                        <div className="message-item-parent">
                            <div className="message-item">
                                <div className="message-content-goes">aww</div>
                            </div>
                            <div className="message-item">
                                <div className="message-content-goes">
                                    omg, this is amazing
                                </div>
                            </div>
                            <div className="message-item">
                                <div className="message-content-goes">woohoooo 🔥</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="message-box">
                    <div className="paperclip"><img src={paperclip} alt="error" /></div>
                    <form className="form">
                        <input className="input" placeholder="Type a message" required />
                        <button className='submit-button' type="submit"><img src={paperPlane} /></button>
                    </form>
                </div>
            </div>

        </>
    )
}