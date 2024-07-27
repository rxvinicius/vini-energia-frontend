import { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import Supplier from './components/Supplier';

const GET_SUPPLIERS = gql`
  query suppliers($consumption: Int!) {
    suppliers(consumption: $consumption) {
      id
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
  const [consumption, setConsumption] = useState('');
  const { loading, error, data } = useQuery(GET_SUPPLIERS, {
    variables: { consumption: parseInt(consumption) },
    skip: !consumption,
  });

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
      {data && data.suppliers.length > 0 && (
        <div id="suppliers-container">
          {data.suppliers.map((supplier) => (
            <Supplier supplier={supplier} key={supplier.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
