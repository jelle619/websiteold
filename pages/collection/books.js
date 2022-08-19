// import { useState } from 'react';
// import Head from 'next/head';
// import Link from 'next/link';
// import Image from 'next/image';

import Layout from "../../components/layout";
import Text from "../../components/text"
import Hero from "../../components/hero"
import Image from "next/image"

export default function Books() {
  return (
    <Layout>
      {/* <Hero
        text="Welcome, dragon!"
        src="/images/comissions/drawing_551_commission_blue_fire.png"
        height="calc(100% / 3)"
      /> */}
      <Text>
        <h1>Welcome, dragon! 🐲</h1>
        <p>My name is Bluefire, pleased to meet you.</p>
        <Image
        src="/images/comissions/reference.png"
        height="800"
        width="1300"
        layout="responsive"
      />
      </Text>
    </Layout>
  );
}