import {
    addDoc,
    collection,
    getDocs,
    getFirestore,
    or,
    query,
    Timestamp,
    where,
} from "@react-native-firebase/firestore";
import { deleteItem } from "./items";
import { Item } from "./post";

export interface Order {
  id?: string;
  itemId: string;
  sellerId: string;
  buyerId: string;
  item: Item;
  status: "delivered" | "pending";
  orderDate: Timestamp;
  totalAmount: number;
  shippingAddress?: string;
}

export async function addOrder(item: Item, buyerId: string) {
  try {
    const db = getFirestore();

    const orderData: Omit<Order, "id"> = {
      itemId: item.id,
      sellerId: item.ownerId,
      buyerId,
      item,
      status: "delivered",
      orderDate: Timestamp.now(),
      totalAmount: item.price,
    };
    console.log(JSON.stringify(orderData, null, 2));

    const orderRef = await addDoc(collection(db, "Orders"), orderData);
    const result = await deleteItem(item.id);
    if (result.success) console.log("Order successfully created");
    return orderRef.id;
  } catch (error) {
    console.error("Error adding order in addOrder", error);
    throw error;
  }
}

export async function getOrderHistory(userId: string) {
  try {
    const db = getFirestore();

    const ordersSnapshot = await getDocs(
      query(
        collection(db, "Orders"),
        or(where("buyerId", "==", userId), where("sellerId", "==", userId))
      )
    );

    const orders: Order[] = [];
    ordersSnapshot.forEach((order) => {
      orders.push({
        id: order.id,
        ...(order.data() as Omit<Order, "id">),
      });
    });
    return orders;
  } catch (error) {
    console.error("Error getting orders in getOrderHistory", error);
    throw error;
  }
}
