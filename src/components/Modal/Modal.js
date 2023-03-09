import { createPortal } from 'react-dom';
import { Modal__backdrop, Modal__content } from './Modal.styled';
import { PropTypes } from 'prop-types';

const moodalRoot = document.querySelector('#moodal-root');
const Modal = props => {
  return createPortal(
    <Modal__backdrop>
      <Modal__content>{props.children}</Modal__content>
    </Modal__backdrop>,
    moodalRoot
  );
};

export default Modal;

Modal.prototype = {
  props: PropTypes.object,
};
