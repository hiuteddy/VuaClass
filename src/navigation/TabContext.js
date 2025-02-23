// TabContext.js
import React, { createContext, useContext, useState } from 'react';

const TabContext = createContext();

export const TabProvider = ({ children }) => {
  const [currentProfileTab, setCurrentProfileTab] = useState(null);
  const resetTab = (navigation, tabName) => {
    if (tabName === 'Home') {
      navigation.navigate('Home', { screen: 'HomeScreen' });
    } else if (tabName === 'Class') {
      navigation.navigate('Class', { screen: 'ClassSrceen' });
    } else if (tabName === 'Notification') {
      navigation.navigate('Notification', { screen: 'NoficationSrceen' });
    } else if (tabName === 'Menu') {
      navigation.navigate('Menu', { screen: 'Menuu' });
    }
  };

  const resetOtherTabInProfile = (navigation, newTab) => {
    if (currentProfileTab && currentProfileTab !== newTab) {
      resetTab(navigation, currentProfileTab);
    }
  };

  return (
    <TabContext.Provider
      value={{
        currentProfileTab,
        setCurrentProfileTab,
        resetOtherTabInProfile,
      }}
    >
      {children}
    </TabContext.Provider>
  );
};

export const useTabContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('useTabContext must be used within a TabProvider');
  }
  return context;
};
