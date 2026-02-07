import { useEffect, useState } from "react";

export function useCollapseSidebar(
    key: string,
    defaultValue: boolean
): [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
] {
    const [value, setValue] = useState<boolean>(() => {
        if (typeof window === "undefined") {
            return defaultValue;
        }

        const stored = localStorage.getItem(key);
        return stored !== null ? stored === "true" : defaultValue;
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem(key, String(value));
        }
    }, [key, value]);

    return [value, setValue];
}