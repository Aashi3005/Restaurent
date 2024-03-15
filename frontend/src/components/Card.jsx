import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {

  console.log(props)
//   const [message, setMessage] = React.useState("");

//   const handleCLick = async(productId) => {
//     setMessage("")
//     try {
//       const userId = props.user.ValidUserOne._id
//       // Prepare request data
//       const requestData = {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             "userId" : userId,
//             "productId" : productId
//            })
//       };

      // Make the request to add bookmark
    //   const response = await fetch('/users/addbookmark', requestData);
    //   const data = await response.json();

      // Check if bookmark was added successfully
    //   if (response.ok) {
    //       console.log('Bookmark added successfully:', data);
    //       setMessage("Added Successsfully")
    //   } else {
//           console.error('Failed to add bookmark:', data.error);
//           setMessage(data.error)
//       }
//   } catch (error) {
//       console.error('Error adding bookmark:', error.message);
//   }
//   } 

  return (
    <>
    
    <div style={{width:"250px", height:"200px", backgroundColor:"red", margin:"30px", display:'flex',justifyContent:"center",alignItems:"center"}}>
        <ul style={{listStyle:'none'}}>
            <li>Firstname: {props.firstName}</li>
            <li>Lastname:{props.lastName}</li>
            <li>Date:{props.date}</li>
            <li>Email: {props.email}</li>
            <li>Phone: {props.phone}</li>
            <li>Time: {props.time}</li>
        </ul>
    </div>
    </>
  );
}
