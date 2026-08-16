Business Rules

1. Each product may appear only once within the same order.

2. A product's available stock must be greater than or equal to zero.

3. An order must contain at least one order item.

4. The ordered quantity must be greater than zero.

5. The ordered quantity must not exceed the product's available stock.

6. Every order must belong to an existing client.

7. Every order item must belong to an existing order.

8. Every order item must reference an existing product.

9. The product price must be greater than zero.

10. The unit price at purchase must be greater than zero.

11. The unit price at purchase must remain unchanged even if the product's current price changes later.

12. The order total must equal the sum of:
    ordered_quantity × unit_price_at_purchase
    for all items in the order.

13. Order creation must be atomic. If any order item is invalid or has insufficient stock, the entire order must be rejected, and no database changes should be retained.


