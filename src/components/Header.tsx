import React from "react";
import { NavLink } from "react-router-dom";
import LogoImage from "..//media/RestoQ.svg";
import styled from "styled-components";
import { ReservBtn } from "..///components/Button";

type Props = {};

const Logo = styled.img`
  height: 1.2;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2rem;
  color: #fff;

  .active-link {
    color: rgba(248, 189, 73, 1);
    text-decoration: none;
  }

  .inactive-link {
    color: rgba(255, 255, 255, 1);
    text-decoration: none;
  }

  .button {
    .headerBtn {
      font-weight: 6500;
      letter-spacing: 1px;
      padding: 10px 20px;
      font-weight: 500;
    }
  }
`;

const WrapperNavLink = styled.nav`
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  gap: 3rem;
  line-height: 1.2rem;
`;

const Header = (props: Props) => {
  return (
    <HeaderWrapper>
      <Logo src={LogoImage} alt="Logo"></Logo>
      <WrapperNavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active-link" : "inactive-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "active-link" : "inactive-link"
          }
        >
          About Us
        </NavLink>

        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive ? "active-link" : "inactive-link"
          }
        >
          Menu
        </NavLink>
        <NavLink
          to="/news"
          className={({ isActive }) =>
            isActive ? "active-link" : "inactive-link"
          }
        >
          News
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "active-link" : "inactive-link"
          }
        >
          Contact
        </NavLink>
      </WrapperNavLink>
      <div className="button">
        <ReservBtn className="headerBtn">Book a Table</ReservBtn>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
