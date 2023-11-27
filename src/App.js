import { useState } from "react";

function App() {

  const [hori, setHori] = useState(10);
  const [veri, setVeri] = useState(10);
  const [blur, setBlur] = useState(10);
  const [spread, setSpread] = useState(10);
  const [color, setColor] = useState("black");

  return (
    <div className="app">
        <div className="control">
          <div className="form-group">
             <label>طول افقی</label>
             <input type="range" 
             min="-200"
             max="200"
             class="form-range" />
          </div>
          <div className="form-group">
             <label>طول عمودی</label>
             <input type="range" 
             min="-200"
             max="200"
             class="form-range" />
          </div>
          <div className="form-group">
             <label>تاری</label>
             <input type="range"
             min="0"
             max="100"
             class="form-range" />
          </div>
          <div className="form-group">
             <label>گسترش رنگ</label>
             <input type="range" 
             min="-100"
             max="50"
             class="form-range" />
          </div>
          <div className="form-group">
             <label>رنگ</label>
             <input type="color"/>
          </div>
        </div>
        <div className="outpot">
          <div className="box">
            <p>box-shadow: 13px 12px 11px 10px #c00</p>
          </div>
        </div>
    </div>
  );
}

export default App;
