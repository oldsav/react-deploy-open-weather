export default class wetherService {
  async getResource(url) {
    const res = await fetch(url);
    return await res.json();
  }
  getWeather = async (lat,lon) => {
    const res = await this.getResource(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=12fd4da75395cb6056f98eb17ae910b5`
    );
    return res;
  };
}
