<template>
  <div>
    <h1>Calculadora</h1>
    <div class="calculatorMain">        
        <DisplayComp :value="displayValue"/>
        <ButtonComp  label="AC" triple @onClick="clearMemory"/>
        <ButtonComp  label="/" operation @onClick="setOperation" />
        <ButtonComp  label="7"  @onClick="addDigit"/>
        <ButtonComp  label="8"  @onClick="addDigit"/>
        <ButtonComp  label="9"  @onClick="addDigit"/>
        <ButtonComp  label="*" operation @onClick="setOperation"  />
        <ButtonComp  label="4"  @onClick="addDigit"/>
        <ButtonComp  label="5"  @onClick="addDigit"/>
        <ButtonComp  label="6"  @onClick="addDigit"/>
        <ButtonComp  label="-" operation @onClick="setOperation"  />
        <ButtonComp  label="1"  @onClick="addDigit"/>
        <ButtonComp  label="2"  @onClick="addDigit"/>
        <ButtonComp  label="3"  @onClick="addDigit"/>
        <ButtonComp  label="+" operation @onClick="setOperation"  />
        <ButtonComp  label="0" double  @onClick="addDigit"/>
        <ButtonComp  label="."  @onClick="addDigit"/>
        <ButtonComp  label="=" operation @onClick="setOperation" />
    </div>
  </div>     
</template>

<script>
import ButtonComp from "../components/ButtonComp.vue"
import DisplayComp from "../components/DisplayComp.vue"


export default {
  name: 'CalculatorMain',
  props: {
    msg: String
  },
  data: function(){
      return {
        displayValue: "0",
        clearDisplay: false, 
        operation: null,
        values: [0, 0],   
        current: 0 
      }
    },
  components: { ButtonComp, DisplayComp },
  methods:{  
    clearMemory(){
      Object.assign(this.$data, this.$options.data())
    },
    setOperation(operation){
      console.log(operation)
      if(this.current === 0){
        this.operation = operation 
        this.current = 1
        this.clearDisplay = true
      }else{
        const equals = operation === "="
        const currentOperation = this.operation

        try{
          this.values[0] = eval(
            `${this.values[0]} ${currentOperation} ${this.values[1]}`
          )
          if (isNaN(this.values[0]) || !isFinite(this.values[0])) {
              this.clearMemory()
              return
            }
        } catch (e){
          this.$emit('onError', e)
        }
        this.values[1] = 0

        this.displayValue = this.values[0]
        this.operation = equals ? null : operation
        this.current = equals ? 0 : 1
        this.clearDisplay = !equals
      }
    },
    addDigit(n){
      if( n === "." && this.displayValue.includes(".")){
        return
      }
      const clearDisplay = this.displayValue === "0" || this.clearDisplay
      const currentValue = clearDisplay ? "" : this.displayValue
      const displayValue = currentValue + n

      this.displayValue = displayValue
      this.clearDisplay = false
      // Alternativa 1
      this.values[this.current] = displayValue

      // Alternativa 2
      /* if( n!== ".") {
            const i = this.current
            const newValue = parseFloat(displayValue)
            this.values[i] = newValue
      }                  
      */      
    }
  }
}
</script>

<style>
.calculatorMain{
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 1fr 48px 48px 48px 48px;
}
</style>