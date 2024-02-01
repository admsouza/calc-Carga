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
      setInssTotal(825.82);
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
  const [prevcompl, setPrevCompl] = useState("");
  const [resultprevcompl, SetResultPrevcompl] = useState("");
  const FormatPrev = () => {
    const formaprev = prevcompl * 1;
    SetResultPrevcompl(formaprev);
  };

  const [resultirrfsimplicado, setResultIrrfSimplicado] = useState("");
  const CalIrrfSimpl = () => {
    const resultirrsimpl = resultbase + resultvinculo - 528;
    if (resultirrsimpl > 4664.68) {
      setResultIrrfSimplicado(resultirrsimpl * 0.275 - 884.96);
    } else if (resultirrsimpl >= 3751.06) {
      setResultIrrfSimplicado(resultirrsimpl * 0.225 - 651.73);
    } else if (resultirrsimpl >= 2826.66) {
      setResultIrrfSimplicado(resultirrsimpl * 0.15 - 370.4);
    } else if (resultirrsimpl >= 2112.01) {
      setResultIrrfSimplicado(resultirrsimpl * 0.075 - 158.4);
    } else {
      setResultIrrfSimplicado(0.0);
    }
  };
  
  const [deducoeslegais, setDeducoesLegais] = useState("");
  const Cacldeducoes = () => {
    const resultdeducoes =  (insstotal + prevcompl + pensao + dependentes) * 1
    setDeducoesLegais(resultdeducoes)
  }


  const [resultirrdeducoes, setResultIrrDeducoes] = useState("");
  const CalIrrfDeducoes = () => {
    const resultdeducoes = resultbase + resultvinculo - ( insstotal + resultdependentes + resultprevcompl + resultpesnsao)

    if (resultdeducoes > 4664.68) {
      setResultIrrDeducoes(resultdeducoes * 0.275 - 884.96);
    } else if (resultdeducoes >= 3751.06) {
      setResultIrrDeducoes(resultdeducoes * 0.225 - 651.73);
    } else if (resultdeducoes >= 2826.66) {
      setResultIrrDeducoes(resultdeducoes * 0.15 - 370.4);
    } else if (resultdeducoes >= 2112.01) {
      setResultIrrDeducoes(resultdeducoes * 0.075 - 158.4);
    } else {
      setResultIrrDeducoes(0.0);
    }
  };

  const [resultsenat, setResultSenat] = useState("");
  const CaclSenat = () => {
    const descontosenat = (resultbase + resultvinculo) * 0.01;
    setResultSenat(descontosenat);
  };

  const [resultsest, setResultSest] = useState("");
  const CaclSest = () => {
    const descontosest = (resultbase + resultvinculo) * 0.015;
    setResultSest(descontosest);
  };

  const [resultliquido, SetResultLiquido] = useState("");

  const CalcLiq = () => {
    const valorliquido =
      resultbase +
      resultvinculo -
      (inssoutros +
        inssatual +
        resultsest +
        resultsenat +
        resultirrfsimplicado);
    SetResultLiquido(valorliquido);
    FormatPrev();
    CalIrrfDeducoes();
  
  };

  const CalcInss = () => {
    CalcInssAt();
    CalInssOutros();
    CalIrrfSimpl();
    CaclSenat();
    CaclSest();
    FormatPensao();
    
  };

  const Format = () => {
    CalcInssFinal(FormatPensao());
    Cacldeducoes();
    
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
            onBlur={CalcInss}
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
            onBlur={CalcLiq}
            value={formatCurrency(prevcompl)}
            onChange={(e) => setPrevCompl(e.target.value)}
            color="success"
          />

          <h1 className="liquido">
            Valor Líquido {formatCurrency(resultliquido)}
          </h1>

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

            <p>
              {" "}
              IRRF Simplificado ={" "}
              <span id="result">{formatCurrency(resultirrfsimplicado)}</span>
            </p>
            <p>
              {" "}
              IRRF Deduções Legais ={" "}
              <span id="result">{formatCurrency(resultirrdeducoes)}</span>
            </p>
            <p>
              {" "}
              SENAT 1% = <span id="result">{formatCurrency(resultsenat)}</span>
            </p>
            <p>
              {" "}
              SEST 1,5% = <span id="result">{formatCurrency(resultsest)}</span>
            </p>
            <p>
              {" "}
              Prev. Complementar={" "}
              <span id="result">{formatCurrency(resultprevcompl)}</span>
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carga;
