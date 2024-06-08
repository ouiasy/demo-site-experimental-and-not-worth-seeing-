import React from 'react';
import {Button} from "@/components/ui/button";

function Hero() {
    return (
        <div className="py-40 flex items-center">
            <div className="container">
                <h1 className="font-bold text-4xl lg:text-6xl mb-5">Hero</h1>
                {/*shadcn/uiのtext-muted-foregroundでテキストの色を薄くできる*/}
                {/*ダークモードに対応しているのもポイント*/}
                <p className="text-muted-foreground mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae culpa harum hic in
                    incidunt iste, mollitia possimus quaerat sed, suscipit temporibus, totam ut vel veniam! Asperiores
                    atque expedita repellendus.
                </p>
                <Button>
                    お問い合わせ
                </Button>
            </div>
        </div>
    );
}

export default Hero;