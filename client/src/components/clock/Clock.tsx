import { useState } from 'react';
import './Clock.css';

interface ClockProps {
  time: Date;
}

/*
Credit: https://github.com/TommmyKelly/react-clock
*/

const Clock = ({ time }: ClockProps) => {
  console.log(`time: ${time}`);

  const hourRatio = (time.getHours() % 12) / 12;
  const secondRatio = time.getSeconds() / 60;
  const minuteRatio = time.getMinutes() / 60;

  return (
    <div className='clock'>
      <>
        <div
          className='hand hour'
          style={{
            transform: `translate(-50%) rotate(${
              hourRatio * 360
            }deg)`,
          }}
        />
        <div
          className='hand minute'
          style={{
            transform: `translate(-50%) rotate(${
              minuteRatio * 360
            }deg)`,
          }}
        />
        <div
          className='hand second'
          style={{
            transform: `translate(-50%) rotate(${
              secondRatio * 360
            }deg)`,
          }}
        />
        {Array(12)
          .fill(0)
          .map((_, i: number) => {
            return (
              <div className={`number number-${i + 1}`}>
                <div>{i + 1}</div>
              </div>
            );
          })}
      </>
    </div>
  );
};

export default Clock;
