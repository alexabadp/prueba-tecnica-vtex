import { useState, useEffect } from "react";
import { AppContext } from "./AppContext";

const VALUES_DEFAULT ={
  products: [],
  productDetail: '',
  sku:[]
}

const AppProvider = ({ children }: any) => {
  const storedData = localStorage.getItem("appInformation");
  const initialData = storedData ? JSON.parse(storedData) : VALUES_DEFAULT;

  const [appInformation, setAppInformation] = useState(initialData);


  useEffect(() => {
    localStorage.setItem("appInformation", JSON.stringify(appInformation));
  }, [appInformation]);

  return (
    <AppContext.Provider value={{ appInformation, setAppInformation }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
