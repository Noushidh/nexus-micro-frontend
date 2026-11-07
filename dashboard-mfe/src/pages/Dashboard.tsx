import { useEffect, useState } from "react";
import { getOrders } from "../api/orderApi";
import { useSelector } from "react-redux";
import { RootState } from "../types/redux";

interface Order {
  id: string;
  userId: string;
  product: string;
  amount: number;
  status: string;
}

function Dashboard() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const user = useSelector((state: RootState) => state.auth.user);
  console.log("user:", user);

  useEffect(() => {
    if (!user?.id) return;

    const fetchOrders = async () => {
      try {
        const data = await getOrders(user.id);
        setOrders(data);
      } catch (error) {
        setError("Failed to fetch orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user?.id]);

  if (loading) return <p>Loading orders...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Welcome, {user?.name || "Guest"}!</h2>
      <h2>Orders</h2>
      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.product}</td>
              <td>{order.amount}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
