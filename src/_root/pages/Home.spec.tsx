import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import Home, { GET_SUPPLIERS } from './Home';

const mocks = [
  {
    request: {
      query: GET_SUPPLIERS,
      variables: { consumption: 1500, page: 1, pageSize: 8 },
    },
    result: {
      data: {
        suppliers: {
          data: [
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
          page: 1,
          pageSize: 8,
          total: 1,
        },
      },
    },
  },
  {
    request: {
      query: GET_SUPPLIERS,
      variables: { consumption: 2500, page: 1, pageSize: 8 },
    },
    result: {
      data: {
        suppliers: {
          data: [
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
          page: 1,
          pageSize: 8,
          total: 2,
        },
      },
    },
  },
];

describe('Home Component', () => {
  test('renders the heading', () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Home />
      </MockedProvider>
    );
    const heading = screen.getByText(/Fornecedores/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders the input field', () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Home />
      </MockedProvider>
    );
    const input = screen.getByPlaceholderText(/Ex: 2000 \(kWh\)/i);
    expect(input).toBeInTheDocument();
  });

  test('fetches and displays suppliers based on user input', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Home />
      </MockedProvider>
    );

    const input = screen.getByPlaceholderText(/Ex: 2000 \(kWh\)/i);
    fireEvent.change(input, { target: { value: '1500' } });

    await waitFor(() => {
      const supplier = screen.getByText(/Fornecedor 1/i);
      expect(supplier).toBeInTheDocument();
    });
  });

  test('fetches and displays multiple suppliers based on user input', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Home />
      </MockedProvider>
    );

    const input = screen.getByPlaceholderText(/Ex: 2000 \(kWh\)/i);
    fireEvent.change(input, { target: { value: '2500' } });

    await waitFor(() => {
      const supplier1 = screen.getByText(/Fornecedor 1/i);
      const supplier2 = screen.getByText(/Fornecedor 2/i);
      expect(supplier1).toBeInTheDocument();
      expect(supplier2).toBeInTheDocument();
    });
  });
});
