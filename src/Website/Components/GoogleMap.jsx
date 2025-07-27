const GoogleMap = ({ location = "Kirinyaga Rd, Nairobi County, Kenya" }) => {
  // This uses Google's basic embed - no API key needed but limited customization
  const mapSrc = `https://maps.google.com/maps?width=100%25&height=400&hl=en&q=${encodeURIComponent(location)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;
  
  return (
    <div className="w-full h-full">
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src={mapSrc}
        title="Google Map"
      />
    </div>
  );
};

export default GoogleMap;