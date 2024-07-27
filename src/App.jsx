import { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_SUPPLIERS = gql`
  query suppliers($consumption: Int!) {
    suppliers(consumption: $consumption) {
      name
      logo
      state
      costPerKwh
      minKwh
      totalClients
      averageRating
    }
  }
`;

function App() {
  const [consumption, setConsumption] = useState(1000);
  const { loading, error, data } = useQuery(GET_SUPPLIERS, {
    variables: { consumption: parseInt(consumption) },
    skip: !consumption,
  });

  console.log('data ->', data);

  const handleInputChange = (e) => setConsumption(e.target.value);

  return (
    <div>
      <h1>Escolha de Fornecedor</h1>
      <input
        type="number"
        placeholder="Consumo mensal (kWh)"
        value={consumption}
        onChange={handleInputChange}
      />
      {loading && <p>Carregando...</p>}
      {error && <p>Erro: {error.message}</p>}
      {data && (
        <div>
          {data.suppliers.map((supplier) => (
            <div key={supplier.name}>
              <img src={supplier.logo} alt={supplier.name} />
              <p>Nome: {supplier.name}</p>
              <p>Estado: {supplier.state}</p>
              <p>Custo por kWh: {supplier.costPerKwh}</p>
              <p>Limite mínimo de kWh: {supplier.minKwh}</p>
              <p>Total de clientes: {supplier.totalClients}</p>
              <p>Avaliação média: {supplier.averageRating}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
