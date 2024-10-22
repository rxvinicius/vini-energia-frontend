import { useQuery, gql } from '@apollo/client';

const GET_SUPPLIERS = gql`
  query suppliers($consumption: Int!, $page: Int!, $pageSize: Int!) {
    suppliers(consumption: $consumption, page: $page, pageSize: $pageSize) {
      data {
        _id
        name
        logo
        state
        costPerKwh
        minKwh
        totalClients
        averageRating
      }
      page
      pageSize
      total
    }
  }
`;

const pageSize = 8;

const useSuppliers = (consumption: string, page: number) => {
  const { loading, error, data } = useQuery(GET_SUPPLIERS, {
    variables: { consumption: parseInt(consumption), page, pageSize },
    skip: !consumption,
  });

  return { loading, error, data };
};

export default useSuppliers;

export { GET_SUPPLIERS, pageSize };
