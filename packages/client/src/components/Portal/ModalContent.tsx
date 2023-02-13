import styled from 'styled-components';



export function ModalContent({ onClose }) {
  return (
    <ModalStyle>
      <div>I'm a modal dialog</div>
      <button onClick={onClose}>Close</button>
    </ModalStyle>
  );
}

const ModalStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
  background-color: white;
  border: 2px solid rgb(240, 240, 240);
  border-radius: 12px;
  position:  absolute;
  width: 250px;
  top: 70px;
  left: calc(50% - 125px);
  bottom: 70px;
`
