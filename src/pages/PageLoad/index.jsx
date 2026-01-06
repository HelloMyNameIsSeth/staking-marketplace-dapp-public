import React, { useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
export default function PageLoad(props) {
  const [loading, setLoading] = React.useState(true);
  const isMobile = useMediaQuery("(max-width:900px)");
  const { link } = props;

  useEffect(() => {
    
    if (!loading) {
      // var iframe = document.getElementById("your_project");
      // var innerDoc = iframe.contentDocument
      //   ? iframe.contentDocument
      //   : iframe.contentWindow.document;
      //document.getElementsByTagName("header")[0].style.display="none"
    }
  }, [loading]);

  return (
    <div>
      {loading ? (
        <div
          style={{
            width: "100%",
            height: "89vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        ""
      )}
      <iframe
        id="your_project"
        src={link}
        sandbox="allow-forms
        allow-pointer-lock
        allow-popups
        allow-same-origin
        allow-scripts
        allow-top-navigation"
        referrerPolicy="origin
        origin-when-cross-origin
        same-origin
        strict-origin-when-cross-origin
        "
        onLoad={() => setLoading(false)}
        style={{
          width: "100%",
          borderWidth: "0px",
          height: "89vh",
          backgroundColor: "black",
          display: loading ? "none" : "block",
        }}
      ></iframe>
    </div>
  );
}
