import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      expression: '',
      buttons: ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '/', '.']
    }
  },
  methods: {
    addToExpression(char) {
      this.expression += char
    },
    calculate() {
      try {
        this.expression = eval(this.expression)
      } catch (error) {
        this.expression = 'Error'
      }
    },
    clear() {
      this.expression = ''
    }
  }
})