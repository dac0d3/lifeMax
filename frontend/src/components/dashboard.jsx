import React, { useState, useEffect } from "react";
import '../css/dashboard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

// Individual tracking component
const TrackingComponent = ({ title, value }) => {
    return (
        <div className="tracking-component">
            <h3>{title}</h3>
            <p>{value}</p>
        </div>
    );
};

const Dashboard = () => {
    // State for managing the dropdown visibility
    const [dropdownOpen, setDropdownOpen] = useState(false);
    // State to track total calories consumed
    const [calories, setCalories] = useState(1800);

    // Effect to close dropdown when clicking outside the user menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".user-menu")) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    // Sample tracking data
    const trackingData = [
        { title: "Calories", value: `${calories} kcal` },
        { title: "Steps", value: "10,500" },
        { title: "Water Intake", value: "2.5L" },
        { title: "Sleep Hours", value: "7.5 hrs" },
        { title: "Heart Rate", value: "72 bpm" },
        { title: "Workout Time", value: "1.2 hrs" },
        { title: "Stress Level", value: "Moderate" },
        { title: "Mood", value: "Happy" },
        { title: "Screen Time", value: "3 hrs" },
        { title: "Productivity", value: "High" },
        { title: "Meditation", value: "15 min" },
        { title: "Caffeine Intake", value: "2 cups" },
        { title: "Weight", value: "165 lbs" },
        { title: "Blood Pressure", value: "120/80" },
        { title: "Cholesterol", value: "Normal" },
        { title: "Hydration Level", value: "Good" }
    ];

    return (
        <>
            {/* Navigation Bar */}
            <nav className="nav-bar">
                <div className="user-menu">
                    {/* User button to toggle dropdown */}
                    <button className="user-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
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
            
            {/* Main Container positioned below the nav-bar */}
            <div className="main-container">
                {/* Grid Container for Tracking Components */}
                <div className="tracking-grid">
                    {trackingData.map((item, index) => (
                        <TrackingComponent key={index} title={item.title} value={item.value} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Dashboard;
