export default async (getDataCallback: Function) => {
  const location = window.navigator && window.navigator.geolocation;

  if (location) {
    await location.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        getDataCallback(lon, lat);
      },
      (error) => {
        console.log('not provided location.');
        getDataCallback();
      },
    );
  }
};
