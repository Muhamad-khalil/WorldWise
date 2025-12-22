import PropTypes from "prop-types";
import CityItem from "./CityItem";
import Spinner from "./Spinner";
import Message from "./Message";
import styles from "./CityList.module.css";

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="Add you City by clicking on a city on a map" />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      cityName: PropTypes.string.isRequired,
      country: PropTypes.string,
      emoji: PropTypes.string,
      date: PropTypes.string,
      notes: PropTypes.string,
      position: PropTypes.shape({
        lat: PropTypes.number,
        lng: PropTypes.number,
      }),
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default CityList;
