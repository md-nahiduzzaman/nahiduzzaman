const Footer = () => {
  return (
    <section className="pb-8 border-t">
      <div className="container mx-auto">
        <footer>
          <div className="mt-8 flex flex-col justify-between gap-4 text-sm font-medium text-muted-foreground md:flex-row md:items-center text-center">
            <p>© 2025 Copyright. All rights reserved.</p>
            <div className="flex gap-4 items-center justify-center">
              <a href="#" className="underline hover:text-primary">
                Terms and Conditions
              </a>
              <a href="#" className="underline hover:text-primary">
                Privacy Policy
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
