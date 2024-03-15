import React from 'react';

const OrderList = ({ orders }) => {
    return (
        <div>
            {orders.map(order => (
                <div key={order._id}>
                    <p>{order.orderNumber}</p>
                    <p>{order.items.join(', ')}</p>
                    <button onClick={() => markOrderCompleted(order._id)}>Mark Completed</button>
                    <button onClick={() => cancelOrder(order._id)}>Cancel</button>
                </div>
            ))}
        </div>
    );
};

export default OrderList;
