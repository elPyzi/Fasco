import '../../../assets/styles/style-components/Timer.scss';
import { useState, useEffect } from 'react';

const Timer = () => {
    const defaultSec: number = 191130; // начальное время в сек
    const [totalSeconds, setTotalSeconds] = useState<number>(defaultSec);

    useEffect(() => {
        const key = setInterval(() => {
            setTotalSeconds((prev) => Math.max(prev - 1, 0));
        }, 1000);
        return () => {
            clearInterval(key);
        };
    }, []);

    const formatTime = (time: number): string =>
        time < 10 ? `0${time}` : `${time}`;

    const calculateTime = (seconds: number) => {
        const days = Math.floor(seconds / (24 * 60 * 60));
        const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((seconds % (60 * 60)) / 60);
        const secs = seconds % 60;
        return { days, hours, minutes, secs };
    };

    const { days, hours, minutes, secs } = calculateTime(totalSeconds);

    return (
        <>
            <h3 className="timer__heading">Hurry, Before It’s Too Late!</h3>
            <div className="timer">
                <div className="timer-item">{formatTime(days)}</div>
                <div className="timer-item">{formatTime(hours)}</div>
                <div className="timer-item">{formatTime(minutes)}</div>
                <div className="timer-item">{formatTime(secs)}</div>
                <span className="timer-label">Days</span>
                <span className="timer-label">Hr</span>
                <span className="timer-label">Mins</span>
                <span className="timer-label">Sec</span>
            </div>
        </>
    );
};

export default Timer;
