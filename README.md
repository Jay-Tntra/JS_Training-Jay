# Day 1
📘 Student Grade Analyzer

This program analyzes the performance of a class of students based on their exam scores.
It uses simple arrow functions, loops, and if-else conditions — without using any advanced JavaScript methods.

🔹 What the Program Does

Stores student data (name and score) in an array.

Calculates the average score of the entire class.

Finds the highest and lowest scoring students.

Counts how many students fall into each grade category:

A: 90–100

B: 80–89

C: 70–79

D: 60–69

F: Below 60

Lists all students who need to retake the exam (score < 60).

Finally, all results are displayed in the console.

🔹 Functions Used

getAverage() → Calculates the class average.

getHighest() → Finds the student with the highest score.

getLowest() → Finds the student with the lowest score.

getGradeDistribution() → Counts how many students got A, B, C, D, or F.

getRetakeList() → Lists students who scored below 60.

gradeAnalyzer() → Calls all the above functions and prints the results.

🔹 Example Output
```bash
Average Score: 78.2
Highest Score: Parth (95)
Lowest Score: Het (49)
Grade Distribution: { A: 1, B: 3, C: 2, D: 1, F: 3 }
Students needing retake: [ 'Varun', 'Het' ]
```

# Day 2

🛒 Shopping Cart Application

This project is a simple shopping cart web application built using HTML, CSS, and JavaScript.
It fetches real product data from an online API, displays it in a clean card layout, and allows users to add products to a cart, view totals, and apply discounts automatically.

🔹 What the Program Does

Fetches a list of products from the Fake Store API (https://fakestoreapi.com/).

Displays each product in a box with its:

Image

Title

Price

“Add to Cart” button

Allows users to add products to the cart dynamically.

Updates quantity automatically if the same product is added multiple times.

Calculates:

Subtotal → Total of (price × quantity)

Quantity Discount (10%) → Applied if total quantity > 10

Price Discount (5%) → Applied if subtotal > $500 (after quantity discount)

Final Total → Subtotal – both discounts

Displays a full breakdown of totals and discounts.

🔹 Functions Used

fetchProducts() → Fetches product data from the Fake Store API.

renderProducts() → Displays all products in styled boxes with an Add button.

moveToCart(id) → Adds the selected product to the cart or increases its quantity.

renderCart() → Displays all cart items with image, price, and quantity.

calculateDiscount() → Applies both discounts and calculates the final total.

printResult() → Displays subtotal, discounts, and final total neatly on the screen.

🔹 Example Output

```bash
Subtotal: $950
Quantity Discount (10%): -$95
Price Discount (5%): -$42.75
Final Total: $812.25
```