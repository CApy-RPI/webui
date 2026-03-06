import { useState } from 'react';
import DarkModeToggle from '../components/DarkModeToggle.tsx';
import LoginPopup from '../components/LoginPopup.tsx';

export default function Testing() {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: 'black' }}>
                <h1>[dev] Testing</h1>
                <p>This page is for misc features that have been developed, but not placed.</p>
                <DarkModeToggle />
            </div>
        </>
    );
}
