import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
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
  );
};

export default Contact;