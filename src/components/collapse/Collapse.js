import React from "react";
import "./collapse.css"
// possible d'ajuster l'ouverture du collapse avec usestate

const Collapse = ({ title, content }) => {
    const isCollapse = (e) => {
        e.preventDefault();
        const divText = e.target.nextSibling;
        const arrow = e.target.lastChild;

        if (!divText.classList.contains("show")) {
            divText.classList.add("show");
            arrow.classList.add("rotate");
        } else {
            divText.classList.remove("show");
            arrow.classList.remove("rotate");
        }
    };
    return (
        <div className="collapse">
            <button type="button" className="collapse__button" onClick={isCollapse}>
                {title}

                <p className="collapse_arrow">&lt;</p>
            </button>
            <div className="collapse__content">
                {Array.isArray(content) ? (
                    <ul className="collapse__list">
                        {content.map((equipment, index) => (
                            <li key={index} className="collapse__list-element">
                                {equipment}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="collapse__text">{content}</p>
                )}
            </div>
        </div>
    );
};

export default Collapse;