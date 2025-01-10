import { supplierFields } from '@/constants';
import { Button } from '../ui/button';
import { SupplierProps } from '@/types';

type SupplierFieldKey = keyof typeof supplierFields;

type SupplierCardProps = {
  supplier: SupplierProps;
};

const SupplierCard = ({ supplier }: SupplierCardProps) => (
  <div className="supplier-card">
    <img
      src={supplier.logo}
      alt={`${supplier.name} logo`}
      className="rounded-full w-14 h-14"
    />

    <div className="flex-initial flex-col gap-1">
      <p className="h3-bold text-secondary text-center line-clamp-1 mb-2">
        {supplier.name}
      </p>

      {Object.keys(supplierFields).map((supplierField) => {
        const fieldKey = supplierField as SupplierFieldKey;
        const field = supplierFields[fieldKey];
        const { label, icon } = field;
        const value = supplier[fieldKey];

        if (!label || !value) return;

        return (
          <div key={fieldKey} className="flex-start gap-2 justify-start w-full">
            <img src={icon} alt={`${label} icon`} width={17} />
            <p className="base-regular text-dark-1 text-left line-clamp-1">
              {label}: {value}
            </p>
          </div>
        );
      })}
    </div>

    <Button type="button" size="sm" className="shad-button_primary px-5">
      Contratar
    </Button>
  </div>
);

export default SupplierCard;
