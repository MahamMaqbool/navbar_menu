import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 py-4">
          <div className="col-span-1 text-left">
            <Link href="/" className="text-light text-lg font-semibold">
              <span className="text-light h5">About Us</span>
              
            </Link>
            <p className="text-light my-4 text-neutral-400">
            C2tec is dedicated to enhancing coding skills and fostering a community of developers. Our platform offers resources, tutorials, and mentorship to guide you on your coding journey.
            </p>
            <ul className="flex space-x-4 ">
              <li>
                <Link className="text-light font-mono font-bold text-teal-700" href="http://facebook.com/">
                  Facebook
                </Link>
              </li>
              <li>
                <Link className="text-light font-mono font-bold text-teal-700" href="https://www.linkedin.com/">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link className="text-light font-mono font-bold text-teal-700" href="https://www.whatsapp.com/">
                  WhatsApp
                </Link>
              </li>
             
             
            </ul>
          </div>

          <div className="col-span-1 mt-4 ">
            <h3 className="text-lg  font-semibold">Links</h3>
            <ul className="text-light">
              <li className="pb-2">
                <Link className="text-neutral-400 hover:underline" href="/">Home</Link>
              </li>
              <li className="pb-2">
                <Link className="text-neutral-400 hover:underline" href="/about">Our Courses</Link>
              </li>
              <li className="pb-2">
                <Link className="text-neutral-400 hover:underline" href="/work">Contact</Link>
              </li>
             
             
            </ul>
          </div>

          <div className="col-span-1 mt-4">
            <h3 className="text-lg text-light font-semibold">Our Courses</h3>
            <ul className="text-light">
              <li className="pb-2">
                <Link className="text-neutral-400 hover:underline" href="#">Introduction To Web Development</Link>
              </li>
              <li className="pb-2">
                <Link className="text-neutral-400 hover:underline" href="#">Building Responsive Website</Link>
              </li>
              <li className="pb-2">
                <Link className="text-neutral-400 hover:underline" href="#">IOS App Development With Swift</Link>
              </li>
              <li className="pb-2">
                <Link className="text-neutral-400 hover:underline" href="#">Android App Development for Beginners</Link>
              </li>
              <li className="pb-2">
                <Link className="text-neutral-400 hover:underline" href="#">Cross-Plattform With Flutter</Link>
              </li>
              <li className="pb-2">
                <Link className="text-neutral-400 hover:underline" href="#">Web Development with Node.js</Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1 mt-4">
            <h3 className="text-lg text-light font-semibold">For Client</h3>
            <ul className="text-light">
              <li className="pb-2">
                <Link className="text-neutral-400 hover:underline" href="tel:010-020-0340">010-020-0340</Link>
              </li>
              <li className="pb-2">
                <Link className="text-neutral-400 hover:underline" href="mailto:info@company.com">info@company.com</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-teal-600 text-white py-3">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center text-light">
            <p className="text-center lg:text-left">
              © Copyright 2021 Master The Craft of Coding.
            </p>
            <p className="text-center lg:text-right">
              Designed by{' '}
              <Link className="hover:underline" href="https://templatemo.com/" target="_blank">
                <strong>IA</strong>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;