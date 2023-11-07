const express = require('express');
const mySql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mySql.createConnection({
    host : "localhost",
    port : 3306,
    user : "root",
    password : "root",
    database : "cardsboard"
});

db.connect((err) => {
    if (err) {
      console.error('Error connecting to the database: ', err);
      return;
    }
    console.log('Connected to the database');
  });

app.post('/login', (req, res) =>
{
    console.log("login")
    const tableListName = req.body.email.replace('@', '_').replace('.', '_') + '_list';
    const tableCardName = req.body.email.replace('@', '_').replace('.', '_') + '_card';
    const sql = "SELECT * FROM userLogin where email = ? and Password = ?";
    console.log(req.body.email)
    console.log(req.body.password)
    db.query(sql, [req.body.email, req.body.password], (err, rows) => {
        if(err)
        {
            return res.json("Login Failed");
        }
        if (rows.length > 0) 
        {
            const user = rows[0]; // Assuming you only expect one row
            return res.json({
                status: "Success",
                name: user.firstName + user.lastName,
                tableListName: tableListName,
                tableCardName : tableCardName
              });
        } else {
              // No rows were found matching the email and password
              return res.json({
                status: "Invalid",
                message: "Invalid email or password"
            });
        }
    })
})


app.post('/register', (req, res) =>{
    console.log("tested")
    
    const sqlInsert = "INSERT INTO userLogin(firstName, lastName, email, Password) VALUES (?, ?, ?, ?)";

    const tableListName = req.body.email.replace('@', '_').replace('.', '_') + '_list';
    const createListTable = `CREATE TABLE ${tableListName} (
      listId INT PRIMARY KEY AUTO_INCREMENT,
      listName VARCHAR(255),
      userName VARCHAR(255),
      FOREIGN KEY (userName) REFERENCES userlogin(email) ON DELETE CASCADE
    )`;

    const tableCardName = req.body.email.replace('@', '_').replace('.', '_') + '_card';
    const createCardTable = `CREATE TABLE ${tableCardName} (
      cardId INT PRIMARY KEY AUTO_INCREMENT,
      cardName VARCHAR(255),
      cardContent TEXT,
      listId INT,
      FOREIGN KEY (listId) REFERENCES ${tableListName}(listId) ON DELETE CASCADE
    )`;

    db.query(sqlInsert, [req.body.fName, req.body.lName, req.body.email, req.body.password], (err, data) => {
      if (err) {
        console.error("Error inserting user:", err);
        return res.json("Resgitry is failed");
      }

      db.query(createListTable, (err, result) => {
        if (err) {
          console.error("Error creating table list:", err);
          return 
        }

        console.log("List table created successfully");

        db.query(createCardTable, (err, result) => {
          if (err) {
            console.error("Error creating table card:", err);
            return ;
          }

          console.log("Card table created successfully");
          return res.json("Success");
        });
      });
    });
        
})

app.post('/addList', (req, res) =>{
  let sql;
  if(req.body.type == "listName")
  {
    sql = `INSERT INTO ${req.body.tableName}(listName) VALUES('${req.body.name}')`;
  }
  else
  {
    sql = `INSERT INTO ${req.body.tableName}(cardName, listId) VALUES('${req.body.name}', ${req.body.id})`;
  }
    db.query(sql, (err, rows) => {
      if (err) {
        // An error occurred during the query execution
        console.log('Query execution failed:', err);
        // Handle the error accordingly
      } else {
        // Query executed successfully
        console.log('Query executed successfully');
        // Handle the success case accordingly
      }
    })
})


app.post('/fetchDatas', (req, res) => {
  // Run the SQL query to fetch the data
  console.log(req.body.tableListName)
  const query = `SELECT c.cardId, c.cardName, c.cardContent, l.listId, l.listName
                FROM test_gmail_com_card AS c
                RIGHT JOIN ${req.body.tableListName} AS l ON c.listId = l.listId`;

  db.query(query, (error, results) => {
    if (error) {
      console.log('Error fetching data:', error);
      res.status(500).json({ error: 'Error fetching data' });
    } else {
      // Transform the result into the desired JSON format
      if (results.length === 0) {
        res.json([]); // Return an empty array if no data is found
        return;
      }
      //const jsonData = {};

      const jsonData = [];
      const listMap = {};

      results.forEach((item) => {
        const { listId, listName, cardId, cardName, cardContent } = item;

        if (!listMap[listId]) {
          listMap[listId] = {
            listId,
            listName,
            cards: []
          };

          jsonData.push(listMap[listId]);
        }
        if(cardId != null)
        {
          listMap[listId].cards.push({
            cardId,
            cardName,
            cardContent
          });
        }
        
      });
      
      jsonData.sort((a, b) => a.listId - b.listId);
      const jsonString = JSON.stringify(jsonData, null, 2);
      console.log(jsonString);
      res.json(jsonString);
    }
  });
});


app.post('/checkExists', (req, res) => {
  console.log("came inside checkExists");

  const sqlQuery = `SELECT * FROM ${req.body.tableName}  WHERE ${req.body.type} = '${req.body.name}'`;
console.log(req.body.type)
console.log(req.body.tableName)
console.log(req.body.name)
  db.query(sqlQuery , (err, rows) => {
    if (err) {
      console.log('Query execution failed:', err);
      return res.json({
        status: 'error',
        message: 'Query execution failed',
      });
    }
    console.log(rows)
    if (rows.length > 0) {
      console.log("name already exists");
      return res.json({
        status: 'error',
        message: 'Name already exists',
      });
    } else {
      console.log("email nonnnnnnnnnnnnn")
      return res.json({ status: 'success' });
    }
  });
});

app.post('/removeVal', (req, res) => {
  console.log("came inside into removeval")
  let sqlDel;
  if(req.body.type == "List")
  {
    sqlDel = `DELETE from ${req.body.tableListName} WHERE listId = ${req.body.listId} AND listName = '${req.body.listName}'`;
  }
  else
  {
    sqlDel = `DELETE from ${req.body.tableListName} WHERE cardId = ${req.body.listId} AND cardName = '${req.body.listName}'`;
  }
  db.query(sqlDel, (err, rows) => {
    if (err) {
      console.log('Query execution failed:', err);
    }
  });
});


app.post('/modifyCardContent', (req, res) =>{

  const updSqlQuery = `UPDATE ${req.body.tableCardName} SET ${req.body.type} = '${req.body.cardContent}' WHERE cardId = ${req.body.cardId} AND cardName = '${req.body.cardName}'`;

  db.query(updSqlQuery, (err, rows) =>{
    if (err) {
      console.log('Query execution failed:', err);
    }
  }); 

})



app.listen(8087, () =>{
    console.log("Listening............");
})