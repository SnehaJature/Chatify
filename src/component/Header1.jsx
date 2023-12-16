import arrow from "/src/assets/angle-down.svg"
import '/Users/snehajature/Chatify/src/style/Header1.css'
export default function Header1() {
    return (
        <>
            <div className="header1">
                <div className="content1">
                    <div className="frame-parent2">
                        <div className="directory-parent">
                            <div className="dir">Messages</div>
                            <div className="angle-down1"><img src={arrow} alt="error" /></div>
                        </div>
                        <div className="number-wrapper">
                            <div className="dir">12</div>
                        </div>
                    </div>
                    <div className="plus-wrapper">
                        <div className="plus">+</div>
                    </div>
                </div>

                <div className="divider2" />
            </div>

        </>
    )
}