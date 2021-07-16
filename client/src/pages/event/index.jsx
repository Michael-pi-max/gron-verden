import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShopHeader from '../shop/shop-header';
import ShopBanner from '../shop/shop-banner';
import Footer from '../../components/footer';
import EventCreate from './EventCreate';
import Event from './Event';
import { fetchEventsAsync } from '../../store/event/action';
import { Spin } from 'antd';

function EventSection(props) {
  const dispatch = useDispatch();

  const { events, page, limit, total, fetchEventsLoading } = useSelector(
    (state) => state.event
  );

  useEffect(() => {
    dispatch(fetchEventsAsync(page, limit));
    // dispatch(fetchUserAsync());
  }, []);

  if (fetchEventsLoading || !events) {
    return (
      <>
        <div
          style={{
            width: '100%',
            height: '200px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Spin tip="Loadin events..." />
        </div>
      </>
    );
  }
  console.log(events);

  return (
    <div>
      <ShopHeader />
      <ShopBanner bannerTitle="Event" />
      <EventCreate />
      {events.map((e) => {
        return (
          <Event
            eventId={e._id}
            eventName={e.eventName}
            eventLogo={e.eventLogo}
            eventDescription={e.eventDescription}
            eventStartDate={e.eventStartDate}
            eventEndDate={e.eventEndDate}
            eventGoal={e.eventGoal}
            eventTotalParticipants={e.eventTotalParticipants}
            eventParticipants={e.eventParticipants}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default EventSection;
