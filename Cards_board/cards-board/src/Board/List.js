import React, {useState, useEffect} from 'react'
import Pop from './pop'
import './List.css'
import Card from './Card'
import axios from 'axios'
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import { FaEdit, FaTimes, FaCheck } from 'react-icons/fa';


function List({data, deleteList, tableName, tableListName, setList}) {

  const [editMode, setEditMode] = useState(false);
  const [newListName, setNewListName] = useState(data.listName);
  
  const handleListNameClick = () => {
    setEditMode(true);
  };

  const handleCancelClick = () => {
    setEditMode(false);
    setNewListName(data.listName);
  };

  const handleSaveClick = () => {
    // Perform save/update logic here
    // For example, call an API to update the list name in the database
    if (newListName.trim() === '') {
      // Empty string validation
      alert("List name is empty")
      return;
    }
    setEditMode(false);
    data.listName = newListName; // Update the list name in the data object
    const id = data.listId;
    const name = newListName;
    const tableName = tableListName;
    const type = "list"
    axios.post('http://localhost:8087/modifyName', { tableName, id, name, type}).then(res => console.log(res.data).catch(err => console.log(err)));
  };

  const handleListNameChange = (e) => {
    setNewListName(e.target.value);
  };
  const fetchData = async () => {
    try {
      const tableCardName = tableName
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
  const [cardbtnPopup, setCardbtnPopup] = useState(false);
  const addCard = (name,id, setIsVisible) =>{
    console.log("inside addCard")
    const type = "card";
    if(name =="-1")
    {
      console.log(name)
      console.log(type)
      console.log("no")
      setCardbtnPopup(false);
      setIsVisible(false)
      return
    }

    if(name != "")
    {
      console.log("suxxx");
      axios.post('http://localhost:8087/addVal', {name, tableName, type, id}).then(res =>console.log(res.data).catch(err=>console.log(err)));
      setCardbtnPopup(false);
      fetchData();
    }
  }

  const deleteCard = (cardData) =>{
    const listId = cardData.cardId;
    const listName = cardData.cardName;
    const tableListName = tableName
    const type = "Card";
    console.log("came inside deleteList")
    axios.post('http://localhost:8087/removeVal', {tableListName ,listId, listName, type}).then(res => console.log(res.data).catch(err => console.log(err)));
    fetchData();
  }

  const modifyCardContent = (cardData, type,cardContent) =>
  {
    const cardId = cardData.cardId;
    const cardName = cardData.cardName;
    const tableCardName = tableName;
    axios.post('http://localhost:8087/modifyVal', {tableCardName , cardId, cardName, cardContent, type}).then(res => console.log(res.data).catch(err => console.log(err)));
    fetchData();
  }

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.CARD,
    drop: (item) => {
      // Handle the card drop here
      const droppedCard = item.cardData;
      const destinationListId = data.listId;
      const sourceListId = item.listId;
      const type = "listId"
      // Perform the necessary actions, e.g., move the card to the destination list
      console.log('Dropped card:', droppedCard);
      console.log('Destination list ID:', destinationListId);
      console.log('Source list ID:', sourceListId);
      modifyCardContent(droppedCard, type, destinationListId);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }),
  [data.listId]
  );


  return (
    
    <div>
      <Pop trigger={cardbtnPopup} addList ={addCard} type = {"Card"} tableName={tableName} id={data.listId}/>
      <div className='list' ref={drop}>
      <div className='listTop'>
      <div className={`listNameContainer ${editMode ? 'editMode' : ''}`}>
        {editMode ? (
          <>
            <input
              type="text"
              value={newListName}
              onChange={handleListNameChange}
              className="listNameEditInput"
            />
            <FaTimes className="editLogo cancelEdit" onClick={handleCancelClick} />
            <FaCheck className="editLogo saveEdit" onClick={handleSaveClick} />
          </>
        ) : (
          <>
            <p className="listName" onClick={handleListNameClick}>
            <FaEdit className="editModeIcon" />{data.listName}
            </p>
            <div className='line'></div>
          </>
        )}
      </div>  
      <button className='listCancel'onClick={()=>deleteList(data)} >X</button><br/>
      <button className='AddCard' onClick={()=>setCardbtnPopup(true)}>Add Card</button>
      </div>
      <div className='allCards'>
      {data.cards.map((cardData, i)=>{
        return(
            <Card className='allList' cardData={cardData} deleteCard={()=>deleteCard(cardData)} modifyCardContent={modifyCardContent} listId={data.listId} tableCardName={tableName}/> 
        )}
      )}
      </div>
    </div>
    </div>
    
  );
}

export default List;