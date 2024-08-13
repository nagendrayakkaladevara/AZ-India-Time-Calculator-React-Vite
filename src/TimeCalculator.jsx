import React, { useState } from 'react';
import moment from 'moment-timezone';

const TimeCalculator = () => {
    const [arizonaTime, setArizonaTime] = useState('');
    const [indianTime, setIndianTime] = useState('');

    const handleArizonaChange = (e) => {
        setArizonaTime(e.target.value);
        const arizonaDate = moment.tz(e.target.value, 'America/Phoenix');
        const indiaDate = arizonaDate.clone().tz('Asia/Kolkata');
        setIndianTime(indiaDate.format('YYYY-MM-DD HH:mm'));
    };

    const handleIndianChange = (e) => {
        setIndianTime(e.target.value);
        const indiaDate = moment.tz(e.target.value, 'Asia/Kolkata');
        const arizonaDate = indiaDate.clone().tz('America/Phoenix');
        setArizonaTime(arizonaDate.format('YYYY-MM-DD HH:mm'));
    };

    return (
        <div className='section'>
            <div>

                <p className='bungee-tint-regular' style={{ fontSize: "15px" }}>Arizona Time</p>
                <input
                    style={{ padding: "7px", borderRadius: "5px", border: "1px solid #D1E9F6", fontSize: '15px' }}
                    type="datetime-local"
                    value={arizonaTime}
                    onChange={handleArizonaChange}
                />

            </div>
            <div>

                <p className='bungee-tint-regular' style={{ fontSize: "15px" }}>Indian Time</p>
                <input
                    style={{ padding: "7px", borderRadius: "5px", border: "1px solid #D1E9F6", fontSize: '15px' }}
                    type="datetime-local"
                    value={indianTime}
                    onChange={handleIndianChange}
                />

            </div>
        </div>
    );
};

export default TimeCalculator;
