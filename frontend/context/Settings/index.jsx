const SettingsContext = React.createContext();

export const SettingsProvider = ({ children }) => {
  const [defaultSettings, setSettings] = React.useState({ languaje: "" });

  const changeSettings = (updatedSettings) => {
    setSettings({ ...defaultSettings, ...updatedSettings });
  };

  const settings = React.useMemo(() => {
    return {
      defaultSettings,
      changeSettings,
    };
  }, [defaultSettings]);

  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = React.useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be inside SettingsProvider");
  }
  return context;
};
