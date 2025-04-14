import { mount } from "marketing/MarketingApp";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

const MarketingApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default MarketingApp;
