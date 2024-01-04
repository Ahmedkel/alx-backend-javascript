// def pascal_tri(numRows):
//   # initialize an empty list to store the rows
//   triangle = []
//   # loop through each row
//   for i in range(numRows):
//       # create a new row with 1 as the first and last element
//       row = [1]
//       # loop through the previous row and add adjacent elements
//       for j in range(1, i):
//           row.append(triangle[i-1][j-1] + triangle[i-1][j])
//       # append the row to the triangle
//       triangle.append(row)
//   # return the triangle
//   return triangle

// # print the triangle for 5 rows
// print(pascal_tri(5))