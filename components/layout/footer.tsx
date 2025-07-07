const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Pitch. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
