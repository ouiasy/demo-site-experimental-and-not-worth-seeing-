import React from 'react';
import Link from "next/link";
import {Button} from "@/components/ui/button";

const Section: React.FC<SectionProps> = ({title, subtitle, children}) => {
    return (
        <section className="container">
            <div className="text-center space-y-6 py-6">
                <h1 className="font-bold text-3xl">{title}</h1>
                <p className="text-muted-foreground">{subtitle}</p>
            </div>
            {children}
        </section>
    );
};

interface SectionProps {
    title: string;
    subtitle: string;
    children: React.ReactNode;
}

export default Section;