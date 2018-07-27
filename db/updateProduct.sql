UPDATE Products
SET name=$1, price=$2, img=$3
WHERE id=$4;

SELECT * FROM Products
ORDER BY id