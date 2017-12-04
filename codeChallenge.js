
// shift array
function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);

    // take 5th element and move to 0th
    for (let i=0; i<k; i++) {
        let elementToShift = a[0];
        a.shift(); // [ 2, 3, 4, 5 ]
        a.push(elementToShift);
    }
    
    // Want 5 1 2 3 4     
    console.log(a.join(' '));
}



/*
Interview Questions

Write a program that emulates a reverse Polish notation calculator. The details they give are pretty sparse, but fortunately, 
I already knew what this was. You can Google how an RPC calculator works. Their spec doesn't say what to do with invalid input, 
like not ending the input with an operator. Their tests don't have that, though, so it's not an issue. 
My implementation returned int.MinValue for error.   … 
Show More
Write a program that first takes an integer N giving both the X and Y size, and then N number of lines. 
Each line will contain N space-delimited characters, 0, 1, or 2. These characters represent altitude on the map. Zero means water.


First, find the bodies of water. A body of water is a group of '0's connected to each other either directly or diagonally.
For each body of water, count the number of cells that it occupies. Print to STDOUT the sizes of each body sorted from smallest to largest.

Example Input:
5
1 2 1 1 0
0 1 1 0 1
0 0 1 1 1
1 1 0 1 1
0 1 1 1 0

Example Output:
1
1
2
4

Google "flood fill". This is just a variation on that. Again, knowing how this works won't really help you. It's just a speed typing exercise. 

---------------------------------
Screening test included a RPN calculator example with an  incomplete explanation. Consider reviewing full RPN spec in advance.

---------------------------------
Interview Questions
Input a matrix representing a body of water, print, in ascending order, the smallest-to-largest bodies of water. 
A body of water is connected if the cells are contiguous horizontally, vertically, or diagonally.  
*/