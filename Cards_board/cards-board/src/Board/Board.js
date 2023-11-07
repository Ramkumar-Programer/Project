import React, { useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import './Board.css'
import List from './List'
import Pop from './pop'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useNavigate } from 'react-router-dom';

function Board() {
  const navigate = useNavigate();
  const location = useLocation();
  const { username, tableListName, tableCardName } = location.state || {};

  const  [list, setList] =useState([]);
  const [btnPopup, setbtnPopup] = useState(false);

  // useEffect(() => {
  //   if (!(location.state !== null && typeof location.state === 'object')) {
  //     navigate('/Login')
  //   }
  //   else
  //   {
  //     fetchData();
  //   }
  // }, []);

  const fetchData = async () => {
    try {
      const response = await axios.post('http://localhost:8087/fetchDatas', {tableListName, tableCardName});
      try {
        const fetchedData = JSON.parse(response.data);
        setList(fetchedData);
      } catch (error) {
        console.log('Error parsing JSON data:', error);
        setList([]);
      }
    } catch (error) {
      console.log(error);
    }
  };


  const addList = (name, setIsVisible, id) =>{
    console.log("inside addlist")
    console.log(setIsVisible)
    const type = "listName";
    if(name =="-1")
    {
      console.log(name)
      console.log(type)
      setbtnPopup(false);
      setIsVisible(false)
      return
    }
    const tableName = tableListName;
    if(name != "")
    {
      axios.post('http://localhost:8087/addVal', {name, tableName, type}).then(res =>console.log(res.data).catch(err=>console.log(err)));
      setbtnPopup(false);
      fetchData();
    }
  }
  const deleteList = (data) =>{
    const listId = data.listId;
    const listName = data.listName;
    const type = "List"
    console.log("came inside deleteList")
    axios.post('http://localhost:8087/removeVal', {tableListName ,listId, listName, type}).then(res => console.log(res.data).catch(err => console.log(err)));
    fetchData();
  }

  const logout = () =>
  {
    const newState = {
      ...location.state,
      username: null,
      tableListName: null,
      tableCardName: null,
    };

    // Redirect to the login page with the cleared state
    navigate('/Login', newState)
  }
  
  return (
    <div className='BoardFun'>
      <Pop trigger={btnPopup} addList ={addList} type = {"List"} tableName={tableListName} />

      <div className='Board'>
          <div className='topBoard '>
            <h2 className='boardTitle'>Board</h2>
            <div className='usernameLogout'>
              <p className='username'>{username}</p> 
              <button className='logout' onClick={logout}>(Logout)</button>
              <button className='AddList' onClick={()=>setbtnPopup(true)}>Add List</button>
            </div>
        </div>
        <DndProvider backend={HTML5Backend}>
        <div className='allLists'>
          {list.map((data, i)=>{
            console.log(data)
            return(
              <div>
              <List className='allList' data={data} deleteList={deleteList} tableName ={tableCardName} tableListName={tableListName} setList={setList}/>
              </div>
            )
          })}
        </div>
        </DndProvider>
      </div>
    </div>
  );
}

export default Board;