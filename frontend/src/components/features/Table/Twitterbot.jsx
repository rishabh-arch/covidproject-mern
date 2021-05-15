import React from "react";
import "./Twitterbot.css"
const Twitterbot = () => {
    return (

        <div className="row d-flex justify-content-center mt-5 mr-0 ml-0">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body text-center">
                        <h4 className="card-title">Select Checkboxes</h4>
                        <p className="card-description h5">Tweets should have these words:</p>
                        <input id="city" type="text" className="inp form-control" placeholder="Enter City Name" />
                        <br />
                        <label className="check">
                            <input className="inp" value="Beds" type="checkbox" />
                            <span>Beds</span>
                        </label>
                        <label className="check">
                            <input className="inp" value="ICU" type="checkbox" />
                            <span>ICU</span>
                        </label>
                        <label className="check">
                            <input className="inp" value="Oxygen" type="checkbox" />
                            <span>Oxygen</span>
                        </label>
                        <label className="check">
                            <input className="inp" value="Ventilator" type="checkbox" />
                            <span>Ventilator</span>
                        </label>
                        <label className="check">
                            <input className="inp" value="tests" type="checkbox" />
                            <span>Tests</span>
                        </label>
                        <label className="check">
                            <input className="inp" value="fabiflu" type="checkbox" />
                            <span>Fabiflu</span>
                        </label>
                        <label className="check">
                            <input className="inp" value="remdesivir" type="checkbox" />
                            <span>Remdesivir</span>
                        </label>
                        <label className="check">
                            <input className="inp" value="favipiravir" type="checkbox" />
                            <span>Favipiravir</span>
                        </label>
                        <label className="check">
                            <input className="inp" value="tocilizumab" type="checkbox" />
                            <span>Tocilizumab</span>
                        </label>
                        <label className="check">
                            <input className="inp" value="plasma" type="checkbox" />
                            <span>Plasma</span>
                        </label>
                        <label className="check">
                            <input className="inp" value="food" type="checkbox" />
                            <span>Food</span>
                        </label><br />
                        <input id="topbox" type="text" className="inp form-control" placeholder="Other(Optional)" defaultValue="" />

                        <p className="card-description h5">Tweets should NOT have these words:</p>
                        <label className="check">
                            <input className="inp2" id="notVer" value="not verified" type="checkbox" />
                            <span>Not Verified</span>
                        </label>
                        <label className="check">
                            <input className="inp2" id="Need" value="needed" type="checkbox" defaultChecked />
                            <span>Needed</span>
                        </label>
                        <label className="check">
                            <input className="inp2" id="Req" value="required" type="checkbox" defaultChecked />
                            <span>Required</span>
                        </label>
                        <input id="bottombox" type="text" className="inp form-control" placeholder="Other(Optional)" defaultValue="" />

                        <br />

                        <button className="btn btn-primary p-2 mt-2" onClick={() => {

                            const todo = [...document.querySelectorAll('.inp:checked')].map(e => e.value);
                            const Nottodo = [...document.querySelectorAll('.inp2:checked')].map(e => e.value);
                            const todo_arr = todo.reduce((r, a) => r.concat(a, "OR"), [0]).slice(1, -1)
                            const Nottodo_arr = Nottodo.reduce((r, a) => r.concat(a, "-"), [0]).slice(1, -1)
                            const Nottodo_arr_split = Nottodo_arr.join(" ");
                            const todo_arr_split = todo_arr.join(" ");

                            const cityname = document.getElementById("city").value;
                            const topbox = document.getElementById("topbox").value;
                            const bottombox = document.getElementById("bottombox").value;

                            let TwitterUrl = `verified ${cityname} (${todo_arr_split})-${Nottodo_arr_split}&f=live`;
                            if (topbox !== "" && topbox !== " ") {
                                TwitterUrl = `verified ${cityname} (${todo_arr_split} OR ${topbox})-${Nottodo_arr_split}&f=live`
                            }
                            if (bottombox !== "" && bottombox !== " ") {
                                TwitterUrl = `verified ${cityname} (${todo_arr_split})-${Nottodo_arr_split}-${bottombox}&f=live`
                            }
                            if ((bottombox !== "" && bottombox !== " ") && (topbox !== "" && topbox !== " ")) {
                                TwitterUrl = `verified ${cityname} (${todo_arr_split} OR ${topbox})-${Nottodo_arr_split}-${bottombox}&f=live`
                            }
                           
                            if (cityname !== "") {
                                TwitterUrl = "https://twitter.com/search?q=" + encodeURI(TwitterUrl)
                                window.open(TwitterUrl)
                            }
                            else alert("fill the city name")

                        }}>Goto Link</button>

                    </div>
                </div>
            </div>
        </div>

    )

}

export default Twitterbot;
