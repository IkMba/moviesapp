function useNameFormater(arr, val) {
  const formatted = arr.map(
    (p, i, arr) => p[val] + `${i < arr.length - 1 ? ", " : ""}`
  );
  return formatted;
}

export default useNameFormater;
