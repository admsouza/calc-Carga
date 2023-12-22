import React, { useState } from "react";
import TextField from "@mui/material/TextField";


import "./Carga.css";


const formatCurrency = (value) => {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};

const Carga = () => {
  const [recebido, setRecebido] = useState(0);
  const [resultbase, setResultBase] = useState(0);
  const BaseRecebido = () => {
    const ResultB = recebido * 0.2;
    setResultBase(ResultB);


    
  };

  const [outroVinculo, setOutroVinculo] = useState(0);
  const [resultvinculo, setResultVinculo] = useState(0);
  const BaseOutrosVin = () => {
    const resultOutros = outroVinculo * 0.2;
    setResultVinculo(resultOutros);
  };

  const [inssatual, setInssAtual] = useState(0);
  const CalcInssAt = () => {
    const inssat = resultbase * 0.11;
    if (resultbase > 7507.49) {
      setInssAtual(825.82);
    } else {
      setInssAtual(inssat);
    }
  };

  const [inssoutros, setOutros] = useState(0);

  const CalInssOutros = () => {
    const inssout = resultvinculo * 0.11;
    if (resultvinculo > 7507.49) {
      setOutros(825.82);
    } else {
      setOutros(inssout);
    }
  };

  const [insstotal, setInssTotal] = useState(0);
  const CalcInssFinal = () => {
    const inssfinal = inssatual + inssoutros;
    if (inssfinal > 825.82) {
      setInssTotal(inssfinal - 825.82);
    } else {
      setInssTotal(inssfinal);
    }
  };

  const [dependentes, setDependentes] = useState(0);

  const [pensao, setPensao] = useState(0);
  const [pcomplementar, setPComplementar] = useState(0);

  const CalcInss = () => {
    CalcInssAt();
    CalInssOutros();
  };

  return (
    <div className="main">
  

      <TextField
        type="number"
        label="Valor Recebido"
        id="input"
        onBlur={BaseRecebido}
        value={recebido}
        onChange={(e) => setRecebido(+e.target.value)}
        size="large"
        color="success"
        required
      />

      <br />

      <TextField
        label="Outros Vinculos"
        type="number"
        id="input"
        onBlur={BaseOutrosVin}
        value={outroVinculo}
        onChange={(e) => setOutroVinculo(+e.target.value)}
        color="success"
      />

      <br />

      <TextField
        label="Dependentes "
        type="number"
        id="input"
        onFocus={CalcInss}
        value={dependentes}
        onChange={(e) => setDependentes(+e.target.value)}
        color="success"
      />
      <br />

      <TextField
        label="Pensão "
        type="number"
        id="input"
        value={pensao}
        onChange={(e) => setPensao(+e.target.value)}
        color="success"
      />
      <br />

      <TextField
        label="Prev. Complementar "
        type="number"
        id="input"
        onFocus={CalcInssFinal}
        value={pcomplementar}
        onChange={(e) => setPComplementar(+e.target.value.formatCurrency)}
        color="success"
      />
      <br />
<div>
      <p> Base Valor Recebido 20% = { formatCurrency (resultbase)}</p>
      <p> Base Outros Vinculos 20% = { formatCurrency (resultvinculo)}</p>
      <p> INSS Atual = {formatCurrency(inssatual) }</p>
      <p> INSS Out. Vinculos = { formatCurrency (inssoutros)}</p>
      <p> INSS Total = {formatCurrency (insstotal)}</p>


</div>
      
    </div>
  );
};

export default Carga;
