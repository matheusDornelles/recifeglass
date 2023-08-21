import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Nossos serviços</h2>
          <p>
            Nossa loja não apenas vende produtos, mas também oferece uma ampla gama de serviços especializados que podem ser cruciais para atender às necessidades variadas dos clientes.
            Além de fornecer uma variedade de produtos de vidro, A Recife Glass se destaca pelos seus serviços personalizados, que vão desde o corte preciso de vidro até a 
            instalação profissional
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
