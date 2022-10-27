import React from 'react';

const FAQ = () => {
   return (
      <div className='lg:h-[100vh] mb-10'>
         <h1 className='text-3xl font-bold mt-10 text-left'>Question: What is a Viewport?</h1>
         <h1 className='text-md mt-10 text-left'><span className='text-2xl  font-bold'>Answer:</span> The viewport is the user's visible area of a web page. The viewport varies with the device, and will be smaller on a mobile phone than on a computer screen. In web browser terms, it refers to the part of the document you're viewing which is currently visible in its window. The viewport varies with the device, and will be smaller on a mobile phone than on a computer screen. Before tablets and mobile phones, web pages were designed only for computer screens, and it was common for web pages to have a static design and a fixed size.</h1>
         <h1 className='text-3xl font-bold mt-10 text-left'>Question: Have you used Audio and Video tags? How does they work?</h1>
         <h1 className='text-md mt-10 text-left'><span className='text-2xl font-bold'>Answer:</span> The HTML5 audio and video tags make it simple to add media to a website. You need to set src attribute to identify the media source and include a controls attribute so the user can play and pause the media. Both of these elements are used to add media content on a webpage. An MP4 container often packages AAC or MP3 audio with H.264 video. This is also supported in all modern browsers, as well as Internet Explorer. This is best supported in Firefox and Chrome, but has basically been superseded by the better quality WebM format.</h1>
         <h1 className='text-3xl font-bold mt-10 text-left'>Question: what is hyperlink in html? What tag and attribute will you use for hyperlink?</h1>
         <h1 className='text-md mt-10 text-left'><span className='text-2xl font-bold'>Answer:</span> hyperlink:-A hyperlink is an element in an HTML document. A hyperlink, also called a link or web link, contains an address for a destination and acts as a reference to data. A user can easily follow, jump to, and be directed to the destination by either clicking, tapping on, or hovering over the link. They give us the ability to connect a document to another document across different computers and networks. Tag use: - a tag defines a hyperlink, which is used to link from one page to another. The most important attribute of the a element is the href attribute, which indicates the link's destination. You can click on a link and jump to another document. You move the mouse over a link, the mouse arrow will turn into a little hand.</h1>
         <h1 className='text-3xl font-bold mt-10 text-left'>Question: What is charset in html? Why will you use it?</h1>
         <h1 className='text-md mt-10 text-left'><span className='text-2xl font-bold '>Answer:</span> The charset attribute specifies the character encoding for the HTML document. The HTML5 specification encourages web developers to use the UTF-8 character set, which covers almost all of the characters and symbols in the world! The charset attribute specifies the character encoding used in an external script file. It is used to display an HTML page properly and correctly because for displaying anything correctly, a web browser must know which character set (character encoding) to use.</h1>
      </div>
   );
};

export default FAQ;