import React from "react";
import Link from "@/components/GatsbyLink";
import Container from "@/components/Container";
import { MENU } from "../../config";

export default function Header() {
  return (
    <header>
      <Container>
        <nav className="flex justify-between py-6 md:py-10 flex-col sm:flex-row items-center">
          <div className="flex items-center">
            <Link to="/" className="text-black">
            JMR - Blog
            </Link>
          </div>
          <ul className="list-style-none grid grid-flow-col auto-cols-max gap-6 items-center pt-6 sm:pt-0">
            {MENU.map((item) => (
              <li key={item.label}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
