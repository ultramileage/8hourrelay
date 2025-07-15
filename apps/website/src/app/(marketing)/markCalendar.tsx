import { siteConfig } from '@/config/site';

export default function MarkCalendarSection() {
  return (
    <section className="mark-calendar">
      <div className="landing-section-title">Mark Your Calendar</div>
      <section className="content-container large container">
        <div className="event-info-item entry-fee">
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
        <div className="event-info-item">
          <div className="label">When</div>

          <div className="value">
            8:00am – 4:00pm
            <br />
            Sep. 13, 2025
          </div>
        </div>
        <div className="event-info-item">
          <div className="label">Where</div>
          <div className="value">
            Swangard Stadium
            <br />
            Burnaby, British Columbia
          </div>
          <div className="notes"></div>
        </div>
        <div className="event-info-item">
          <div className="label">Registration Deadline</div>
          <div className="value">Sep. 05, 2025</div>
        </div>
      </section>
    </section>
  );
}
