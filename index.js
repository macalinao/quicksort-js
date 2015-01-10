var quicksort = module.exports = function(arr, comparator) {
  if (!comparator) {
    comparator = function(a, b) {
      return a - b;
    };
  }

  if (arr.length <= 1) return arr;

  var pivot = arr[0];
  var rest = arr.slice(1);
  return quicksort(
    rest.filter(function(el) {
      return comparator(el, pivot) < 0;
    }), comparator)

  .concat([pivot])

  .concat(
    quicksort(
      rest.filter(function(el) {
        return comparator(el, pivot) >= 0;
      }), comparator
    )
  );
};
