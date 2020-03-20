var app = new Vue({
  el: "#app",
  data: {
    color: 'blue',
    fontSize: 36,
    classObject: {
      large: true,
      'text-danger': true
    },
    largeClass: {
      large: true,
      'bg-gray': true
    },
    dangerClass: {
      'text-danger': true
    },
    // largeClass: 'large',
    // dangerClass: 'text-danger',
    isLarge: true,
    hasError: true
  }
})