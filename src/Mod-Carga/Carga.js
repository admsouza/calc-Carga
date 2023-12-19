import React, { useState,  } from "react";


const  Carga = () => {

  const [recebido, setRecebido] = useState(0);
  const [resultbase, setResultBase]  = useState(0);
  const [inssatual, setInssAtual] = useState(0);
  const [outroVinculo, setOutroVinculo]  = useState(0);
  const [inssoutros, setOutros] = useState(0);
  const [resultvinculo, setResultVinculo]  = useState(0);
  const [dependentes, setDependentes]  = useState(0);
  const [pensao, setPensao]  = useState(0);
  const [pcomplementar, setPComplementar]  = useState(0);
 


const BaseRecebido = () => {
  const ResultB = recebido  * 0.20;
  setResultBase (ResultB)
}

const BaseOutrosVin = () => {
  const resultOutros = outroVinculo * 0.20;
  setResultVinculo (resultOutros)
}


const CalcInssAt = () => {
  const inssat = resultbase * 0.11
  if(resultbase > 7507.49){
  setInssAtual(825.82)
}else {
    setInssAtual(inssat)
}

}

const CalInssOutros = () => {
  const inssout = outroVinculo * 0.11;
  if (resultvinculo > 7507.49) {
    setOutros(825.82);
  } else {
    setOutros(inssout);
  }

}
const CalcInss = () => {
  BaseRecebido()
  BaseOutrosVin()
  CalcInssAt()
  CalInssOutros()


}
return (

  <div>
  
    <label for="input1">Valor Recebido:</label>
    <input type="number" id="input1" onBlur = { BaseRecebido } value = { recebido } name="input1" onChange={(e) => setRecebido(+e.target.value)}/><br/>
    
    <label for="input2">Recebido em Outros Vinculos:</label>
    <input type="number" id="input2"  name="input2"  onBlur = { CalcInss }value={ outroVinculo } onChange={(e) => setOutroVinculo(+e.target.value)}/><br/>
    
    <label for="input3">Dependentes:</label>
    <input type="number" id="input3" name="input3" onBlur={  CalcInssAt } value= { dependentes } onChange={(e) => setDependentes (+e.target.value)}/><br/>
    
    <label for="input4">Pensão:</label>
    <input type="number" id="input4" name="input4" onBlur={ CalInssOutros }  value= { pensao } onChange={(e) => setPensao(+e.target.value)}/><br/>
    
    <label for="input5">Previdência Complementar:</label>
    <input type="number" id="input5" name="input5" value= {pcomplementar } onChange={(e) => setPComplementar (+e.target.value)}/><br/>
    
      <p> Base Valor Recebido 20% = {resultbase }</p>
      <p> Base Outros Vinculos 20% = { resultvinculo }</p>
      <p> INSS Atual = { inssatual }</p>
      <p> INSS Out. Vinculos = { inssoutros }</p>
  
  </div>

);

}

export  default Carga;