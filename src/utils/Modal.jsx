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
        <button
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
