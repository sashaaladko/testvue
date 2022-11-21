<template>
<div class="contractFormWrapper">
  <div class="contractFormTitle">Заполнение договора</div>
  <div class="contractFormStepLine">Шаг 3 из 3</div>
  <div class="contractFormHeader">
    <img class="arrow"/>
    <div class="contractFormHeaderName">О торговом объекте</div>
  </div>
  <div class="stepWrapper" >
    <ShopsComponent/>
    <InputField label="Наименование торгового объекта" placeholderName="Магазин N1" 
    :storeKey="Object.keys(store.state)[0]" :isRequired="true"/>
    <InputField label="Адрес торгового объекта" placeholderName="г. Минск, ул. Минская, д.1, к.1" 
    :storeKey="Object.keys(store.state)[1]" :isRequired="true"/>
    <InputField label="Кол-во касс по указанному адресу" placeholderName="1" 
    :storeKey="Object.keys(store.state)[2]" :isRequired="true"/>
    <div class="cashboxesCount">Количество оставшихся/нераспределенных касс:
      <span>{freeUnits - reservedUnits} шт.</span>
    </div>
    <HoursComponent/>
    <SelectField/>
    <InputField label="GLN торгового объекта (13-ти разрядный цифровой код, присвоенный в системе ГС1 Бел)" 
    placeholderName="1234567845612" :storeKey="Object.keys(store.state)[3]" :isRequired="false"/>
    <button class="addShop">
      <img class="addShopIcon"/>
      <div class="addShopText">Добавить еще один торговый объект </div>
    </button>
    <div class="buttonWrapper">
      <button class="buttonMain" @click="getValFromStore">Далее</button>
    </div>
  </div>
</div>

   
</template>

<script setup>
import InputField from './InputField.vue'
import HoursComponent from './HoursComponent.vue'
import SelectField from './SelectField.vue'
import ShopsComponent from './ShopsComponent.vue'
import { useStore } from 'vuex'
const store = useStore()
console.log(Object.keys(store.state)[0])

function getValFromStore(){
  console.log(store.state)
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contractFormWrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  padding: 164px 10px 10px 10px;
}
.contractFormTitle{
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
  color: #293f56;
  margin-bottom: 30px;
}

.contractFormStepLine{
  height: 34px;
  width: 100%;
  max-width: 420px;
  background: linear-gradient(251.11deg, #3146a4 .27%, #43c0f5);
  box-shadow: 0 4px 5px rgba(0, 0, 0, .25);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #eef0fa;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  margin-bottom: 30px;
}
.contractFormHeader{
  display: flex;
  align-items: center;
}
.arrow{
  width: 20px;
  height: 20px;
}
.arrow:hover{
  cursor: pointer;
}
.contractFormHeaderName{
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  margin-left: 20px;

}
.contractFormHeaderName::after{
  content: '';
    display: block;
    height: 2px;
    width: 150px;
    background: #d9d9d9;
    margin-top: 10px;
}
.stepWrapper{
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 420px;
  margin-top: 20px;
}
.cashboxesCount span{
    color: #54b454;
    font-weight: 800;
}

.addShop{
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
  cursor: pointer;
  background: none;
  border: none;
}
.addShop:focus, .addShop:active{
  outline: none;
}

.addShopIcon{
  width: 100%;
}

.addShopText{
  text-align: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #ff9446;
}
.buttonWrapper{
  width: 300px;
  margin: 30px auto 0;
  text-decoration: none;
}
.buttonMain{
  background: rgb(255, 148, 70);
  cursor: pointer;
  transition: all 0.3s ease 0s;
  border: none;
  height: 50px;
  width: 100%;
  border-radius: 3px;
  font-weight: 600;
  font-size: 18px;
  color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
}


</style>
