export default function Modal({ children, setCloseModal, status ,modalText}) {

  if (status){
  
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
            <h3>{modalText}</h3>
            
            <div> {children}</div>
            <button
              onClick={(e) => {
                setCloseModal(false);
              }}
              className="formButton"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );}
  else
    return (
      <>
        <button className="formButton"
          onClick={(e) => {
            e.stopPropagation();
            setCloseModal(true);
          }}
        >
          {modalText}
        </button>
      </>
    );
}
