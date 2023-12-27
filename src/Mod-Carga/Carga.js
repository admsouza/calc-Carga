import React, { useState } from "react";
import TextField from "@mui/material/TextField";

import "./Carga.css";

const formatCurrency = (value) => {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
};

const Carga = () => {
  const [recebido, setRecebido] = useState("");
  const [resultbase, setResultBase] = useState("");

  const BaseRecebido = () => {
    const ResultB = recebido * 0.2;
    setResultBase(ResultB);
  };

  const [outroVinculo, setOutroVinculo] = useState("");
  const [resultvinculo, setResultVinculo] = useState("");
  const BaseOutrosVin = () => {
    const resultOutros = outroVinculo * 0.2;
    setResultVinculo(resultOutros);
  };

  const [inssatual, setInssAtual] = useState("");
  const CalcInssAt = () => {
    const inssat = resultbase * 0.11;
    if (resultbase > 7507.49) {
      setInssAtual(825.82);
    } else {
      setInssAtual(inssat);
    }
  };

  const [inssoutros, setOutros] = useState("");
  const CalInssOutros = () => {
    const inssout = resultvinculo * 0.11;
    if (resultvinculo > 7507.49) {
      setOutros(825.82);
    } else {
      setOutros(inssout);
    }
  };

  const [insstotal, setInssTotal] = useState("");
  const CalcInssFinal = () => {
    const inssfinal = inssatual + inssoutros;
    if (inssfinal > 825.82) {
      setInssTotal(inssfinal - 825.82);
    } else {
      setInssTotal(inssfinal);
    }
  };

  const [dependentes, setDependentes] = useState("");
  const [resultdependentes, setResultDependentes] = useState("");
  const CalcDependentes = () => {
    const resultdep = dependentes * 189.59;
    setResultDependentes(resultdep);
  };

  const [pensao, setPensao] = useState("");
  const [resultpesnsao, SetResultPesnsao] = useState("");
  const FormatPensao = () => {
    const formatvalor = pensao * 1;
    SetResultPesnsao(formatvalor);
  };

  const [pcomplementar, setPComplementar] = useState("");

  const CalcInss = () => {
    CalcInssAt();
    CalInssOutros();
    FormatPensao();
  };

  const Format = () => {
    CalcInssFinal(FormatPensao());
  };

  return (
    <div className="titulo">
      <h1>Calculadora - Transporte de Carga </h1>
  
    

    <div className="main">
  
      <div className="box-calculadora">
        <TextField
          type="number"
          label="Valor Recebido"
          id="input"
          onBlur={BaseRecebido}
          value={formatCurrency(recebido)}
          onChange={(e) => setRecebido(e.target.value)}
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
          value={formatCurrency(outroVinculo)}
          onChange={(e) => setOutroVinculo(e.target.value)}
          color="success"
        />

        <br />

        <TextField
          label="Dependentes"
          type="number"
          id="input"
          onBlur={CalcDependentes}
          value={formatCurrency(dependentes)}
          onChange={(e) => setDependentes(e.target.value)}
          color="success"
        />
        <br />

        <TextField
          label="Pensão "
          type="number"
          id="input"
          onFocus={CalcInss}
          value={formatCurrency(pensao)}
          onChange={(e) => setPensao(e.target.value)}
          color="success"
        />
        <br />

        <TextField
          label="Prev. Complementar "
          type="number"
          id="input"
          onFocus={Format}
          value={formatCurrency(pcomplementar)}
          onChange={(e) => setPComplementar(e.target.value)}
          color="success"
        />
        <br />
        <div className="box-mcalculo">
          <p className="box-memoria"> Memória de Cálculo</p>
          <p>
            Base Valor Recebido 20% ={" "}
            <span id="result">{formatCurrency(resultbase)}</span>
          </p>

          <p>
            {" "}
            Base Outros Vinculos 20% ={" "}
            <span id="result">{formatCurrency(resultvinculo)}</span>
          </p>

          <p>
            {" "}
            INSS Atual = <span id="result">{formatCurrency(inssatual)} </span>
          </p>
          <p>
            {" "}
            INSS Out. Vinculos ={" "}
            <span id="result">{formatCurrency(inssoutros)}</span>
          </p>
          <p>
            {" "}
            INSS Total = <span id="result">{formatCurrency(insstotal)}</span>
          </p>

          <p>
            {" "}
            Dependentes ={" "}
            <span id="result">{formatCurrency(resultdependentes)}</span>
          </p>
          <p>
            {" "}
            Pensão = <span id="result">{formatCurrency(resultpesnsao)}</span>
          </p>
         
        </div>
      </div>
      
    </div>
    </div>
  );
};

export default Carga;
