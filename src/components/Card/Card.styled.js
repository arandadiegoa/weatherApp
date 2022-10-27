import styled from "styled-components";

export const CardContainer = styled.div`
  border-style: solid;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: 100px;
  width: 30%;
  padding: 1px;
  @media (max-width: 700px) {
    padding: 10px;
    width: 50%;
  }
  @media (max-width: 590px) {
    padding: 10px;
    width: 70%;
  }
`;
export const List = styled.li`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  list-style: none;
  font-size: 11px;
  @media (max-width: 600px) {
    padding: 10px;
    width: 50%;
  }
  @media (max-width: 260px) {
    padding: 10px;
    width: 100%;
  }
`;

export const Img = styled.img`
  width: 150px;
`;
