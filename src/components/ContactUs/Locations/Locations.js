import style from "./Locations.module.css";

const Locations = () => {
  const loactionData = [
    // {
    //   location: "Wanaparthy (India)",
    //   address:
    //     "Door No: 2-27-163, Gandhi Nagar, Near Jammichettu, Wanaparthy, Telangana-509103, India",
    //   mobile: "+91 8790946714",
    //   email: "info@vrpigroup.com",
    // },
    {
      location: "Hyderabad (India)",
      address:
        "7-1-212/A/13, Shivbagh Colony, Ameerpet, Hyderabad, Telangana, India- 500016",
      mobile: "+91 8790946714",
      email: "info@vrpigroup.com",
    },
    {
      location: "New Jersey (USA)",
      address:
        "5 Greentree Center, Door No: 525, Route 73, STE 104, Marlton, New Jersey, USA 08053",
      mobile: "(+1)646-741-8264",
      email: "info@vrpigroup.com",
    },
  ];

  return (
    <div className={style.location}>
      <h1>Our Branch Locations</h1>
      <div className={style.locations}>
        {loactionData.map((location) => (
          <div className={style.locationCard}>
            <div className={style.contentLine}>
              <img
                src={require("../../../assets/footer/Location.png")}
                alt=""
              />
              <h2>{location.location}</h2>
            </div>
            <div className={style.contentLine}>
              <p>{location.address}</p>
            </div>
            <div className={style.contentLine}>
              <img src={require("../../../assets/footer/Call.png")} alt="" />

              <p>{location.mobile}</p>
            </div>
            <div className={style.contentLine}>
              <img src={require("../../../assets/footer/Email.png")} alt="" />

              <p>{location.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;
