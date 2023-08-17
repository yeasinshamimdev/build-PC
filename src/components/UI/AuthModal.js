"use client"
import { setOpen } from '@/redux/features/modal/modalSlice';
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

const AuthModal = ({children}) => {
  const isOpen = useSelector(state => state.modal.open)
  const dispatch = useDispatch();
  
  const handleOk = () => {
    // setTimeout(() => {
    //   setOpen();
    //   setConfirmLoading(false);
    // }, 2000);
    dispatch(setOpen());
  };

  return (
    <Modal
      title="Login"
      open={isOpen}
      onOk={handleOk}
      // confirmLoading={confirmLoading}
      onCancel={() => dispatch(setOpen())}
    >
      {children}
    </Modal>
  );
};

export default AuthModal;
