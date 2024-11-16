import React, { useRef } from 'react';
import CloseIcon from './IconClose';

export type DialogProps = {
  active?: boolean;
  onCloseDialog?: CallableFunction;
  className?: string;
  modalClassName?: string;
  children?: React.ReactNode;
};

export const Dialog: React.FC<DialogProps> = ({
  active = false,
  onCloseDialog,
  children,
}) => {
  const classes = `fixed inset-0 z-[10000000] transition-opacity ${active ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`;
  const modalClasses = 'absolute bottom-0 md:bottom-auto w-full md:w-[688px] md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 p-6 md:p-10 bg-white dark:bg-slate-700 rounded-none md:rounded-lg max-h-[calc(100vh-56px)] max-h-[calc(100vh-112px)]';
  const scrollableRef = useRef(null);

  return (
    <div className={classes}>
      <div
        className="absolute inset-0 -z-[1] bg-black opacity-70"
        onClick={onCloseDialog && (() => onCloseDialog())}
      ></div>
      <div ref={scrollableRef} className={modalClasses}>
        <button className="absolute top-6 right-6 z-20" onClick={onCloseDialog && (() => onCloseDialog())}>
          <CloseIcon color="stroke-white" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Dialog;
