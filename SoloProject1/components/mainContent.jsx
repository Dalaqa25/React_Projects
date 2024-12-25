import fujiImg from "/fuji.jpg";
import locationPin from "/location-pin.png";

function MainContent() {
    return (
        <div className="mainContentainer">
            <main>
                <div className="imgContainer">
                    <img src= { fujiImg } alt="fuji image" />
                </div>
            </main>
        </div>
    )
}

export default MainContent;