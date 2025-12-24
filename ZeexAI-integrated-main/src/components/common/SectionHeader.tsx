import React from "react";


interface SectionHeaderProps {
    title?: string;
    word1?: string;
    word2?: string;
    word3?: string;
    description?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    title = "",
    word1 = "",
    word2 = "",
    word3 = "",
    description = ""
}) => {
    return (
        <section className="core-section">
            <p className="core-title">{title}</p>

            <h1 className="core-heading">
                <span className="core-word word-1">{word1}</span>
                <span className="feature-word word-2">{word2}</span>
                <span className="core-word word-3">{word3}</span>
            </h1>

            <p className="core-description">{description}</p>
        </section>
    );
};

export default SectionHeader;
