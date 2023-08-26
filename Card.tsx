// import React from "react";
type cardType={
    userName : string  
    label : string  
    id:number
// userName
age:number
     institute:string
     isActive:boolean
    
category:string
    
}


export default function Card(props:cardType){
    const{userName,label,id,institute,isActive,category} =props;
    return(

    <>
    <div  >
      <h1>{label}</h1>
        <p>id:{id}</p>
      <p>userName:{userName}</p>
      <p>institute:{institute}</p>
      <p>Active:{isActive? "Active" : "InActive"}</p>
      <p>category:{category}</p>
       
    </div>
    </>
    )
}

// import React from 'react';

// type CardProps = {
//   id: number;
//   userName: string;
//   label: string;
//   age: number;
//   institute: string;
//   isActive: boolean;
//   category: string;
// };

// const Card: React.FC<CardProps> = ({ id, userName, label, age, institute, isActive, category }) => {
//   return (
//     <div className="card">
//       <h2>{label}</h2>
//       <p>ID: {id}</p>
//       <p>Name: {userName}</p>
//       <p>Age: {age}</p>
//       <p>Institute: {institute}</p>
//       <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
//       <p>Category: {category}</p>
//     </div>
//   );
// };

// export default Card;
