import { FinanceCalculator, OrderManagement, Validator } from "../src/app";
describe("OrderManagement", () => {
    let validator: Validator;
    let calc: FinanceCalculator;
    let orderManager: OrderManagement;
    beforeAll(() => {
        validator = new Validator();
        calc = new FinanceCalculator();
    });

    beforeEach(() => {
        orderManager = new OrderManagement(validator, calc);
    });
    it("should add an order", () => {

        const item = "Sponge";
        const price = 15;
        // Act
        orderManager.addOrder(item, price);
        expect(orderManager.getOrders()).toEqual([{ id: 1, item, price }]);
    });
    it("should get an order", () => {

        const item = "Sponge";
        const price = 15;
        // Act
        orderManager.addOrder(item, price);
        const order = orderManager.getOrder(1);
        expect(order).toEqual([{ id: 1, item, price }]);
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
    afterEach(() => {
        console.log('After each test');
    });
    afterAll(() => {
        console.log('After all tests');
    });

    it("should run the first test", () => {
        console.log('First test');
    });
    it("should run the second test", () => {
        console.log('Second test');
    });
});