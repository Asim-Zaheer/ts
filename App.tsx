import "./App.css";
import Table from "./component/Table";
import Card from "./component/Card"
import Button from "./component/Button";
import { useState } from "react";
import Select from "./component/Select";

function App() {
  
  let data2 = [
    {
      postId: 1,
      id: 1,
      name: "Asim",
      email: "iasimzaheer@gmail.com",
     class:"BlockChain"
    },
    {
      postId: 1,
      id: 2,
      name: "Ali",
      email: "Ali@gmail.com",
     class:"Mern"
    }

  ];

  const userData = {
    id: 1,
    userName: 'asim',
    age: 22,
    institute: 'ubit University',
    isActive: true,
    category: 'Student',
  }

  // const [button , setButton]=useState()
 
const update =()=>{
  
 alert("clicked")
}

<>
  return (
<div className="Select">
  <Select
  getValue={(e)=>(
    console.log("test done")
    )}
  opt={[
    value:"male",
    disName:"asim"
  ]}
  />
</div>

<div className="button" >
  <Button
  label="click here to check label"
  onClickk={update}
  />
</div>
y

    <div className="card">
      <Card

      label="Cards"
      id={userData.id}
      userName={userData.userName}
      age={userData.age}
      institute={userData.institute}
      isActive={userData.isActive}
      category={userData.category}

      />
    </div>



    <div className="App">

  
    <Table
      
      label="testing"
      datasource={data2}
      cols={
          [
            {
              heading:"postId" , key:"postId"
            },
            {
              heading:"ID" , key:"id"
            },
            {
              heading:"username" , key:"name"
            },
            {
              heading:"Email" , key:"email"
            },
            {
              heading:"Class" , key:"class"
            },
            
          ]
        }
        />
    
    </div>
        </>

  );
}

export default App;