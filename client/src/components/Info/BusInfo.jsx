import React from 'react'
import { useSelector } from 'react-redux'

const BusInfo = ({selectedBus}) => {
  const selectedDate = useSelector(state => state.selectedDate);
  return (
    <div className="col-span-2 border shadow rounded bg-white">
        <div className="flex flex-col justify-between p-5 ">
          <div className="flex flex-col gap-2.5">
            <div className="flex gap-2.5">
              <h3 className="font-bold text-[large]">{selectedBus.BusName}</h3>
              <p
                style={{
                  backgroundColor: "green",
                  borderRadius: "10px",
                  padding: "2px",
                  color: "white",
                }}
              >
                ⭐4.5
              </p>
              <p> Rating</p>
            </div>
            <div className="flex gap-2.5">
              <p>AC Sleeper(2+1)</p>
            </div>
            <div className="flex gap-2.5">
              <p>{`${selectedDate}, ${selectedBus.DepartureTime}  `}</p>
              <p> --- 07 hrs 58 min ---</p>
              <p> {`${selectedBus.ArrivalTime}`} </p>
            </div>
            <div className="flex gap-3">
              <p>{selectedBus.Source}</p>
              <p>To</p>
              <p>{selectedBus.Destination}</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default BusInfo