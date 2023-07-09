import React from 'react'

const FareDetails = ({selectedBus,selectedSeats}) => {
  return (
    <div >
        <h2 className="font-bold text-[large]">Fare Details</h2>
        <div className="flex justify-between border shadow p-4 rounded">
          <p>Total Base Fare</p>
          <h2 className="font-semibold">
            ₹ {selectedSeats.length * selectedBus.Fare}
          </h2>
        </div>
        <div className="flex justify-between border shadow p-4 rounded">
          <p>Tax & fees</p>
          <h2 className="font-semibold">₹ 150</h2>
        </div>
        <div className="flex justify-between border shadow p-4 rounded">
          <p>Offer Applid</p>
          <h2 className="font-semibold">₹ 50</h2>
        </div>
        <hr />
        <div className="flex justify-between  border shadow p-4 rounded">
          <p>Final Price</p>
          <h2 className="font-semibold">
            ₹{selectedSeats.length * selectedBus.Fare + 150 - 50}
          </h2>
        </div>
        {/* <button className="bg-[rgba(233,115,72,0.961)] h-[45px] text-[white] rounded-[5px]">
          Process To Payment
        </button> */}
      </div>
  )
}

export default FareDetails