import React, { useRef, useEffect } from 'react';
import '../styles/FaqItem.css';

const FAQItem = ({ pregunta, respuesta }) => {
    const textAreaRef = useRef(null);

    useEffect(() => {
        textAreaRef.current.style.height = "0px";
        const scrollHeight = textAreaRef.current.scrollHeight;
        textAreaRef.current.style.height = scrollHeight + "px";
    }, [respuesta]);

    return (
        <div className="faq-item">
            <p>{pregunta}</p>
            <textarea ref={textAreaRef} readOnly value={respuesta} />
        </div>
    );
}

export default FAQItem;
