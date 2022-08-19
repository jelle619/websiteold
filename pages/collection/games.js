// import { useState } from 'react';
// import Head from 'next/head';
// import Link from 'next/link';
// import Image from 'next/image';

import Layout from "../../components/layout";
import Text from "../../components/text";
import Gallary from "../../components/gallery";

import Image from "next/image";
import Link from "next/link";

import Data from "../../public/data/games.json";

function jsonToArray(data, key, key2) {
  var array = [];
  for (var value in data[key]) {
    array.push(Data[key][value][key2])
  }
  return array;
}

export default function Books() {
  return (
    <Layout>
      <Text>
        <h1>Wii</h1>
        <table>
          <tbody>
            <tr>
              <th>Mario Kart Wii</th>
              <td>t.b.d.</td>
            </tr>
            <tr>
              <th>RiiTag</th>
              <td><Link href="https://tag.rc24.xyz/154498873006620672/tag.max.png"><a>Link</a></Link></td>
            </tr>
          </tbody>
        </table>
        <p>Due to the discontinuation of Nintendo WFC, the friend codes listed above make use of the Wiimmfi replacement service. To make use of this service on your own Wii system, follow <Link href="https://wii.guide/wiimmfi.html"><a>this guide</a></Link></p>
        <Gallary>
          {
            jsonToArray(Data, "wii", "id").map((id) =>
              <Image key={id} src={"/images/games/wii/" + id + ".png"} width="160" height="224"></Image>)
          }
        </Gallary>

        <h1>Wii U</h1>
        <table>
          <tbody>
            <tr>
              <th>Nintendo Network</th>
              <td>jelle619</td>
            </tr>
            <tr>
              <th>RiiTag</th>
              <td><Link href="https://tag.rc24.xyz/154498873006620672/tag.max.png"><a>Link</a></Link></td>
            </tr>
          </tbody>
        </table>
        <Gallary>
          {
            jsonToArray(Data, "wiiu", "id").map((id) =>
              <Image key={id} src={"/images/games/wiiu/" + id + ".jpg"} width="175" height="250"></Image>)
          }
        </Gallary>

        <h1>Gamecube</h1>
        <table>
          <tbody>
            <tr>
              <th>RiiTag</th>
              <td><Link href="https://tag.rc24.xyz/154498873006620672/tag.max.png"><a>Link</a></Link></td>
            </tr>
          </tbody>
        </table>
        <Gallary>
          {
            jsonToArray(Data, "gcn", "id").map((id) =>
              <Image key={id} src={"/images/games/wii/" + id + ".png"} width="160" height="224"></Image>)
          }
        </Gallary>

        <h1>PS3</h1>
        <table>
          <tbody>
            <tr>
              <th>PlayStation Network</th>
              <td>jelle619</td>
            </tr>
          </tbody>
        </table>
        <Gallary>
          {
            jsonToArray(Data, "ps3", "id").map((id) =>
              <Image key={id} src={"/images/games/ps3/" + id + ".jpg"} width="175" height="204"></Image>)
          }
        </Gallary>

        <h1>3DS</h1>
        <table>
          <tbody>
            <tr>
              <th>Nintendo Network</th>
              <td>0087-2381-3510</td>
            </tr>
          </tbody>
        </table>
        <Gallary>
          {
            jsonToArray(Data, "3ds", "id").map((id) =>
              <Image key={id} src={"/images/games/3ds/" + id + ".jpg"} width="200" height="176"></Image>)
          }
        </Gallary>

        <h1>Nintendo Switch</h1>
        <table>
          <tbody>
            <tr>
              <th>Switch Online</th>
              <td>SW-5837-7106-1600</td>
            </tr>
          </tbody>
        </table>

        <h1>Nintendo DS</h1>
        <table>
          <tbody>
            <tr>
              <th>Mario Kart DS</th>
              <td>090795 550041</td>
            </tr>
            <tr>
              <th>42 All-Time Classics</th>
              <td>0779 1064 8180</td>
            </tr>
          </tbody>
        </table>

        <p>Due to the discontinuation of Nintendo WFC, the friend codes listed above make use of the Wiimmfi replacement service. To make use of this service on your own Nintendo DS system, set the Primary DNS of your Wi-Fi network inside the Nintendo WFC Settings to RIiConnect24's DNS: 167.86.108.126. For your secondary DNS, use any generic DNS resolver (e.g. Cloudflare's 1.1.1.1).</p>
      </Text>

    </Layout>
  );
}