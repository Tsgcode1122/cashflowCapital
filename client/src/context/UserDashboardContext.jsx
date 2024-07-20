// context.jsx

import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

// Create a context object
export const UserDashboardContext = createContext();

// Context Provider component
export const UserDashboardProvider = ({ children }) => {
  const [userDashboardDetails, setUserDashboardDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDashboardDetails = async () => {
      try {
        const response = await axios.get(
          `https://cashflowcapital.onrender.com/api/userDashboard/dashboard/${userId}`,
        );
        setUserDashboardDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user dashboard details:", error);
        setLoading(false);
      }
    };

    fetchUserDashboardDetails();
  }, []);

  return (
    <UserDashboardContext.Provider value={{ userDashboardDetails, loading }}>
      {children}
    </UserDashboardContext.Provider>
  );
};
export const useUserDashboard = () => useContext(UserDashboardContext);
