import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Form,
  Input,
  Button,
  Select,
  Upload,
  Modal,
  message,
  DatePicker,
} from 'antd';
import { createEventApplyAsync } from '../../store/event/action';
import FormItem from 'antd/lib/form/FormItem';
import { Progress } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function Event({
  eventId,
  eventLogo,
  eventName,
  eventDescription,
  eventStartDate,
  eventEndDate,
  eventGoal,
  eventTotalParticipants,
  eventParticipants,
}) {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(createEventApplyAsync(eventId));
  };

  return (
    <section className="abtSecHolder container pt-xl-24 pb-xl-12 pt-lg-20 pb-lg-10 pt-md-16 pb-md-8 pt-10 pb-5">
      <div className="row">
        <div className="col-12 col-lg-6 pt-xl-12 pt-lg-8">
          <h2 className="playfair fwEbold position-relative mb-7 pb-5">
            <strong className="d-block">{eventName}</strong>
          </h2>
          <p className="pr-xl-16 pr-lg-10 mb-lg-0 mb-6">{eventDescription}</p>
          <div className="row">
            <div className="col-sm-6">
              <p className="pt-5">
                <span className="font-weight-bold">Start Date</span> :{' '}
                {eventStartDate}
              </p>
            </div>
            <div className="col-sm-6">
              <p className="pt-5">
                <span className="font-weight-bold">End Date</span> :{' '}
                {eventEndDate}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <p>
                <span className="font-weight-bold">Event goal</span> :{' '}
                {eventGoal}
              </p>
            </div>
            <div className="col-sm-6">
              <p>
                <span className="font-weight-bold">Total Participants</span> :{' '}
                {eventTotalParticipants}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <Progress percent={(eventParticipants.length / 10) * 100} />
            </div>
            <div className="col-sm-6">
              {/* <p><span className="font-weight-bold">Participants </span> : {eventParticipants}</p> */}
              <Form {...layout} name="control-hooks" onFinish={onFinish}>
                <FormItem name="eventIdentification">
                  <input value={eventId} hidden />
                </FormItem>
                <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <img
            src={`http://localhost:8000/${eventLogo}`}
            alt="image description"
            className="img-fluid"
          />
        </div>
      </div>
    </section>
  );
}

export default Event;
