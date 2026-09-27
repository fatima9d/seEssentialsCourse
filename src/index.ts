import { FinanceCalculator, ItemValidator, MaxPriceValidator, OrderManagement, PremiumOrderManagment, PriceValidator, Validator } from "./app";
import logger from "./utils/logger";
const orders = [
  { id: 1, item: "Sponge", price: 15 },
  { id: 2, item: "Chocolate", price: 20 },
  { id: 3, item: "Fruit", price: 18 },
  { id: 4, item: "Red Velvet", price: 25 },
  { id: 5, item: "Coffee", price: 8 },
];
const rules=[
   new PriceValidator(),
   new MaxPriceValidator(),
   new ItemValidator()

];
const orderManager = new OrderManagement(new Validator(),new FinanceCalculator());

for (const order of orders) {
    orderManager.addOrder(order.item, order.price);
}
// Adding a new order directly
const newItem = "Marble";
const newPrice = 22;

orderManager.addOrder(newItem,newPrice);
logger.info("orders after adding a new order:"+ orderManager.getOrders());
logger.info("total revenue:"+ orderManager.getTotalRevenue());
logger.info("average buy power:"+ orderManager.getBuyPower());

// Fetching an order directly
const fetchId = 2;
const fetchedOrder = orders.find(order => order.id === fetchId);
logger.info("Order with ID 2:"+ fetchedOrder);

// Attempt to fetch a non-existent order
const nonExistentId = 10;
const nonExistentOrder = orders.find(order => order.id === nonExistentId);
logger.info("Order with ID 10 (non-existent):"+ nonExistentOrder);