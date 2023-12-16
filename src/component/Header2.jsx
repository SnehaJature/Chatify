import '/Users/snehajature/Chatify/src/style/Header2.css'
import user from "/src/assets/Frame 10.svg"
import phone from "/src/assets/phone.svg"
import ellipse from "/src/assets/ellipsis-v.svg"

export default function Header2() {
    return (
        <>
            <div className="top-content">

                <div className="header2">
                    <div className="user-content">
                        <img
                            className="user-content-child"
                            alt=""
                            src={user}
                        />
                        <div className="top-content">
                            <div className="user1">Florencio Dorrance</div>
                            <div className="ellipse-parent">
                                <div className="frame-child" ></div>
                                <div className="online">Online</div>
                            </div>
                        </div>
                    </div>
                    <div className="call-button">
                        <div className="phone"><img src={phone} alt="" /></div>
                        <div className="call">Call</div>
                    </div>
                </div>
            <div className="divider" />
            </div>



        </>
    )
}