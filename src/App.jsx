import { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import Supplier from './components/Supplier';

export const GET_SUPPLIERS = gql`
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

  const Content = () => {
    if (error) {
      return <h2>Erro: {error.message}</h2>;
    }

    if (loading) {
      return <h2>Carregando...</h2>;
    }

    if (!data || data.suppliers.length === 0) {
      return <h2>Nenhum fornecedor encontrado</h2>;
    }

    if (data && data.suppliers.length > 0) {
      return (
        <div id="suppliers-container">
          {data.suppliers.map((supplier) => (
            <Supplier supplier={supplier} key={supplier.id} />
          ))}
        </div>
      );
    }

    return null;
  };

  useEffect(() => {
    const handleWheel = (event) => {
      if (event.target.type === 'number') {
        event.preventDefault();
      }
    };

    document.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div>
      <h1>Escolha de Fornecedor</h1>
      <input
        type="number"
        placeholder="Consumo mensal (kWh)"
        value={consumption}
        onChange={handleInputChange}
      />
      <Content />
    </div>
  );
}

export default App;
