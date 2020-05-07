import React from "react";
import { Link, graphql } from "gatsby";
import Title from "../Globals/Title";
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
          <Title title="our story"></Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Aliquip enim aute cupidatat ullamco sint sunt irure esse consequat
              magna est quis ad sint. Elit consectetur aliqua non eu anim
              aliquip quis sunt officia mollit. In magna veniam amet enim sint
              eiusmod velit esse sint est. Cillum cillum non anim ut enim
              deserunt. Consectetur sint do ipsum eiusmod anim. Consectetur
              deserunt exercitation adipisicing laborum consequat tempor duis id
              excepteur minim velit proident aute incididunt.Pariatur veniam
              velit amet Lorem ullamco nulla ad ullamco labore id fugiat dolor
              ea. Nulla qui aliquip ea mollit velit do est qui non laboris
              aliquip Lorem aliquip. Quis eu incididunt aute est aute eu
              consectetur exercitation. Eiusmod consectetur ut ut occaecat
              minim. Fugiat reprehenderit eiusmod dolor esse reprehenderit sit
              anim reprehenderit voluptate Lorem eiusmod ut minim sit.
              Incididunt veniam sunt laboris tempor laborum culpa Lorem aute
              sint ex. Ipsum esse sit adipisicing deserunt dolore. Mollit nulla
              occaecat aute incididunt officia sint et reprehenderit ad amet ut
              pariatur veniam reprehenderit. Ullamco excepteur pariatur
              consequat in. Qui do cupidatat anim sunt ipsum excepteur eiusmod
              esse mollit adipisicing minim Lorem aliqua. Mollit duis in nostrud
              sunt sint Lorem commodo eiusmod velit consectetur Lorem duis. In
              velit sit exercitation laboris incididunt ex proident ullamco
              adipisicing mollit commodo. Velit officia velit amet laboris dolor
              ad ullamco ut commodo ex nisi occaecat. Eu excepteur incididunt do
              qui nulla fugiat laborum in eu labore. Pariatur minim laboris
              irure minim laboris laboris.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
