import Contact from '@/components/Contact';
import Head from 'next/head'
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import ProjectsDesigner from '@/components/ProjectsDesigner';
import Stack from '@/components/Stack';
import StackDesigner from '@/components/StackDesigner';
import { meta } from '@/data/config';


export default function Index() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="google" content="notranslate"></meta>
        <meta property="og:image" content='/static/favicon/portf.png' key="ogimage" />
      </Head>
      <div className="p-6 lg:p-20 max-w-4xl m-auto w-full content">
        <Hero />
        <div className="p-0 space-y-10">
        <Stack />
          <Projects />
          <StackDesigner />
         
          <ProjectsDesigner />
          <Contact />
          <WhatsAppWidget phoneNumber='+40732994556'
          position="right"
          widgetWidth="300px"
          widgetWidthMobile="260px"
          autoOpen={true}
          autoOpenTimer={2000}
          messageBox={true}
          messageBoxTxt="Hi Team, is there any related service available ?"
          iconSize="80"
          iconColor="white"
          iconBgColor="tomato"
          headerIcon="https://proficientdesigners.in/wp-content/themes/pd/img/logo-new.png"
          headerIconColor="pink"
          headerTxtColor="black"
          headerBgColor="tomato"
          headerTitle="Vitaliy Statkevick"
          headerCaption="Online"
          bodyBgColor="#bbb"
          chatPersonName="Support"
          chatMessage={<>Hi there 👋 <br /><br /> How can I help you?</>}
          footerBgColor="#999"
          btnBgColor="yellow"
          btnTxtColor="black"
          btnTxt="Start Chat"
         />
        </div>
      </div>
    </>
  );
}
