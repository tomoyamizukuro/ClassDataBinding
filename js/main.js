var app = new Vue({
  el: "#app",
  data: {
    counter: 0,
    color: 'blue',
    toggle: true,
    styleObject: {
      color: 'blue',
      fontSize: '36px'
    },
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
    isLarge: true,
    hasError: true
  },
  methods: {
    clickHandler: function(event){
      this.counter++
      console.log(event)
      console.log(event.target.tagName)
      console.log(event.target.innerHTML)
      console.log(event.target.type)
    }
  }
})