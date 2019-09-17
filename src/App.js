import React from "react"
import Carousel from "./library/Carousel"
// import Popup from "./library/PopUpDetail"
// import DragAndDrop from "./library/DragAndDrop"
// import TabsBar from "./library/TabsBar"

// // Carousel
const ITEM = [
  "test1",
  "test2",
  "test3",
  "test4",
  "test5",
  "test6",
];
const AMOUNT = 4     //amout of item per page

//Popup
// const DATA = { id: 0, detail: "1" }

function App() {
    return (
        <>
            <Carousel amount={AMOUNT} listItem={ITEM}/>
            {/* <Popup data={DATA} /> */}
            {/* <DragAndDrop/> */}
            {/* <TabsBar/> */}
        </>
    );
}
export default App
