export default {
  data() {
    return {
      current: '',
      display: '0',
      logList: '',
      lastOperator: '',
      lastValue: ''
    }
  },
  methods: {
    append(value) {
      if (this.display === '0' && value !== '.') {
        this.display = ''
      }
      this.current += value
      this.display += value
    },
    clear() {
      this.current = ''
      this.display = '0'
      this.logList = ''
      this.lastOperator = ''
      this.lastValue = ''
    },
    operate(operator) {
      if (this.current !== '') {
        if (this.lastOperator !== '') {
          this.calculate();
        } else {
          this.lastValue = parseFloat(this.current);
          this.logList += this.current + ' ' + operator + ' ';
          this.current = '';
          this.display = this.logList;
          this.lastOperator = operator;
        }
      } else if (this.lastValue !== '' && this.lastOperator !== '') {
        this.lastOperator = operator;
        this.logList = this.logList.slice(0, -1) + operator + ' ';
        this.display = this.logList
      }
    },
    calculate() {
      const currentValue = parseFloat(this.current)
      let result
      switch (this.lastOperator) {
        case '+':
          result = this.lastValue + currentValue
          break
        case '-':
          result = this.lastValue - currentValue
          break
        case '*':
          result = this.lastValue * currentValue
          break
        case '/':
          result = this.lastValue / currentValue
          break
      }
      this.display = result.toString()
      this.current = result
      this.lastValue = result
      this.logList = ''
      this.lastOperator = ''
    },
    equal() {
      if (this.lastOperator !== '' && this.current !== '') {
        this.calculate()
      }
    },
    dot() {
      if (!this.current.includes('.')) {
        this.append('.')
      }
    },
    sign() {
      if (this.current !== '' && this.current !== '0') {
        this.current = (-parseFloat(this.current)).toString()
        this.display = this.current
      }
    },
    percent() {
      if (this.current !== '') {
        this.current = (parseFloat(this.current) / 100).toString()
        this.display = this.current
      }
    }
  }
}