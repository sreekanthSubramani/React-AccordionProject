import { useState } from "react";
import { dataRender } from "./data";
import "./App.css";
import { FaAngleDoubleDown } from "react-icons/fa";
import { FaAngleDoubleUp } from "react-icons/fa";

function App() {
  const [singleSelection, setSingleSelection] = useState("");
  const [toggle, setToggler] = useState(false)
  const [multipleViewer , setMultipleViewer] = useState([])

  function singleSelectionViewer(id) {
    setSingleSelection(id === singleSelection || id);
  }
  function multiView(id){
    let copy = [...multipleViewer]
    let indexFinder = copy.indexOf(id)

    if(indexFinder === -1) copy.push(id)
    else copy.splice(indexFinder, 1)
    setMultipleViewer(copy)
      
}

  return (
    <>
      <div>
        <h1>Accordion Project !</h1>
        <div className="multipleMode">
        <button onClick={() => setToggler(prev => !prev)}>
          Multiple View
        </button>
        <span className="togglerNot">{toggle ? <p>Multiple Selection Mode</p>: <p>Single Selection Mode</p>}</span>
        </div>
        <div className="box-type">
          <ul className="individual-box">
            {dataRender.map((elem, index) => {
              return (
                <div key={index}>
                  <div>
                    <div className="accordion">
                      <h3>{elem.Question}</h3>
                      <span onClick={toggle ? ()=> multiView(elem.id): () => singleSelectionViewer(elem.id)}>
                        {singleSelection === elem.id || multipleViewer.indexOf(elem.id) !== -1 ? (
                          <FaAngleDoubleUp />
                        ) : (
                          <FaAngleDoubleDown />
                        )}{" "}
                      </span>
                    </div>
                  </div>
                  <div>
                    {singleSelection === elem.id || multipleViewer.indexOf(elem.id) !== -1 ? (
                      <div>{elem.Answers}</div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
