import Modal from "../Modal"

interface ModalStartReadingProps {
    onClose: () => void;
} 

const ModalFinishReading = ({onClose}: ModalStartReadingProps) => {
    return (
        <Modal onClose={onClose}>
            <div className="specialNoticModal">
            <picture>
              <source
                srcSet="/images/books-dt@2x.png 2x, /images/books-dt.png 1x"
                media="(min-width: 768px)"
              />
              <source
                srcSet="/images/books-mob@2x.png 2x, /images/books-mob.png 1x"
                media="(max-width:767px)"
              />
              <img
                src="/images/books-dt.png"
                width="70"
                height="50"
                alt="books"
              />
            </picture>
          
<h2 className="specialNoticTitle">The book is read</h2>
<p className="specialNoticSpan">It was an <span className="specialNoticSpanTwo">exciting journey</span>, where each page revealed new horizons, and the characters became inseparable friends.</p></div>
        </Modal>
    )
}

export default ModalFinishReading;