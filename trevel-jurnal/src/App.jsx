import Header from "./components/header";
import MainContent from "./components/MainContent";
import data from "../data";


function App() {

    const dataElements = data.map((places) => {
       return (  
            <MainContent 
                key = { places.id }
                {...places }
            />
        )
    })

    return (
        <>
            <Header />
            { dataElements }
        </>
    )
}

export default App;