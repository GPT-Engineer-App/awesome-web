import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="text-center space-y-8">
      <section className="hero bg-gray-200 py-20">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-xl mb-8">We provide the best services for you.</p>
          <Button variant="primary" size="lg">Get Started</Button>
        </div>
      </section>
      <section className="about py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg mb-8">We are a company dedicated to providing excellent services.</p>
          <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[400px]" />
        </div>
      </section>
      <section className="services py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
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
      </section>
      <section className="contact py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-medium">Name</label>
              <input type="text" id="name" className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium">Email</label>
              <input type="email" id="email" className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium">Message</label>
              <textarea id="message" className="w-full border border-gray-300 p-2 rounded"></textarea>
            </div>
            <Button variant="primary" type="submit">Send Message</Button>
          </form>
          <div className="contact-info mt-8">
            <p className="text-lg">Address: 123 Main St, Anytown, USA</p>
            <p className="text-lg">Phone: (123) 456-7890</p>
            <p className="text-lg">Email: info@example.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
