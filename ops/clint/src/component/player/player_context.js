import { createContext, useState } from 'react';
import Player_disp from './player_disp';
import Login_player from './player_login';

export const Context = createContext(null);

const PlayerContext = (props) => {
    const [Data, setData] = useState({});
    console.log(Data,"context")
    const addData = (data) => {
      setData(data);
    };
  
    return (
      <Context.Provider value={{ Data,addData,setData}}>
        {props.children}
      </Context.Provider>
    );
  };
  
export default PlayerContext
