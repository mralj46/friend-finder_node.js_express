# friend-finder_node.js_express

The application is suppose to take in results from users' surveys then compare their results against all other users who have completed it. The application will then display the name and picture of the user with the best match overall.
+
+* The survey has 10 questions, answers to the survey questions are on a scale of 1-5 based on how much the user agrees or disagrees.

The application uses Express to handle routing 
+* The server.js file uses the npm packages: express, body-parser, path.

Compatibility will be determined based on the following.
+	* Each user's results is converted into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
+	* Then will compare the difference between the user's scores against other users' scores, question by question. Then will add up the differences to calculate the `totalDifference`.
