import * as React from "react";
const GoogleMapFrame = ({ mapUrl, className }) => {
  console.log(mapUrl);
  const iframe = `<iframe 
      width="100%" height="600" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=-4.345037%2C15.289549&amp;q=6%20tabora%20Gombe%2C%20Kinshasa%2C%20DRC&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" 
                  frameborder="0" 
                  scrolling="no" 
                  marginheight="0" marginwidth="0"></iframe>`;
  return (
    <div
      dangerouslySetInnerHTML={{ __html: mapUrl ? iframe : "" }}
      className={className}
    />
  );
};

export default GoogleMapFrame;
