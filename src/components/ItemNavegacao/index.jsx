/* eslint-disable react/prop-types */
import styled from "styled-components";

const ListItemStyle = styled.li`
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 22px;
  font-size: 18px;
  color: ${(props) => (props.$ativo ? "#7B78E5" : "#D9D9D9")};
  font-family: ${(props) => (props.$ativo ? "PoppinsBold" : "PoppinsRegular")};
`;

export default function ItemNavegacao({
  iconeAtivo,
  iconeInativo,
  ativo = false,
  children,
}) {
  return (
    <ListItemStyle $ativo={ativo}>
      <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
      {children}
    </ListItemStyle>
  );
}
