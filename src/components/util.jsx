import { flightData } from "../data";

export const getDepartureCity = () => {
    let departureCity = flightData.map((flight)=> flight.departure);
    return Array.from(new Set(departureCity));
}

export const getArrivalCity = () => {
    let arrivalCity = flightData.map((flight)=> flight.arrival);
    return Array.from(new Set(arrivalCity));
}

export const getFilteredSearchData = (departure, arrival, min, max) =>{
    let searchFlightData = flightData
      .filter((flight) => {
        return flight.departure === departure;
      })
      .filter((flight) => {
        return flight.arrival === arrival;
      })
      .filter((flight) => {
        return (min!== 0 && max !== 0) ? parseInt(flight.cost) >= min && parseInt(flight.cost) <= max : flight;
      });
      return searchFlightData;
}

export const handleFilterValidation = (departure, arrival, min, max, date) =>{
    if(date === '') return "Please enter valid Journey date";
    if(departure === arrival) return "Departure and Arrival can not be same";
    return true;

}