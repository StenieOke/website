export default function Services() {
  const services = [
    "Buying a Home",
    "Selling a Home",
    "First-Time Buyers",
    "Investment Properties",
    "Relocation Assistance",
  ];

  return (
    <div className="services">
      <h3>Services</h3>
      <ul>
        {services.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>
    </div>
  );
}
