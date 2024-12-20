import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#d2b49c] text-black">
      <div className="grid grid-cols-1 gap-8 px-4 py-10 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center">
          <h2 className="mb-4 text-lg font-bold">Connect With Us</h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2">
              <Link href="https://x.com/" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <i className="text-xl text-black transition-colors fab fa-x-twitter hover:text-gray-200"></i>
                </a>
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <Link href="https://facebook.com/" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <i className="text-xl text-blue-600 transition-colors fab fa-facebook hover:text-blue-200"></i>
                </a>
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <Link href="https://instagram.com/" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <i className="text-xl text-pink-600 transition-colors fab fa-instagram hover:text-pink-200"></i>
                </a>
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <Link href="https://youtube.com/" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <i className="text-xl text-red-600 transition-colors fab fa-youtube hover:text-red-200"></i>
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="mb-4 text-lg font-bold">Quick Links</h2>
          <ul className="space-y-4">
            <li>
              <Link href="/" passHref>
                <a className="hover:underline">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                <a className="hover:underline">About</a>
              </Link>
            </li>
            <li>
              <Link href="/products" passHref>
                <a className="hover:underline">Products</a>
              </Link>
            </li>
            <li>
              <Link href="/contact" passHref>
                <a className="hover:underline">Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="flex items-center space-x-2 text-lg font-medium">
              <span>🌱</span>
              <span>100% Organic</span>
            </h3>
            <p className="mt-2 text-sm">
              At The Golden Wheat Bakery, we’re committed to using 100% organic
              ingredients in all our baked goods, ensuring quality,
              sustainability, and a healthier option for our customers.
            </p>
          </div>
          <div>
            <h3 className="flex items-center space-x-2 text-lg font-medium">
              <span>🧵</span>
              <span>Handmade</span>
            </h3>
            <p className="mt-2 text-sm">
              At The Golden Wheat Bakery, all our products are handmade with
              care, ensuring every bite is crafted to perfection.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="flex items-center space-x-2 text-lg font-medium">
              <span>👥</span>
              <span>About Us</span>
            </h3>
            <p className="mt-2 text-sm">
              The Golden Wheat Bakery is dedicated to crafting delicious,
              handmade baked goods with love and care, using only the finest
              organic ingredients.
            </p>
          </div>
          <div>
            <h3 className="flex items-center space-x-2 text-lg font-medium">
              <span>🍞</span>
              <span>Our Products</span>
            </h3>
            <p className="mt-2 text-sm">
              Our products are made with the finest 100% organic ingredients,
              ensuring quality and flavor in every bite.
            </p>
          </div>
        </div>
      </div>

      <div className="py-4 text-center bg-custom-nav-brown">
        <p className="text-sm text-white">Wheat Bakery © 2024</p>
      </div>
    </footer>
  );
}
