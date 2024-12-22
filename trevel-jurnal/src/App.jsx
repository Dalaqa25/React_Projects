import Header from "./components/header";
import MainContent from "./components/MainContent";
import data from "../data";


function App() {

    const dataElements = data.map((places) => {
       return <MainContent 
            img = {places.img}
            title = { places.title }
            country = { places.country }
            googleMapsLink = { places.googleMapsLink }
            dates = { places.dates }
            text = { places.text }
        />
    })

    return (
        <>
            <Header />
            { dataElements }
        </>
    )
}

export default App;