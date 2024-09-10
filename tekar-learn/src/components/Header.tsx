import { Navbar, Typography, IconButton, Button } from "@material-tailwind/react";
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          <div className="flex items-center">
            <img src="/logo.svg" alt="NonProfit Edu Logo" className="w-8 h-8 mr-2" />
            NonProfit Edu
          </div>
        </Typography>
        <div className="hidden lg:flex items-center gap-4">
          <Button variant="text" color="blue-gray" size="sm">
            <Link href="#about">About</Link>
          </Button>
          <Button variant="text" color="blue-gray" size="sm">
            <Link href="#courses">Courses</Link>
          </Button>
          <Button variant="text" color="blue-gray" size="sm">
            <Link href="#contact">Contact</Link>
          </Button>
          <IconButton
            variant="text"
            color="blue-gray"
            className="ml-auto"
            onClick={() => window.open('https://github.com/your-org/your-repo', '_blank')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
            </svg>
          </IconButton>
          <ThemeToggle />
        </div>
      </div>
    </Navbar>
  );
}
