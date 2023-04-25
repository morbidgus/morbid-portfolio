import styled from "styled-components";
import Vectors from "../assets/Vectors";

export const MainPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

export const PageHeader = styled.div`
  backdrop-filter: blur(6px);
  top: 0;
  position: fixed;
  width: 100%;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem 0;
  border-bottom: 1px solid #dcdcdc3b;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  height: 60px;
  width: 60px;
  margin-right: 8px;
`;

export const DropDownButton = styled.div`
  cursor: pointer;
`;

export const ChevronIcon = styled(Vectors.ChevronIcon)<{ isOpen?: boolean }>`
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "none")};
  margin-right: 24px;
`;

export const DropDownContainer = styled.div`
  position: absolute;
  bottom: -160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #dcdcdc3b;
  border-radius: 8px;
  background-color: #0c0f10;
  padding: 1rem;
`;

export const DropDownOption = styled.div`
  text-transform: uppercase;
  font-size: 16px;
  margin: 0.5rem 0;
  color: white;
  cursor: pointer;

  &:hover {
    color: #188cd6;
  }
`;

export const DownloadOption = styled.a`
  text-transform: uppercase;
  font-size: 16px;
  margin: 0.5rem 0;
  color: white;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #188cd6;
  }
`;
