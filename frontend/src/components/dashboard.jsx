import React, { useState, useEffect } from "react";
import '../css/dashboard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";





// Dashboard component
const Dashboard = () => {
    // State for managing the dropdown visibility
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    // Close dropdown if clicking outside the user menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".user-menu")) {
                setDropdownOpen(false); // Close dropdown when clicking outside
            }
        };

        document.addEventListener("click", handleClickOutside); // Listen for clicks
        return () => {
            document.removeEventListener("click", handleClickOutside); // Cleanup on component unmount
        };
    }, []);

    return (
        <>
            {/* Navigation Bar */}
            <nav className="nav-bar">
                {/* User Menu */}
                <div className="user-menu">
                    {/* User button to toggle dropdown */}
                    <button className="user-btn" onClick={toggleDropdown}>
                        <FontAwesomeIcon icon={faUserCircle} className="user-icon" />
                    </button>

                    {/* Dropdown Menu */}
                    {dropdownOpen && (
                        <ul className="dropdown-menu">
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">Settings</a></li>
                            <li><a href="#">Logout</a></li>
                        </ul>
                    )}
                </div>
            </nav>

            {/* Dashboard Content */}
            <div>
                <h2>Welcome to your future</h2>
            </div>
        </>
    );
}

export default Dashboard;
