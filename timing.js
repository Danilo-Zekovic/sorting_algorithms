load("testBed.js");

var numElements = 100;
var nums = new CArray(numElements);
nums.setData();
var start = new Date().getTime();
nums.bubbleSort();
var stop = new Date().getTime();
var elapsed = stop - start;
print("Elapsed time for the bubble sort on " +
		 numElements + " elements is: " + elapsed + " milliseconds.");
nums.setData();
start = new Date().getTime();
nums.selectionSort();
stop = new Date().getTime();
elapsed = stop - start;
print("Elapsed time for the selection sort on " +
		 numElements + " elements is: " + elapsed + " milliseconds.");
nums.setData();
start = new Date().getTime();
nums.insertionSort();
stop = new Date().getTime();
elapsed = stop - start;
print("Elapsed time for the insertion sort on " +
		 numElements + " elements is: " + elapsed + " milliseconds.");

ar nums = new CArray(10000);
nums.setData();
var start = new Date().getTime();
nums.shellsort();
var stop = new Date().getTime();
var elapsed = stop - start;
print("Shellsort with hard-coded gap sequence: " + elapsed + " ms.");
nums.clear();
nums.setData();
start = new Date().getTime();
nums.shellsort1();
stop = new Date().getTime();
print("Shellsort with dynamic gap sequence: " + elapsed + " ms.");
