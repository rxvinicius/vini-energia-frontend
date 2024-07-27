const Supplier = ({ supplier }) => (
  <div id="supplier">
    <div id="logo-container">
      <img src={supplier.logo} alt={`Logo ${supplier.name}`} />
    </div>

    <h2>{supplier.name}</h2>
    <p>Estado: {supplier.state}</p>
    <p>Custo por kWh: {supplier.costPerKwh}</p>
    <p>Limite mínimo de kWh: {supplier.minKwh}</p>
    <p>Total de clientes: {supplier.totalClients}</p>
    <p>Avaliação média: {supplier.averageRating}</p>
  </div>
);

export default Supplier;
