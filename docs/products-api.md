# Products API

## Product Model

| Property | API type | Description |
|---|---|---|
| `id`                | number   | Generated automatically by PostgreSQL |
| `name`              | string   | Product name |
| `price`             | number   | Positive price with at most two decimal places |
| `availableStock`    | number   | Current available quantity |
 

## Endpoints

| Method | Path           | Purpose                    | Success  | Errors |
|---|---|---|---|---|
| GET    | `/products`    | List all products          | `200`    | —            |
| POST   | `/products`    | Create a product           | `201`    | `400`        |
| GET    | `/products/:id`| Retrieve one product       | `200`    | `400`, `404` |
| PATCH  | `/products/:id`| Partially update a product | `200`    | `400`, `404` |
| DELETE | `/products/:id`| Delete a product           | `204`    | `400`, `404` |

400 means invalid data or an invalid ID such as abc
404 means a valid numeric ID whose product does not exist


## Create Product Validation

id:
- Generated automatically
- Not included in CreateProductDto
name:
- Required
- Non-empty string

price:
- Required
- API type: string
- Must be positive
- Maximum two decimal places

availableStock:
- Required
- Integer
- Minimum 1 during product creation
- Appears as available_stock only inside PostgreSQL




## Update Product Validation

Every field is optional, but each provided field must satisfy its original validation rules. One or multiple fields may be updated in the same request.


## Database Rules

PostgreSQL independently enforces these constraints:

- `price > 0`
- `available_stock >= 0`

