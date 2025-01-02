import React, { createContext, useState } from 'react';

// Create a Context
export const ProfileContext = createContext();

// Create a Provider component
export const ProfileProvider = ({ children }) => {
  const [selectedVendor, setSelectedVendor] = useState(null);

  return (
    <ProfileContext.Provider value={{ selectedVendor, setSelectedVendor }}>
      {children}
    </ProfileContext.Provider>
  );
};