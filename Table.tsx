// type tableProps = {
//   label: string;
//   datasourse: any[];
//   cols: any[];
// };

// export default function BATable(props: tableProps) {
//   const { label, datasourse, cols } = props;
//   return (
//     <>
//       <div>
//         <p>{label}</p>
//         <table border={8}>
//           <thead>
//             <tr>
//               {cols.map((x, i) => (
//                 <th key={i}  >{x.heading}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {datasourse.map((row, i) => (
//               <tr>
//                 {cols.map((col, ind) => (
//                   <td key={i}  >{row[col.key]}</td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// }

type tableProps={
    label:string
    datasource:any[]
    cols:any[]
}

export default function Table(props: tableProps){
    const {label,datasource,cols}=props
    return(

    <div>
     <h1>{label}</h1>
     <table border={8} >

     <thead>
        <tr>
            {cols.map((x,i)=>(
                <th key={i} >{x.heading}</th>
                ))}
        </tr>
     </thead>
         
         {datasource.map((row,i)=>(
             <tr>
                {cols.map((col,ind)=>(
                    
                    <td key={i} > {row[col.key]} </td>
                    ))}

            </tr>
         ))}

         </table>
<tbody>
     </tbody>
    </div>
    )
}