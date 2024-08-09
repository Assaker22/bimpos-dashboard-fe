import "./navbar.component.scss";

import { Panel } from "primereact/panel";
import Divider from "../divider/divider.component";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronRightIcon,
  EarthIcon,
  SearchIcon,
  SquareArrowOutUpRightIcon,
} from "lucide-react";
import Button from "../button/button.component";
import { useClickOutside } from "primereact/hooks";
import useWindowDimensions from "../../hooks/useWindowDimensions.hook";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const { isMobile } = useWindowDimensions();
  const [navbar, setNavbar] = useState({ collapsed: true });

  const containerRef = useRef();

  useEffect(() => {
    if (!isMobile) {
      setNavbar({ collapsed: false });
    } else {
      setNavbar({ collapsed: true });
    }
  }, [isMobile]);

  useClickOutside(containerRef, () => {
    if (isMobile) {
      setNavbar({ collapsed: true });
    }
  });

  return (
    <div
      ref={containerRef}
      className={`navbar-container ${navbar.collapsed ? "collapsed" : ""}`}
      onClick={() => {
        setNavbar({ collapsed: false });
      }}
    >
      {navbar.collapsed && (
        <Button
          className="navbar-collapse-button"
          variant="icon"
          onClick={() => {
            setNavbar({ collapsed: false });
          }}
        >
          <ChevronRightIcon />
        </Button>
      )}

      <h1>
        <img
          className="logo"
          alt="bimpos logo"
          src="images/BIM-POS-logo-black.jpg"
        />
        <span className="title">THE DASHBOARD</span>
      </h1>

      <Divider horizontal />

      <h2>
        <Button icon>
          <ChevronLeft color={"var(--text-color)"} />
        </Button>

        <Divider vertical dark />
        <span>PRODUCT SETUP</span>
      </h2>

      <Divider horizontal />

      <div className="usd-products">
        <div className="labels-container">
          <span className="label1">USD PRODUCTS</span>
          <span className="label2">FUSD AT</span>
        </div>
        <div className="value-container">
          <span className="value">91,000</span>
          <div className="value-icon">
            <ChevronDown color="white" size={18} />
          </div>
        </div>
      </div>

      <Divider horizontal />

      <div className="search-container">
        <label>QUICK SEARCH</label>
        <div className="search-input-container">
          <div className="input-container">
            <input placeholder="Product description Ex. Burger" />
            <SearchIcon color={"var(--accent-color)"} />
          </div>

          <span className="search-input-hotkey">F3</span>
        </div>
      </div>

      <ul className="nav-items">
        <li className="selected">
          <a>GENERAL INFORMATION</a>
          {true && <ChevronRight height={"100%"} />}
        </li>
        <li>
          <a>PRODUCT DETAILS</a>
        </li>
        <li>
          <a>STOCK CENTER</a>
        </li>
        <li>
          <a>OTHER INFORMATION</a>
        </li>
      </ul>

      <Divider />

      <div className="support-container">
        <label>SUPPORT</label>

        <ul>
          <li>
            <EarthIcon height={"1rem"} /> Contact us
          </li>
          <li>
            <SquareArrowOutUpRightIcon height={"1rem"} /> FAQ
          </li>
        </ul>
      </div>
    </div>
  );
}
