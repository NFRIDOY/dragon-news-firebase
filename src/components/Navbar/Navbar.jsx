import { NavLink } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {

    return (
        <div className="max-w-3xl ml-auto mr-24 font-poppins">
            <div className="flex justify-between font-semibold ">
                <ol className="flex gap-4">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : "inactive"
                        }
                    >Home</NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : "inactive"
                        }
                    >About</NavLink>
                    <NavLink
                        to="/career"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : "inactive"
                        }
                    >Career</NavLink>
                </ol>
                <div>
                    <span></span>
                    <button className="btn btn-neutral">Login</button>
                </div>
            </div>
        </div>
    )
}
