import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue = null) {
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key);
        if (storedValue != null) {
            try {
                return JSON.parse(storedValue);
            } catch (error) {
                return storedValue;
            }
        }
        return initialValue;
    });

    const setStoredValue = (newValue) => {
        try {
            const valueToStore = newValue instanceof Function ? newValue(value) : newValue;
            setValue(valueToStore);
            localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(`Error setting localStorage key "${key}":`, error);
        }
    };

    useEffect(() => {
        const handleStorageChange = (e) => {
            if (e.key === key) {
                try {
                    setValue(e.newValue ? JSON.parse(e.newValue) : null);
                } catch (error) {
                    setValue(e.newValue);
                }
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [key]);

    return [value, setStoredValue];
}

export default useLocalStorage;
