// import React, { useState, useEffect } from 'react';
// import OrderList from './OrderList';
// import ReservationList from './ReservationList';
// import axios from 'axios';

// const DashboardPage = () => {
//     const [orders, setOrders] = useState([]);
//     const [reservations, setReservations] = useState([]);

//     useEffect(() => {
//         fetchOrders();
//         fetchReservations();
//     }, []);

//     const fetchOrders = async () => {
//         try {
//             const response = await axios.get('/api/orders');
//             setOrders(response.data);
//         } catch (error) {
//             console.error('Error fetching orders:', error);
//         }
//     };

//     const fetchReservations = async () => {
//         try {
//             const response = await axios.get('/api/reservations');
//             setReservations(response.data);
//         } catch (error) {
//             console.error('Error fetching reservations:', error);
//         }
//     };

//     return (
//         <div>
//             <h1>Staff Dashboard</h1>
//             <h2>Orders</h2>
//             <OrderList orders={orders} />
//             <h2>Reservations</h2>
//             <ReservationList reservations={reservations} />
//         </div>
//     );
// };

// export default DashboardPage;










import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import MediaCard from './Card';
import { ButtonBase, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography, Avatar, Divider, Button } from '@mui/material'
// import axios from 'axios';
 
const ReservationForm = () => {

    const [reservationData, setreservationData] = useState([]);
    const [displayReservation, setdisplayReservation] = useState([]);



    const ReservationList = async () => {
    await fetch("http://localhost:4000/api/v1/reservation/staff", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((data) => data.json())
    .then((data) => {
        console.log(data)
        setreservationData(data)
        setdisplayReservation(data)
    })
    .catch((err) => console.log(err))
}
useEffect(()=>{
    ReservationList()
},[])

    return (
        
            <>
            <h1 style={{textAlign:"center"}}>RESERVATIONS</h1>
            {
                reservationData.length ? (
                    <Grid container spacing={{ xs: 2, md: 3 }} justifyContent='space-around' sx = {{margin : "20px"}}>
                        {
                            reservationData?.map((reservation, i) => (
                                <MediaCard {...reservation} key = {i} />
                            ))
                        }
                    </Grid>
                ) : (
                    <Typography> No Results Found </Typography>
                )
            }
        </>
    );
};
 
export default ReservationForm;