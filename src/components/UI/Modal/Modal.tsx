import React, { useEffect, useRef } from 'react';
declare const ts: any;

const Modal = (props: any) => {
    const { open, onCloseClicked, children } = props;
    const myref = useRef();
    useEffect(() => {
        if (open) {
            ts.ui.get(myref.current).open();
            ts.ui.get(myref.current, modal => {
                Object.assign(modal, {
                    onclosed: () => onCloseClicked(false)
                });
            });
        }
    }, [open])

    return (
        <dialog
            data-ts="Modal"
            ref={myref}
            {...{
                "data-ts.title": "Company Information"
            }}

        >
            <div data-ts="Panel">
                <div className="container">
                    {children}
                </div>
            </div>
        </dialog>
    )
}

export default Modal
