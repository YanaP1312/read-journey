import Modal from "../Modal";

interface ModalSuccessAddOwnProps{
    onClose: () => void;
}

const ModalSuccessAddOwn = ({onClose}: ModalSuccessAddOwnProps) => {
    return (<Modal onClose={onClose}>
  <div className="specialNoticModal">
<picture>
              <source
                srcSet="/images/super-dt@2x.png 2x, /images/super-dt.png 1x"
                media="(min-width: 768px)"
              />
              <source
                srcSet="/images/super-mob@2x.png 2x, /images/super-mob.png 1x"
                media="(max-width:767px)"
              />
              <img
                src="/images/super-dt.png"
                width="68"
                height="70"
                alt="books"
              />
            </picture>
    <h2 className="specialNoticTitle">Good job</h2>
    <p className="specialNoticSpan">Your book is now in <span  className="specialNoticSpanTwo">the library!</span> The joy knows no bounds and now you can start your training</p>
    </div>
    </Modal>)

}

export default ModalSuccessAddOwn;