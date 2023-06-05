import { useState } from 'react';
import { Modal, Button } from 'antd';
import PropTypes from 'prop-types';


const ErrorBlock = ({is_error, text, onClick, onCancel}) => {
  const [isModalOpen, setIsModalOpen] = useState(is_error);

  ErrorBlock.propTypes = {
    is_error: PropTypes.bool,
    text: PropTypes.string,
    onClick: PropTypes.func,
    onCancel: PropTypes.func,
  }

  return (
        <Modal 
        title="Error" 
        open={isModalOpen} 
        onCancel={onCancel}
        footer={[
          <Button 
          key="back" 
          onClick={onClick}
          style={{ backgroundColor: "#C44536" }}
          >
            ОК
          </Button>
        ]}
        >
          <p>{text}</p>
        </Modal>
  );
};

export default ErrorBlock;