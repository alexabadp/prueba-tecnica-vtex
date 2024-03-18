import { createContext } from "react";

export type AppContext = {
  appInformation: any
  setAppInformation: (c:any) => void
}

export const AppContext = createContext<AppContext>({
  appInformation: {},
  setAppInformation: ()=>{}
})