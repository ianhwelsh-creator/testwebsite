export default function OrderHistory() {
  const mockOrders = [
    { id: 'ORD-123456', date: '2026-01-15', total: 1250, status: 'Delivered' },
    { id: 'ORD-123457', date: '2026-01-28', total: 890, status: 'Shipped' },
  ];

  return (
    <div className="container-luxury py-12">
      <h1 className="text-4xl font-serif mb-12">Order History</h1>
      <div className="space-y-6">
        {mockOrders.map(order => (
          <div key={order.id} className="card flex justify-between items-center">
            <div>
              <p className="font-medium">{order.id}</p>
              <p className="text-sm text-luxury-gray-dark">{order.date}</p>
            </div>
            <div className="text-right">
              <p className="font-medium">${order.total}</p>
              <p className="text-sm text-luxury-gray-dark">{order.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
