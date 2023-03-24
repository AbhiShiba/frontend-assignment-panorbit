import React, { useContext } from "react";
import { UserInfoContext } from "../../../../App";

import "./ProfileInfo.css";
import mapImage from '../../../../Utils/images/map-img.png'

export function ProfileInfo() {
  const userData = useContext(UserInfoContext);
  const info = userData.storeUserInfo[0];


  return (
    <div className="profile-info-container">
      <div className="section-container">
        <section className="profile-info-1">
          <div className="user-info-content">
            <div className="user-name-image">
              <img src={info.profilepicture} alt={info.name} />
              <h3>{info.name}</h3>
            </div>
            <div className="username-email">
                <section className="user-key">
                    <p>Username</p>
                    <p>e-mail</p>
                    <p>Phone</p>
                    <p>Website</p>
                </section>
                <section className="user-separate">
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                </section>
                <section className="user-value">
                    <p>{info.username}</p>
                    <p>{info.email}</p>
                    <p>{info.phone}</p>
                    <p>{info.website}</p>
                </section>
            </div>
            <hr />
            <div className="company-section">
                <h4>Company</h4>
                <div className="company-details">
                    <section className="company-key">
                    <p>Name</p>
                    <p>Catchphrase</p>
                    <p>bs</p>
                    </section>
                    <section className="company-separate">
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                    </section>
                    <section className="company-value">
                    <p>{info.company.name}</p>
                    <p>{info.company.catchPhrase}</p>
                    <p>{info.company.bs}</p>
                    </section>
                </div>
            </div>
          </div>
        </section>
        <hr />
        <section className="profile-info-2">
          <h3>Address</h3>
          <div className="address-info">
                <section className="user-key">
                    <p>Street</p>
                    <p>Suite</p>
                    <p>City</p>
                    <p>Zipcode</p>
                </section>
                <section className="user-separate">
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                </section>
                <section className="user-value">
                    <p>{info.address.street}</p>
                    <p>{info.address.suite}</p>
                    <p>{info.address.city}</p>
                    <p>{info.address.zipcode}</p>
                </section>
            </div>
            <div className="map-section">
                <img src={mapImage} alt="map" />
                <div className="location-section">
                    <span><span className="location-co">Lat:</span> {info.address.geo.lat}</span>
                    <span><span className="location-co">Long:</span> {info.address.geo.lng}</span>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
}
