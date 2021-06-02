import { flightData } from "../data";

export const getDepartureCity = () => {
  let departureCity = flightData.map((flight) => flight.departure);
  return Array.from(new Set(departureCity));
};

export const getArrivalCity = () => {
  let arrivalCity = flightData.map((flight) => flight.arrival);
  return Array.from(new Set(arrivalCity));
};

export const getFilteredSearchData = (departure, arrival, minimum, maximum) => {
  let searchFlightData = flightData
    .filter((flight) => {
      return flight.departure === departure;
    })
    .filter((flight) => {
      return flight.arrival === arrival;
    })
    .filter((flight) => {
      if (maximum === 0 && minimum !== 0) {
        return parseInt(flight.cost) >= minimum;
      }
      else if(minimum === 0 && maximum !== 0) {
        return parseInt(flight.cost) <= maximum;
      }else{
        return minimum !== 0 && maximum !== 0
        ? parseInt(flight.cost) >= minimum && parseInt(flight.cost) <= maximum
        : flight;
      }
    });
  return searchFlightData;
};

export const getFilteredRangeData = (minimum, maximum) => {
  let rangeFlightData = flightData.filter((flight) => {
    if (maximum === 0 && minimum !== 0) {
      return parseInt(flight.cost) >= minimum;
    }
    else if(minimum === 0 && maximum !== 0) {
      return parseInt(flight.cost) <= maximum;
    }else{
      return minimum !== 0 && maximum !== 0
      ? parseInt(flight.cost) >= minimum && parseInt(flight.cost) <= maximum
      : flight;
    }
  });
  return rangeFlightData;
};

export const handleFilterValidation = (departure, arrival, date) => {
  if(date === '') return "Please enter valid Journey date";
  if(departure === arrival) return "Departure and Arrival can not be same";
  return true;
};
