import { useEffect } from 'react';
import { Loader, SupplierCard, Pagination } from '@/components/shared';
import { Input, Label } from '@/components/ui';
import { energySuppliersLogo } from '@/assets/icons';
import { SupplierProps } from '@/types';
import { useConsumption, usePagination, useSuppliers } from '@/hooks';

export default function Home() {
  const { consumption, minLength, maxLength, handleChangeConsumption } =
    useConsumption();
  const { page, initialPage, handlePageChange } = usePagination();
  const { loading, error, data } = useSuppliers(consumption, page);

  useEffect(() => handlePageChange(initialPage), [consumption]);

  const Content = () => {
    if (error) {
      return <p className="no-data">Erro ao buscar fornecedores</p>;
    }

    if (loading) return <Loader />;

    if (!consumption) return;

    if (data && data.suppliers.data.length > 0) {
      return (
        <>
          <ul className="supplier-grid">
            {data.suppliers.data.map((supplier: SupplierProps) => (
              <li key={supplier._id}>
                <SupplierCard supplier={supplier} />
              </li>
            ))}
          </ul>

          <Pagination
            page={data.suppliers.page}
            pageSize={data.suppliers.pageSize}
            initialPage={initialPage}
            total={data.suppliers.total}
            onPageChange={handlePageChange}
          />
        </>
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
              className="shad-input"
              autoComplete="off"
              onChange={handleChangeConsumption}
            />
          </div>
        </div>

        <Content />
      </div>
    </div>
  );
}
