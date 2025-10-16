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
Average Score: 78.2
Highest Score: Parth (95)
Lowest Score: Het (49)
Grade Distribution: { A: 1, B: 3, C: 2, D: 1, F: 3 }
Students needing retake: [ 'Varun', 'Het' ]