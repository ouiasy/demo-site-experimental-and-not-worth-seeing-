"use client";

import React from 'react';
import Link from "next/link";
import {Button} from "@/components/ui/button";
import Section from "@/app/about/components/section";


function Features() {
    return (
        <Section title="サービス内容" subtitle="素敵な機能が盛りだくさん">
            <div className="grid lg:grid-cols-3 gap-4 mt-6">
                <div className="border rounded-md p-6 shadow space-y-6">
                    <div className="relative">
                        <div className="aspect-video bg-muted"></div>
                        <h2 className="mt-3">
                            <Link href="#">
                                記事タイトル
                                <span  className="absolute inset-0"></span>
                            </Link>
                        </h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <Button className="px-3 py-1"
                            onClick={() => {
                                alert('Hello');
                                console.log("hello")
                            }}>tagA</Button>
                </div>

                <div className="border-2 rounded-md p-5 shadow">a</div>
                <div className="border-2 rounded-md p-5 shadow">a</div>
                <div className="border-2 rounded-md p-5 shadow">a</div>
            </div>
        </Section>
)
    ;
}

export default Features;