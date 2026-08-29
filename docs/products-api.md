# Products API

## Product Model

## Endpoints

| Method | Path           | Purpose                    | Success  | Errors 
| GET    | `/products`    | List all products          | `200`    | — |
| POST   | `/products`    | Create a product           | `201`    | `400` |
| GET    | `/products/:id`| Retrieve one product       | `200`    | `400`, `404` |
| PATCH  | `/products/:id`| Partially update a product | `200`    | `400`, `404` |
| DELETE | `/products/:id`| Delete a product           | `204`    | `400`, `404` |

400 means invalid data or an invalid ID such as abc
404 means a valid numeric ID whose product does not exist


## Create Product Validation

id type number, is Not emty, and is a string
price type string, is positive and is a number with max two digits after coma
availableStock type number, while in postgres table naming is:"available_stock",
 it is an integer and accept a minimum number 1

postgres use snake_case naming, while ts use camelCase

all fields are required in Adding a new product (Post/ product)




## Update Product Validation

fields are optional
when we want to update an existing products, we can pass validation on any field 


## Database Rules
check those constraints 
"price" > 0 
"available_stock" >= 0 

