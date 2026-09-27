import { FinanceCalculator, OrderManagement, Validator } from "../src/app";
describe("OrderManagement", () => {
   it("should add an order", () => {
      // Arrange
      const validator = new Validator();
      const calc = new FinanceCalculator();
      const orderManager = new OrderManagement(validator, calc);
      const item = "Sponge";
      const price = 15;
      // Act
      orderManager.addOrder(item, price);
      expect(orderManager.getOrders()).toEqual([{ id: 1, item, price }]);
   });
});


describe("FinanceCalculator", () => {
    it("should get the total revenue", () => {
      // Arrange
      const calc = new FinanceCalculator();
      const orders = [
         { id: 1, item: "Sponge", price: 15 },
         { id: 2, item: "Chocolate", price: 10 },
         { id: 3, item: "Fruit", price: 10 }];
      // Act
      const revenue = calc.getRevenue(orders);
      // Assert
      expect(revenue).toEqual(35);
   });  
     it("should get the average buy", () => {
      // Arrange
      const calc = new FinanceCalculator();
      const orders = [
         { id: 1, item: "Sponge", price: 15 },
         { id: 2, item: "Chocolate", price: 10 },
         { id: 3, item: "Fruit", price: 10 }];
      // Act
      const buyPower = calc.getAverageBuyPower(orders);
      // Assert
      expect(buyPower).toEqual(11.67);
   });   
   });

