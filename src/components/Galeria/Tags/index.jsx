import styled from "styled-components";
import tags from "./tags.json";

const ButtonStyle = styled.button`
  text-align: left;
  padding: 10px;

  border-radius: 10px;
  border: 2px solid;
  border-color: #c98cf1;
  background: transparent;
  box-sizing: border-box;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  box-sizing: border-box;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export default function Tags() {
  return (
    <>
      {tags.map((tag) => (
        <ButtonStyle key={tag.id}>{tag.titulo}</ButtonStyle>
      ))}
    </>
  );
}
