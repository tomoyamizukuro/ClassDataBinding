var app = new Vue({
  el: "#app",
  data: {
    message: '',
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
    clear: function(){
      this.message = ''
    },
    clickHandler: function () {
      alert('shift + click')
    }
    // clickHandler: function($event,message){
    //   this.message = message
    //   console.log($event)
    //   console.log($event.target.tagName)
    //   console.log($event.target.innerHTML)
    //   console.log($event.target.type)
    // },
    // clickHandler: function(){
    //   this.message = new Date().toLocaleTimeString()
    // }

  }
})