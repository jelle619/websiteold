// import { useState } from 'react';
// import Head from 'next/head';
// import Link from 'next/link';
// import Image from 'next/image';

import Layout from "../../components/layout";
import Text from "../../components/text";
import Gallary from "../../components/gallery";
import Image from "next/image";

import Data from "../../public/data/games.json";

function jsonToArray(data, key, key2) {
  var array = [];
  for (var value in data[key]) {
    array.push(Data[key][value][key2])
  }
  console.log(array);
  return array;
}


export default function Books() {
  console.log(Data["wii"]);
  return (
    <Layout>
      {/* <Hero
        text="Welcome, dragon!"
        src="/images/comissions/drawing_551_commission_blue_fire.png"
        height="calc(100% / 3)"
      /> */}
      <Text>
        <h1>Wii</h1>
        <Gallary>
          {
            jsonToArray(Data, "wii", "id").map((id) =>
              <Image key={id} src={"/images/games/wii/" + id + ".png"} width="160" height="224"></Image>)
          }
        </Gallary>

        <h1>Wii U</h1>
        <Gallary>
          {
            jsonToArray(Data, "wiiu", "id").map((id) =>
              <Image key={id} src={"/images/games/wiiu/" + id + ".jpg"} width="175" height="250"></Image>)
          }
        </Gallary>

        <h1>Gamecube</h1>
        <Gallary>
          {
            jsonToArray(Data, "gcn", "id").map((id) =>
              <Image key={id} src={"/images/games/wii/" + id + ".png"} width="160" height="224"></Image>)
          }
        </Gallary>

        <h1>PS3</h1>
        <Gallary>
          {
            jsonToArray(Data, "ps3", "id").map((id) =>
              <Image key={id} src={"/images/games/ps3/" + id + ".jpg"} width="175" height="204"></Image>)
          }
        </Gallary>

        <h1>3DS</h1>
        <Gallary>
          {
            jsonToArray(Data, "3ds", "id").map((id) =>
              <Image key={id} src={"/images/games/3ds/" + id + ".jpg"} width="200" height="176"></Image>)
          }
        </Gallary>
      </Text>

    </Layout>
  );
}