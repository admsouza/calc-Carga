import React, { useState,  } from "react";


const  Carga = () => {
  const [recebido, setRecebido] = useState(0.00);
  const [resultbase, setResultBase]  = useState(0.00);
  const [outroVinculo, setOutroVinculo]  = useState(0.00);
  const [resultVinculo, setResultVinculo]  = useState(0.00);

  const [dependentes, setDependentes]  = useState(0.00);
  const [pensao, setPensao]  = useState(0.00);
  const [pcomplementar, setPComplementar]  = useState(0.00);


const BaseRecebido = () => {
  const ResultB = (recebido + outroVinculo) * 0.20;
  setResultBase (ResultB)
}

return (

  <div>
  
    <label for="input1">Valor Recebido:</label>
    <input type="text" id="input1"  value = { recebido } name="input1" onChange={(e) => setRecebido(+e.target.value)}/><br/>
    
    <label for="input2">Recebido em Outros Vinculos:</label>
    <input type="text" id="input2" onBlur = { BaseRecebido } name="input2" onChange={(e) => setOutroVinculo(+e.target.value)}/><br/>
    
    <label for="input3">Dependentes:</label>
    <input type="text" id="input3" name="input3"/><br/>
    
    <label for="input4">Pensão:</label>
    <input type="text" id="input4" name="input4"/><br/>
    
    <label for="input5">Previdência Complementar:</label>
    <input type="text" id="input5" name="input5"/><br/>
    
      <p> Base de Calculo 20% = {resultbase }</p>
  
  </div>

);

}

export  default Carga;