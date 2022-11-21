<template>
    <div class="inputWrapper">
        <label class="labelElement" :class="{isRequired : isRequired}">
            <span>{{label}}</span>
        </label>
        <input class="inputElement" :placeholder="placeholderName"  :key="storeKey" @change=" (e)=>{store.state.changeField(storeKey, e.target.value)}"/>
        <div class="inputError">{{error}}</div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import { useStore } from 'vuex'
const store = useStore()
defineProps(['error', 'label', 'isRequired', 'defaultValue', 'placeholderName', 'storeKey'])
defineEmits(['onInput'])
</script>

<style>
.inputWrapper{
    width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
}

.labelElement{
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: left;
  margin-bottom: 5px;
}
.isRequired span{
    position: relative;
}

.isRequired span::after {
    content: '*';
    color: red;
    position: absolute;
    right: -8px;
}

.inputElement{
    width: 100%;
  height: 40px;
  border: 1px solid #bfbfbf;
  color: #000000;
  padding-left: 10px;
  
}

.inputElement ::placeholder{
    color: #9CA4AD; 
}

.inputElement:active, .inputElement:focus{
    outline: none;
}

.inputError{
    text-align: right;
  font-size: 12px;
  line-height: 15px;
  color: red;
}
</style>