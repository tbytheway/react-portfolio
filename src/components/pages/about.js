import React from "react";
import profilePicture from "../../../static/assets/images/bio/headshot.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
      A year ago, if you would have told me that I could create a site like the one you are reading this on, I would have doubted you. 
      Fast forward to today and I am creating things I never thought I would.  Seeing things change and appear after a few keystrokes(okay a lot of keystrokes) is fun and amazing.
      I have a lot of years in the IT industry and I can't tell you how many times I wished I could write code.  I can finally say that I can.
      I didn't get my first email address till I attended college.  I got my first IT job because I worked in the mailroom and on my mailruns
      I would hear people complaining about printer problems or other computer issues so I would fix them, because I liked to.  So the IT dept came 
      to me and offered me a position.  I had few PC support positions until one day my boss asked if I wanted to be over the phone system.  I'd barely even seen
      the phone system, but I said yes.  We eventually upgraded to a Cisco phone system which was absolutly nothing like our old system.
      Learning new things is not new to me, but it's always been along my career path.  Learning to code was new and a complete reboot of my career.
      I look forward to what adventures it brings.
      </div>
    </div>
  );
}
