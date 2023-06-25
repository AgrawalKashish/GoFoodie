import React from "react";
import { Link } from "react-router-dom";
export default function Cart() {
  return (
    <div>
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img src="https://source.unsplash.com/random/3000x3000/?swiggy" style={{width: "100%", height: "100%", overflow: "hidden"}} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">card's content.</p>
            <div className="container w-100">
              <select className="m-2 h-100  bg-success-rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100 bg-success-rounded">
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className="d-inline h-100 fs-4"></div>
            </div>
            <Link to="/" className="btn btn-primary">
              Go somewhere
            </Link>
          </div>
        </div>
      </div>
  );
}
