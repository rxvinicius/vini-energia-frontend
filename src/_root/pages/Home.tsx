import { ChangeEvent, useState } from 'react';
import { useQuery, gql } from '@apollo/client';

import { Loader, SupplierCard } from '@/components/shared';
import { Input, Label } from '@/components/ui';
import { energySuppliersLogo } from '@/assets';
import { SupplierProps } from '@/types';

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

const minLength = 0;
const maxLength = 1000000;

export default function Home() {
  const [consumption, setConsumption] = useState('');
  const { loading, error, data } = useQuery(GET_SUPPLIERS, {
    variables: { consumption: parseInt(consumption) },
    skip: !consumption,
  });

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value === '') {
      return setConsumption('');
    }

    const isValidNumber =
      (/^[1-9]\d*$/.test(value) || value === '0') &&
      parseInt(value) >= minLength &&
      parseInt(value) <= maxLength;

    if (!isValidNumber) return;

    setConsumption(value);
  };

  const Content = () => {
    if (error) {
      return <p className="no-data">Erro ao buscar fornecedores</p>;
    }

    if (loading) return <Loader />;

    if (!consumption) return;

    if (data && data.suppliers.length > 0) {
      return (
        <ul className="supplier-grid">
          {data?.suppliers.map((supplier: SupplierProps) => (
            <li key={supplier.id}>
              <SupplierCard supplier={supplier} />
            </li>
          ))}
        </ul>
      );
    }

    return <p className="no-data">Nenhum fornecedor encontrado</p>;
  };

  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="flex-start gap-3 justify-start w-full">
          <img
            src={energySuppliersLogo}
            alt="Fornecedores de energia"
            width={46}
            height={46}
          />
          <h1 className="h1-bold">Fornecedores</h1>
        </div>

        <div className="flex flex-col gap-2 md:w-[270px] w-[100%]">
          <Label htmlFor="consumption">Consumo mensal de energia (kWh)</Label>

          <div className="flex gap-1">
            <Input
              id="consumption"
              type="tel"
              value={consumption}
              min={minLength}
              max={maxLength}
              placeholder="Ex: 2000 (kWh)"
              className="search-supplier"
              autoComplete="off"
              onChange={handleSearchValue}
            />
          </div>
        </div>

        <Content />
      </div>
    </div>
  );
}
