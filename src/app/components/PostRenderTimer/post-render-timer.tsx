"use client";

import { useEffect, useState } from "react";

export default function PostRenderTimer() {
    const [renderTime, setRenderTime] = useState<number>(0);

    useEffect(() => {
        const startTime = performance.now();

        const observer = new MutationObserver(() => {
            const element = document.querySelector("#post-title");
            if (element) {
                const endTime = performance.now();
                const elapsed = endTime - startTime;
                setRenderTime(elapsed);
                observer.disconnect();
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => observer.disconnect();
    }, []);

    return (
        renderTime > 0 && (
            <div className="absolute bottom-2 right-4 text-sm text-gray-500">
                <strong>Tempo de renderização: {renderTime.toFixed(2)} ms</strong>
            </div>
        )
    );
}
