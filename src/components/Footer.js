const Footer = () => {
  return (
    <footer className="bg-[#4B3E2F] text-white py-6 mt-12">
      <div className="container mx-auto text-center px-4">
        <h3 className="text-xl font-semibold text-[#FFB84C] mb-2">Carol's</h3>
        <p className="text-sm mb-2">123 Foodie Lane, Flavor Town, FT 45678</p>
        <p className="text-sm mb-2">📞 (123) 456-7890 | ✉️ contact@carols.com</p>
        <p className="text-xs text-gray-300 mt-4">&copy; {new Date().getFullYear()} Carol's. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;