import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import { useAuth } from "../context/authContext";
export default function Modal({ children, setCloseModal, status, modalText }) {
  const { currentUser } = useAuth();

  if (status) {
    return (
      <div
        className="outer"
        onClick={(e) => {
          setCloseModal(false);
        }}
      >
        <div
          className="middle"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="inner">
          <div className="pp">
                <img src={currentUser.profileAvatar} alt="" width={"30px"} />
              </div>{" "}
            <h3>{modalText}</h3>

            <div>
            
              {children}
            </div>
            <button
              onClick={(e) => {
                setCloseModal(false);
              }}
              className="formButton closeModalButton"
            >
              <HighlightOffIcon></HighlightOffIcon>
            </button>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <>
       {modalText && <button
          className="formButton"
          onClick={(e) => {
            e.stopPropagation();
            setCloseModal(true);
          }}
        >
          {modalText}
        </button>}
      </>
    );
}
