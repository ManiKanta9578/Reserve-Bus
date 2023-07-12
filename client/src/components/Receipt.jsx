import React, { useEffect, useState } from "react";
import axios from "axios";
import success from "../Images/success.png";
import { PDFDocument, StandardFonts} from "pdf-lib";


const ReceiptPage = () => {
  const [latestReceipt, setLatestReceipt] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  

  useEffect(() => {
    // Fetch receipt data from the server
    axios
      .get(`https://reserve-bus-23fn.onrender.com/api/receipt`)
      .then((res) => {
        const receiptData = res.data;
        // Sort the receipt data in descending order based on creation timestamp
        receiptData.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        // Retrieve the latest receipt
        const latestReceipt = receiptData[0];
        setLatestReceipt(latestReceipt);
        // Set loading to false after 3 seconds
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const handleDownload = async () => {
    if (!latestReceipt) {
      return;
    }
  
    try {
      const {
        _id,
        passengerDetails,
        contactDetails,
        selectedBus,
        selectedSeats,
        selectedDate,
      } = latestReceipt;
  
      // Create a new PDF document
      const pdfDoc = await PDFDocument.create();
  
      // Set up the font and font size
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const fontSize = 12;
  
      // Create a new page in the PDF document
      const page = pdfDoc.addPage();
  
      // Set the page title
      page.drawText("Ticket Details", { x: 50, y: 700, size: 18, font });
  
      // Write the ticket information
      page.drawText(`Ticket ID: ${_id}`, { x: 50, y: 650, size: fontSize, font });
  
      // Write passenger details
      page.drawText("Passenger Details:", { x: 50, y: 600, size: fontSize, font });
      let y = 570;
      passengerDetails.forEach((passenger, index) => {
        const nameKey = `name-${index}`;
        const ageKey = `age-${index}`;
        const genderKey = `gender-${index}`;
        const seatNumber = selectedSeats[index];
  
        page.drawText(`Seat No: ${seatNumber}`, { x: 70, y, size: fontSize, font });
        page.drawText(`Name: ${passenger[nameKey]}`, { x: 70, y: y - 20, size: fontSize, font });
        page.drawText(`Gender: ${passenger[genderKey]}`, { x: 70, y: y - 40, size: fontSize, font });
        page.drawText(`Age: ${passenger[ageKey]} yrs`, { x: 70, y: y - 60, size: fontSize, font });
  
        y -= 80;
      });
  
      // Write contact details
      page.drawText("Contact Details:", { x: 300, y: 600, size: fontSize, font });
      page.drawText(`Email: ${contactDetails.email}`, { x: 320, y: 570, size: fontSize, font });
      page.drawText(`Mobile: ${contactDetails.mobile}`, { x: 320, y: 550, size: fontSize, font });
  
      // Write bus details
      page.drawText("Bus Details:", { x: 50, y: y - 40, size: fontSize, font });
      page.drawText(`Bus Name: ${selectedBus.BusName}`, { x: 70, y: y - 70, size: fontSize, font });
      page.drawText(`Source: ${selectedBus.Source}`, { x: 70, y: y - 90, size: fontSize, font });
      page.drawText(`Destination: ${selectedBus.Destination}`, { x: 70, y: y - 110, size: fontSize, font });
  
      // Write date details
      page.drawText("Date Details:", { x: 300, y: y - 40, size: fontSize, font });
      page.drawText(`Date of Jouney: ${selectedDate}`, { x: 320, y: y - 70, size: fontSize, font });
  
      // Generate the PDF bytes
      const pdfBytes = await pdfDoc.save();
  
      // Create a blob from the PDF bytes
      const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });
  
      // Create a download link and simulate a click to initiate the download
      const downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(pdfBlob);
      downloadLink.download = "ticket.pdf";
      downloadLink.click();
    } catch (error) {
      console.error("Error generating the ticket:", error);
    }
  };
  

 
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-indigo-500 flex justify-evenly items-center rounded">
          <div
            className=" ml-3 inline-block h-6 w-6 animate-spin rounded-full border-4 border-white border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          ></div>
          <p className="text-white p-3">Please wait, Booking Confirming...</p>
        </div>
      </div>
    );
  }

  if (!latestReceipt) {
    return <div>No receipt data available</div>;
  }

  const { _id, passengerDetails, contactDetails, selectedBus, selectedSeats, selectedDate } =
    latestReceipt;
  return (
    <>
      <div className="flex items-center justify-center my-12 sm:my-7">
        <div className="flex flex-col items-center justify-center shadow-md w-full md:max-w-xl rounded-[10px]">
          <div className="mt-4">
            <img src={success} alt="success" width="50px" />
          </div>
          <div className="text-center mt-4 sm:text-left">
            <h1 className="text-2xl md:text-2xl font-semibold">Booking has been confirmed</h1>
          </div>
          {/* --------------------------------- */}
          <table className="text-sm m-3">
            <tbody>
              <tr>
                <td>Ticket ID :</td>
                <td>{_id}</td>
              </tr>
              <tr>
                <td>Payment ID :</td>
                <td>
                  {Math.floor(Math.random() * 10000)}-
                  {Math.floor(Math.random() * 10000)}N5-MN
                  {Math.floor(Math.random() * 10000)}
                </td>
              </tr>
              <tr>
                <td>Passenger Details :</td>
                <td>
                  <ul>
                    {passengerDetails.map((passenger, index) => {
                      const nameKey = `name-${index}`;
                      const ageKey = `age-${index}`;
                      const genderKey = `gender-${index}`;
                      const seatNumber = selectedSeats[index];

                      return (
                        <li key={index}>
                          Seat No: {seatNumber}- {passenger[nameKey]},{" "}
                          {passenger[genderKey]}, {passenger[ageKey]}yrs
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Contact Details :</td>
                <td>
                  {contactDetails.email}, {contactDetails.mobile}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex mx-2 my-2 border-2 border-gray-200 p-4 rounded-md justify-between">
            <section className="flex flex-col gap-2 justify-between">
              <div className="flex gap-3">
                <h1 className="text-xl font-semibold">{selectedBus.BusName}</h1>
                <div className="flex gap-1">
                  <p className="bg-green-500 text-sm rounded-md px-1 self-center pb-0 text-white">
                    ⭐ 4.2
                  </p>
                  <h1 className="text-gray-400 self-center text-sm">ratings</h1>
                </div>
              </div>
              
              <p className="text-slate-600"> AC Sleeper(2+1) | Seats left
                    </p>
                    <h3> {selectedDate} </h3>

              <div className="flex gap-4">
                <h1 className="sm:text-lg text-sm font-normal self-center text-gray-700">
                  {`${selectedBus.DepartureTime}`}
                </h1>
                
                ---
                <h1 className="sm:text-sm text-xs font-normal self-center text-gray-500">
                  7h 58m
                </h1>
                ---
                <h1 className="sm:text-lg text-sm font-normal self-center text-gray-700">
                  {`${selectedBus.ArrivalTime}` } 
                </h1>
              </div>
              <div className="flex justify-between">
                <p className="sm:text-lg text-xs font-semibold">
                  {selectedBus.Source}
                </p>
                <p className="sm:text-lg text-xs font-semibold">
                  {selectedBus.Destination}
                </p>
              </div>
            </section>
          </div>
          <section className="my-3">
            <a
              href="/"
              className="text-white mr-2 my-2  py-1 rounded-3xl shadow-lg hover:bg-[#fc2e00] bg-[#FF5733] sm:text-lg text-sm px-4 text-center"
            >
              Return Home
            </a>
            <button className="text-white my-2  py-1 rounded-3xl shadow-lg hover:bg-[#067519] bg-[#0f9b3e] sm:text-lg text-sm px-4 text-center" onClick={handleDownload}>Download Ticket</button>
          </section>
        </div>
      </div>
    </>
  );
};

export default ReceiptPage;
