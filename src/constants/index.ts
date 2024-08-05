import {
  clientsIcon,
  costIcon,
  kilowattIcon,
  locationIcon,
  ratingIcon,
} from '@/assets';

const supplierFields = {
  state: {
    label: 'Estado',
    icon: locationIcon,
  },
  costPerKwh: {
    label: 'Custo por kWh',
    icon: costIcon,
  },
  minKwh: {
    label: 'Limite mínimo de kWh',
    icon: kilowattIcon,
  },
  totalClients: {
    label: 'Total de clientes',
    icon: clientsIcon,
  },
  averageRating: {
    label: 'Avaliação média',
    icon: ratingIcon,
  },
};

export { supplierFields };
