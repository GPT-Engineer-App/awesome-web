const Services = () => {
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold mb-4">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="service-item text-center">
          <div className="icon mb-4">
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-16 h-16" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Service 1</h3>
          <p className="text-lg">Description of service 1.</p>
        </div>
        <div className="service-item text-center">
          <div className="icon mb-4">
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-16 h-16" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Service 2</h3>
          <p className="text-lg">Description of service 2.</p>
        </div>
        <div className="service-item text-center">
          <div className="icon mb-4">
            <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-16 h-16" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Service 3</h3>
          <p className="text-lg">Description of service 3.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;