import React, { useState } from "react";
import { Scale } from "lucide-react";

export default function Content() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState("");
  const [error, setError] = useState("");

  const calcularIMC = () => {
    setError("");
    const pesoFloat = parseFloat(peso);
    const alturaFloat = parseFloat(altura);

    if (pesoFloat <= 0 || isNaN(pesoFloat)) {
      setError("Peso inválido. Deve ser um número maior que zero.");
      return;
    }

    if (alturaFloat <= 0 || isNaN(alturaFloat)) {
      setError("Altura inválida. Deve ser um número maior que zero.");
      return;
    }

    const imc = pesoFloat / (alturaFloat * alturaFloat);
    let classificacao;

    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
      classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
      classificacao = "Sobrepeso";
    } else {
      classificacao = "Obesidade";
    }

    setResultado(`Seu IMC é ${imc.toFixed(2)} - ${classificacao}`);
  };

  return (
    <main className="flex-1 p-6 bg-gray-900 text-gray-100">
      <div className="max-w-md mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Scale className="mr-2 text-blue-400" />
          Calculadora de IMC
        </h2>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="peso"
              className="block text-sm font-medium text-gray-300"
            >
              Peso (kg)
            </label>
            <input
              type="number"
              id="peso"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Exemplo: 70"
            />
          </div>
          <div>
            <label
              htmlFor="altura"
              className="block text-sm font-medium text-gray-300"
            >
              Altura (m)
            </label>
            <input
              type="number"
              id="altura"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Exemplo: 1.75"
              step="0.01"
            />
          </div>
          <button
            onClick={calcularIMC}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
          >
            Calcular IMC
          </button>
          {error && (
            <p className="text-red-500 text-sm mt-2" role="alert">
              {error}
            </p>
          )}
          {resultado && (
            <div className="mt-4 p-3 bg-gray-700 rounded-md">
              <p className="text-lg font-semibold text-center">{resultado}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
