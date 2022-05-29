import { ReactElement, useEffect } from 'react';

interface IModal {
  visible: boolean;
  title: string;
  content: string;
  buttonText: ReactElement | string;
  onClose: () => void;
  children?: JSX.Element;
}

export const Modal = ({
  visible = false,
  title = '',
  content = '',
  buttonText = '',
  children = <div></div>,
  onClose,
}: IModal) => {
  const EscapeDown = ({ key }: KeyboardEvent) => {
    if (key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', EscapeDown);
    return () => document.removeEventListener('keydown', EscapeDown);
  });

  if (!visible) return null;

  return (
    <>
      <div
        onClick={onClose}
        style={{
          width: '100vw',
          height: '100vh',
          position: 'absolute',
          top: '0',
          left: '0',
          backgroundColor: 'rgba(51, 51, 51, .4)',
        }}
      >
        <div
          style={{ margin: '30vh 25vw', backgroundColor: 'rgb(255, 255, 255)', padding: '20px' }}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <h3>{title}</h3>
            <span onClick={onClose}>X</span>
          </div>
          <div>
            Body
            <div>{content.replace('`', '')}</div>
          </div>
          Footer
          {buttonText && <div>{buttonText}</div>}
        </div>
      </div>
      <div>{children}</div>
    </>
  );
};
