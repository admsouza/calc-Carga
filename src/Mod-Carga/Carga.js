import React, { useState } from "react";

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
    <div>
      <label for="input1">Valor Recebido:</label>
      <input
        type="number"
        id="input1"
        onBlur={BaseRecebido}
        value={recebido}
        name="input1"
        onChange={(e) => setRecebido(+e.target.value)}
      />
      <br />

      <label for="input2">Recebido em Outros Vinculos:</label>
      <input
        type="number"
        id="input2"
        name="input2"
        onBlur={BaseOutrosVin}
        value={outroVinculo}
        onChange={(e) => setOutroVinculo(+e.target.value)}
      />
      <br />

      <label for="input3">Dependentes:</label>
      <input
        type="number"
        id="input3"
        name="input3"
        onFocus={CalcInss}
        value={dependentes}
        onChange={(e) => setDependentes(+e.target.value)}
      />
      <br />

      <label for="input4">Pensão:</label>
      <input
        type="number"
        id="input4"
        name="input4"
        value={pensao}
        onChange={(e) => setPensao(+e.target.value)}
      />
      <br />

      <label for="input5">Previdência Complementar:</label>
      <input
        type="number"
        id="input5"
        name="input5"
        onFocus={CalcInssFinal}
        value={pcomplementar}
        onChange={(e) => setPComplementar(+e.target.value)}
      />
      <br />

      <p> Base Valor Recebido 20% = {resultbase}</p>
      <p> Base Outros Vinculos 20% = {resultvinculo}</p>
      <p> INSS Atual = {inssatual}</p>
      <p> INSS Out. Vinculos = {inssoutros}</p>
      <p> INSS Total = {insstotal}</p>
    </div>
  );
};

export default Carga;
