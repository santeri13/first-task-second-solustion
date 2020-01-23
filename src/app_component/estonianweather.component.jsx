import React from "react";

const EstonianWeather = (props) => {
    return(
        <div className="container">
            <div className="cards">
                <h1>{props.city}</h1>
                {props.temp_celsius ? (<h1 className="py-2">{props.temp_celsius}&deg;</h1>):null}
                <div>{props.error ? error():null}</div>
                <form onSubmit={props.loadweather}>
                    <div className="row">
                        <div className="col-md-3 offset-md-2">
                            <input
                            type="text"
                            className="form-control"
                            name="city"
                            autoComplete="off"
                            placeholder="Linn"
                            /> 
                        </div>
                        <div className="col-md-3 mt-md-0 text-md-left">
                            <button className="btn btn-warning">Näita Temperatuuri</button>
                        </div>
                        <div className="col-md-3 mt-md-0 text-md-left">
                            <button onClick={props.tume} className="btn btn-warning">tume</button>
                            <button onClick={props.hele} className="btn btn-warning">hele</button>
                        </div>
                    </div>
                </form>
                <form>

                </form>
            </div>
        </div>  
    );
};
function error(){
    return(
        <div className="alert alert-danger mx-5" role="alert">
            Please enter city
        </div>
    )
}
export default EstonianWeather;