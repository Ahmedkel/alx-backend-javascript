export default function createInt8TypedArray(length, position, value) {
  // Step 1: Create an ArrayBuffer of the specified length
  const buffer = new ArrayBuffer(length);

  // Step 2: Create an Int8Array view on the ArrayBuffer
  const int8Array = new Int8Array(buffer);

  // Step 4: Check if the position is within the range
  if (position >= int8Array.length) {
    throw new Error('Position outside range');
  }

  // Step 3: Set the value at the specified position
  int8Array[position] = value;

  // Return the DataView on the ArrayBuffer
  return new DataView(buffer);
}
