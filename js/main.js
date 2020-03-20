var app = new Vue({
  el: "#app",
  data: {
    styleObject: {
      color: 'blue',
      fontSize: '36px'
    },
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