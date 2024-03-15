import React from 'react';

const ReservationList = ({ reservations }) => {
    return (
        <div>
            {reservations.map(reservation => (
                <div key={reservation._id}>
                    <p>{reservation.name}</p>
                    <p>{reservation.dateTime}</p>
                    <button onClick={() => cancelReservation(reservation._id)}>Cancel</button>
                </div>
            ))}
        </div>
    );
};

export default ReservationList;
