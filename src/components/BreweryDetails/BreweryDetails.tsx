import './BreweryDetails.scss';

function BreweryDetails({selectedBrewery}) {
  return (
    <div className="brewery-details-container">
      <h1 className="brewery-title">{selectedBrewery.name}</h1>
      <div className="brewery-contact">
        <a>6017 Roadrunner Spur Dr., Canyon Great, Tx, 78610</a>
        <a>(210)835-8687</a>
        <a>clickThisAwesomeWebsite.com</a>
      </div>
      <div className="map-container">(some sort of map)</div>
    </div>
  )
}

export default BreweryDetails
