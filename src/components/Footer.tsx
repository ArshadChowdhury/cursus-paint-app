export default function Footer() {
  return (
    <footer className="bg-amber-50 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Font</h3>
            <p className="text-gray-600 text-sm">
              Voluptate et pulvinar etiam suspendisse tellus consectetur
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-black">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Updates
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-black">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-black">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Community
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>
            Copyright © 2024 Font.com - Privacy Policy - Terms and Conditions
          </p>
        </div>
      </div>
    </footer>
  );
}
