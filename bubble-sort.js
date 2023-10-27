/*********************************************************************************************
 * WHILE LOOP IMPLEMENTATION
function bubbleSort(arr){
	let swap = true;
	while(swap){
		swap = false;
		for (let i = 0; i < arr.length; i++){
			if (arr[i] > arr[i+1]){ 
                        [arr[i], arr[i+1]]=[arr[i+1], arr[i]];
                        swap = true;
                }

		}
	}
	return arr;
}
console.log(bubbleSort([3, 5, 1, 7, 2, 4, 10, 0]));
***********************************************************************************************/

function bubbleSort(arr) {
  let swapped = false;

  // Iterate through the array
  for (let i = 0; i < arr.length; i++) {

    // If the current value is greater than its neighbor to the right
    if (arr[i] > arr[i + 1]) {
      // Swap those values
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      swapped = true;


      // Do not move this console.log
      console.log(arr.join(","));
    }
  }

  // If you get to the end of the array and no swaps have occurred, return
  if (!swapped) {
    return arr;
  }

  // Otherwise, repeat from the beginning
  return bubbleSort(arr);

}

module.exports = bubbleSort;
