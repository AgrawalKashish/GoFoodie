import React, {useState} from "react";
import { Link,  useNavigate } from "react-router-dom";
import { useCart } from "./addcart";
import Badge from "react-bootstrap/Badge";
import Modal from "../Modal";
import Cart from "../screens/Cart";
export default function Navbar() {
  const navigate = useNavigate();
  const [cartView, setCartView] = useState(false)
  localStorage.setItem('temp', "first")
  const Navigate = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
    window.location.reload();
  };
  const loadCart = () => {
    setCartView(true)
}

const items = useCart();
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-success"
        style={{ backgroundColor: "green" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand fs-1" to="/">
            GoFoodie
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2">
            <li className="nav-item">
                 <Link className="nav-link active" aria-current="page" to="/">
                   Home
                 </Link>
                 </li>
              {(localStorage.getItem("authToken") )? (
                 <li className="nav-item">
                  <li className="nav-item">
                                    <Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/myorder" >My Orders</Link>  {/* index.css - nav-link color white */}
                                </li>
               </li>
              ) : ( "" )}
            </ul>
            <div className="d-flex">
            {(localStorage.getItem("authToken") )? (
             <div>
              <div className="btn bg-white text-success mx-2 " onClick={loadCart}>
                                    <Badge color="secondary" badgeContent={items.length} >
                                        {/* <ShoppingCartIcon /> */}
                                    </Badge>
                                    Cart
                                </div>

                                {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}

               <Link className="btn text-danger mx-1 bg-white" onClick={Navigate}>
                LogOut
              </Link>
             </div>
            ) : (
             <div>
               <Link className="btn text-success mx-1 bg-white" to="/login">
                Login
              </Link>
              <Link className="btn text-success mx-1 bg-white" to="/createuser">
              SignUp
            </Link>
              </div>
            )}
             
            </div>
            
            
          </div>
        </div>
      </nav>
    </div>
  );
}
