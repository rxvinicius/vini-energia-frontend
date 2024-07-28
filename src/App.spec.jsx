import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import App from './App';
import { GET_SUPPLIERS } from './App';

const mocks = [
  {
    request: {
      query: GET_SUPPLIERS,
      variables: { consumption: 1500 },
    },
    result: {
      data: {
        suppliers: [
          {
            id: '1',
            name: 'Fornecedor 1',
            logo: 'logo1.png',
            state: 'SP',
            costPerKwh: 0.3,
            minKwh: 1000,
            totalClients: 500,
            averageRating: 4.5,
          },
        ],
      },
    },
  },
  {
    request: {
      query: GET_SUPPLIERS,
      variables: { consumption: 2500 },
    },
    result: {
      data: {
        suppliers: [
          {
            id: '1',
            name: 'Fornecedor 1',
            logo: 'logo1.png',
            state: 'SP',
            costPerKwh: 0.3,
            minKwh: 1000,
            totalClients: 500,
            averageRating: 4.5,
          },
          {
            id: '2',
            name: 'Fornecedor 2',
            logo: 'logo2.png',
            state: 'RJ',
            costPerKwh: 0.4,
            minKwh: 2000,
            totalClients: 300,
            averageRating: 4.0,
          },
        ],
      },
    },
  },
];

describe('App Component', () => {
  test('renders the heading', () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>
    );
    const heading = screen.getByText(/Escolha de Fornecedor/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders the input field', () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>
    );
    const input = screen.getByPlaceholderText(/Consumo mensal \(kWh\)/i);
    expect(input).toBeInTheDocument();
  });

  test('fetches and displays suppliers based on user input', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>
    );

    const input = screen.getByPlaceholderText(/Consumo mensal \(kWh\)/i);
    fireEvent.change(input, { target: { value: '1500' } });

    await waitFor(() => {
      const supplier = screen.getByText(/Fornecedor 1/i);
      expect(supplier).toBeInTheDocument();
    });
  });
});
