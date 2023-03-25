import { createContext, useState } from "react";
import { IUser } from "./IUser";
import { User } from "./User";

export interface PropsContext{
    user:IUser,
    updateUser: (user: IUser) =>void
}

const props : PropsContext = {
  user:new User(0,'',''),
  updateUser: function(user: IUser){
    return;
  }  
}
export const UserContext = createContext<PropsContext>(props);

export function UserProvier({children}:any) {
    const [user, setUser] = useState(new User(0,'',''));
    
    const updateUser = (user: IUser) => {
        setUser(user);
    };
    return(
        <UserContext.Provider value={{user, updateUser}}>
            {children}
        </UserContext.Provider>
    );
}