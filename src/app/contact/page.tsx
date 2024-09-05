import ContactInfo from "./components/ContactInfo";

const ContactPage = () => {
  return (
    <div className="container mx-auto xl:px-20 lg:px-16 md:px-10 px-4 py-5 min-h-[500px]">
      <div className="flex justify-center items-center mb-6 lg:mb-8 md:mb-7">
        <h2 className="lg:text-4xl md:text-4xl text-3xl text-center font-semibold text-blue-500">
          Contact Information
        </h2>
      </div>

      <ContactInfo />
    </div>
  );
};

export default ContactPage;
