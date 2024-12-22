import locationPin from "/location-pin.png"

function MainContent( props ) {
    return (
        <main>
            <div className="mainContent">
                <div className="card">
                    <div className="imgBox">
                        <img src={ props.img.src } alt={ props.img.alt }/>
                    </div>
                    <div className="descriptionBox">
                        <div className="location">
                            <img src={ locationPin } alt="" />
                            <span className="nameOFCounrty">{ props.country }</span>
                            <span className="GoogleMap"><a href={ props.googleMapsLink }>View on Google Maps</a></span>
                        </div>
                        <h1>{ props.title }</h1>
                        <h4>{ props.dates }</h4>
                        <p>{props.text}</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MainContent;