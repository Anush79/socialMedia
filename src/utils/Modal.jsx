export default function Modal({ children, setCloseModal, status ,modalText}) {
  console.log(status)
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
            <h3>Your Modal</h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consectetur quaerat doloremque reprehenderit officiis ad modi, odio
            commodi totam ame.
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
