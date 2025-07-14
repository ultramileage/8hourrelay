'use client';

import Link from 'next/link';
import { Suspense, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

import Loading from '@/components/Loading';
import Navbar from '@/components/Navbar';
import { siteConfig } from '@/config/site';
import ShiftingCountdown from './_components/CountDownComponent';
import HeroImage from './_components/HeroImage';

export default function HeroSection() {
  // intersection observer to handle navbar change background
  const { ref, inView } = useInView({ threshold: 0.3 });
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <>
      <div className="w-full">
        <Navbar changeBg={!inView} />
      </div>
      <div className="hero-section relative" ref={ref}>
        <HeroImage />
        <div className="hero-text content-container small relative z-10">
          <h1>{siteConfig.event.time}</h1>
          <div className="countdown">count down to the event</div>
          <Suspense fallback={<Loading />}>
            <ShiftingCountdown />
            {/* <TimeCard /> */}
          </Suspense>

          <button
            className="btn btn-primary btn-large btn-register"
            type="button"
            onClick={openDialog}
          >
            Register Now
          </button>
          <dialog ref={dialogRef} className="register-dialog">
            <div className="dialog-content">
               <div className="event-info-item entry-fee on-popup">
                <div className="label">Team Fee</div>
                  <div className="fee-container">
                    <div className="fee1">
                      <div className="category">ULTRA</div>
                      <div className="fee">$320</div>
                    </div>
                    <div className="fee2">
                      <div className="category">MASTER</div>
                      <div className="fee">$450 <span className="slash">/</span>$550</div>
                      <div className="sizing">
                        <div>&lt;= 12</div>
                        <div>&gt; 12</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="payment-info">
                <div className="payment-info-container">
                  <div>1. eTransfer team fee to <b><a href="mailto:8hourrelay@gmail.com" target="_blank">8hourrelay@gmail.com</a></b></div>
                  <div> 2. Fills out the <b><a href="https://forms.gle/R8fLWbHsg1WCK7Sg9" target="_blank">Team Registration Form</a></b></div>
                  <div>3. Team member fills out the <b><a href="https://forms.gle/Ngbmw71hi3x8cqqBA" target="_blank">Team Member Registration Form</a></b></div>
                </div>
                 <button
                  className="btn btn-secondary btn-close"
                  type="button"
                  onClick={closeDialog}
                >
                 X close
                </button>
                </div>
               
            </div>
          </dialog>
        </div>
      </div>
      {!inView && (
        <div className="nav-link top transition-opacity duration-900">
          <Link href="#root">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 hover:animate-bounce hover:delay-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
              />
            </svg>
          </Link>
        </div>
      )}
    </>
  );
}
